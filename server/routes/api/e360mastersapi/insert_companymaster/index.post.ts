import { defineEventHandler, readBody, getQuery } from "h3";
import { companymasterInE360, documentserialnosettingInE360, projectmasterInE360, customermasterInE360, usermasterInE360, orgcostrateInE360 } from "~/database/tables";
import { eq, and, ilike, sql } from "drizzle-orm";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const db = await getDB();
    const { Tenantid } = getQuery(event);
    const companyjson = Array.isArray(body.companyjson) ? body.companyjson : [body.companyjson];

    const isEmpty = (val: any) => val === undefined || val === null || val === "";

    for (const record of companyjson) {
        let {
            companyid = 0,
            comtenantid,
            companyname,
            comcityid,
            phoneno,
            financialyear,
            fax,
            pincode,
            incorporationdate,
            isactiveflag,
            defaultcomcurrencyid,
            createdcomuserid,
            address3,
            address_street,
            companycode,
        } = record;

        comtenantid ||= Tenantid;

        const requiredFields = {
            comtenantid,
            companyname,
            incorporationdate,
            comcityid,
            defaultcomcurrencyid,
            createdcomuserid,
            address3,
            address_street,
            pincode,
            phoneno,
            fax,
            financialyear,
        };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (isEmpty(value)) {
                return { message: `Mandatory field is missing: ${key}` };
            }
        }

        // Prevent deactivation if linked to active entities
        if (!isactiveflag && companyid > 0) {
            const isLinked = await Promise.any([
                db
                    .select()
                    .from(projectmasterInE360)
                    .where(and(eq(projectmasterInE360.comtenantid, comtenantid), eq(projectmasterInE360.companyid, companyid), eq(projectmasterInE360.isactiveflag, true)))
                    .limit(1),

                db
                    .select()
                    .from(customermasterInE360)
                    .where(and(eq(customermasterInE360.comtenantid, comtenantid), eq(customermasterInE360.companyid, companyid), eq(customermasterInE360.isactiveflag, true)))
                    .limit(1),

                db
                    .select()
                    .from(usermasterInE360)
                    .where(and(eq(usermasterInE360.comtenantid, comtenantid), eq(usermasterInE360.payrollcompanyid, companyid), eq(usermasterInE360.activeflag, true)))
                    .limit(1),

                db
                    .select()
                    .from(orgcostrateInE360)
                    .where(and(eq(orgcostrateInE360.comtenantid, comtenantid), eq(orgcostrateInE360.companyid, companyid), eq(orgcostrateInE360.isactiveflag, true), sql`enddate::date > current_date`))
                    .limit(1),
            ])
                .then(() => true)
                .catch(() => false);

            if (isLinked) {
                return {
                    message: "Company is linked to active records. Delink first.",
                    companyid: null,
                };
            }
        }

        // Check manual/auto code setting
        const serialSetting = await db
            .select({ manualautostatus: documentserialnosettingInE360.manualautostatus })
            .from(documentserialnosettingInE360)
            .where(and(eq(documentserialnosettingInE360.comtenantid, comtenantid), ilike(documentserialnosettingInE360.documenttype, "companycode")))
            .limit(1)
            .then((res) => res[0]);

        const isManual = !serialSetting || (serialSetting.manualautostatus?.toUpperCase() ?? "M") === "M";

        if (isManual && isEmpty(companycode)) {
            return {
                message: "companycode is mandatory for manual entry",
                companyid: null,
            };
        }

        // Duplicate Checks
        const nameDup = await db
            .select()
            .from(companymasterInE360)
            .where(and(eq(companymasterInE360.comtenantid, comtenantid), ilike(companymasterInE360.companyname, companyname), sql`${companymasterInE360.companyid} != ${companyid}`))
            .limit(1);

        if (nameDup.length > 0) {
            return { message: "Duplicate companyname", companyid: null };
        }

        if (isManual) {
            const codeDup = await db
                .select()
                .from(companymasterInE360)
                .where(and(eq(companymasterInE360.comtenantid, comtenantid), ilike(companymasterInE360.companycode, companycode), sql`${companymasterInE360.companyid} != ${companyid}`))
                .limit(1);

            if (codeDup.length > 0) {
                return { message: "Duplicate companycode", companyid: null };
            }
        }

        // Auto-generate companycode
        let finalCompanyCode = companycode;
        if (!isManual) {
            const result = await db.execute(sql`
        SELECT * FROM e360.com_fn_generatedocumentsequence(
          ${comtenantid}, ${companyid}, 'companycode', '', '', '', 'U'
        )
      `);
            finalCompanyCode = result?.[0]?.t?.[0]?.serialno;

            if (!finalCompanyCode) {
                return {
                    message: "companycode configuration missing",
                    companyid: null,
                };
            }
        }

        const now = new Date();

        // Insert or Update
        if (companyid > 0) {
            await db
                .update(companymasterInE360)
                .set({
                    ...record,
                    companycode: finalCompanyCode,
                    modifiedtimestamp: now,
                })
                .where(eq(companymasterInE360.companyid, companyid));
        } else {
            const [inserted] = await db
                .insert(companymasterInE360)
                .values({
                    ...record,
                    companycode: finalCompanyCode,
                    createdtimestamp: now,
                    modifiedtimestamp: now,
                    modifiedcomuserid: createdcomuserid,
                })
                .returning({ companyid: companymasterInE360.companyid });

            record.companyid = inserted.companyid;
        }
    }

    const [first] = companyjson;

    return {
        message: "ok",
        data: {
            message: "Success",
            companyid: first?.companyid ?? null,
            companycode: first?.companycode ?? null,
        },
    };
});

import { and, or, eq, sql } from "drizzle-orm";
import { companymasterInE360, citymasterInE360, statemasterInE360, countrymasterInE360, usermasterInE360 } from "~/database/tables";
import { defineEventHandler, readBody, getQuery } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const query = getQuery(event);

    const comtenantid = body.Tenantid || query.Tenantid;
    const { companyid, limit, page, searchname, sorttype, status } = body;

    if (!comtenantid) {
        return {
            message: "Missing comtenantid",
            data: [],
        };
    }

    const limitValue = limit || 25;
    const pageValue = page || 1;
    const sortType = sorttype || 1;
    const searchName = searchname || "";
    const statusFilter = status || "ALL";

    const db = await getDB();

    // Build WHERE conditions
    const conditions = [eq(companymasterInE360.comtenantid, comtenantid)];

    if (companyid) {
        conditions.push(eq(companymasterInE360.companyid, companyid));
    }

    if (searchName) {
        conditions.push(
            or(sql`upper(${companymasterInE360.companyname}) LIKE upper(concat('%', ${searchName}, '%'))`, sql`upper(${companymasterInE360.companycode}) LIKE upper(concat('%', ${searchName}, '%'))`)
        );
    }

    if (statusFilter === "Active") {
        conditions.push(eq(companymasterInE360.isactiveflag, true));
    } else if (statusFilter === "Inactive") {
        conditions.push(eq(companymasterInE360.isactiveflag, false));
    }

    const companies = await db
        .select({
            companyid: companymasterInE360.companyid,
            comtenantid: companymasterInE360.comtenantid,
            companyname: companymasterInE360.companyname,
            parentcompanyname: companymasterInE360.parentcompanyname,
            shortname: companymasterInE360.shortname,
            companycode: companymasterInE360.companycode,
            address_street: companymasterInE360.addressStreet,
            address_pobox: companymasterInE360.addressPobox,
            address3: companymasterInE360.address3,
            pincode: companymasterInE360.pincode,
            phoneno: companymasterInE360.phoneno,
            comcityid: companymasterInE360.comcityid,
            comstateid: companymasterInE360.comstateid,
            comcountryid: companymasterInE360.comcountryid,
            region: companymasterInE360.region,
            mobile1: companymasterInE360.mobile1,
            fax: companymasterInE360.fax,
            isactiveflag: companymasterInE360.isactiveflag,
            createdtimestamp: companymasterInE360.createdtimestamp,
            createdcomuserid: companymasterInE360.createdcomuserid,
            modifiedtimestamp: companymasterInE360.modifiedtimestamp,
            modifiedcomuserid: companymasterInE360.modifiedcomuserid,
            isdeleteflag: companymasterInE360.isdeleteflag,
            deletedtimestamp: companymasterInE360.deletedtimestamp,
            deletedcomuserid: companymasterInE360.deletedcomuserid,
            defaultcomcurrencyid: companymasterInE360.defaultcomcurrencyid,
            notes: companymasterInE360.notes,
            incorporationdate: sql`TO_CHAR(${companymasterInE360.incorporationdate}, 'YYYY-MM-DD')`,
            financialyear: companymasterInE360.financialyear,
            cityname: citymasterInE360.cityname,
            statename: statemasterInE360.statename,
            countryname: countrymasterInE360.countryname,
            createduser: sql`COALESCE(${usermasterInE360.firstname}, '') || ' ' || COALESCE(${usermasterInE360.lastname}, '')`,
            modifieduser: sql`COALESCE(${usermasterInE360.firstname}, '') || ' ' || COALESCE(${usermasterInE360.lastname}, '')`,
            totalcount: sql`count(*) OVER()`,
        })
        .from(companymasterInE360)
        .leftJoin(citymasterInE360, eq(companymasterInE360.comcityid, citymasterInE360.comcityid))
        .leftJoin(statemasterInE360, eq(companymasterInE360.comstateid, statemasterInE360.comstateid))
        .leftJoin(countrymasterInE360, eq(companymasterInE360.comcountryid, countrymasterInE360.comcountryid))
        .leftJoin(usermasterInE360, eq(companymasterInE360.createdcomuserid, usermasterInE360.comuserid))
        .where(and(...conditions))
        .orderBy(
            sortType === 1
                ? sql`trim(${companymasterInE360.companyname})`
                : sortType === 2
                ? sql`trim(${companymasterInE360.companyname}) DESC`
                : sortType === 3
                ? sql`${companymasterInE360.createdtimestamp} DESC`
                : sql`${companymasterInE360.createdtimestamp}`
        )
        .limit(limitValue)
        .offset(limitValue * (pageValue - 1));

    return {
        data: companies.map((company) => ({
            companyid: company.companyid,
            comtenantid: company.comtenantid,
            companyname: company.companyname,
            parentcompanyname: company.parentcompanyname,
            shortname: company.shortname,
            companycode: company.companycode,
            address_street: company.address_street,
            address_pobox: company.address_pobox,
            address3: company.address3,
            pincode: company.pincode,
            phoneno: company.phoneno,
            comcityid: company.comcityid,
            comstateid: company.comstateid,
            comcountryid: company.comcountryid,
            region: company.region,
            mobile1: company.mobile1,
            fax: company.fax,
            isactiveflag: company.isactiveflag,
            createdtimestamp: company.createdtimestamp?.replace(" ", "T") || null,
            createdcomuserid: company.createdcomuserid,
            modifiedtimestamp: company.modifiedtimestamp?.replace(" ", "T") || null,
            modifiedcomuserid: company.modifiedcomuserid,
            isdeleteflag: company.isdeleteflag,
            deletedtimestamp: company.deletedtimestamp,
            deletedcomuserid: company.deletedcomuserid,
            defaultcomcurrencyid: company.defaultcomcurrencyid,
            notes: company.notes,
            incorporationdate: company.incorporationdate,
            createduser: company.createduser,
            modifieduser: company.modifieduser,
            countryname: company.countryname,
            statename: company.statename,
            cityname: company.cityname,
            financialyear: company.financialyear,
            totalcount: company.totalcount,
        })),
        message: "Ok",
    };
});

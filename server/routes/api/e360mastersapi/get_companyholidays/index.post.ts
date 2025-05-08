import { and, or, eq, sql } from "drizzle-orm";
import { companyholidaysInE360, companymasterInE360, usermasterInE360, citymasterInE360, statemasterInE360 } from "~/database/tables";
import { defineEventHandler, readBody, getQuery } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const query = getQuery(event);

    const comtenantid = body.Tenantid || query.Tenantid;
    const { companyid = 0, companyholidaysid = 0, limit = 25, page = 1, sorttype = 1, searchname = "", status = "ALL", fromdate = "", todate = "", comstateid = [] } = body;

    if (!comtenantid) {
        return {
            message: "Missing comtenantid",
            data: [],
        };
    }

    const db = await getDB();
    const offset = limit * (page - 1);

    // Base query conditions
    const conditions = [eq(companyholidaysInE360.comtenantid, comtenantid)];

    // Add conditions dynamically
    if (companyid && companyid !== 0) {
        conditions.push(eq(companyholidaysInE360.companyid, companyid));
    }

    if (companyholidaysid && companyholidaysid !== 0) {
        conditions.push(eq(companyholidaysInE360.companyholidaysid, companyholidaysid));
    }
    if (Array.isArray(comstateid) && comstateid.length > 0) {
        conditions.push(sql`${statemasterInE360.comstateid} = ANY(ARRAY[${comstateid.join(", ")}]::int[])`);
    }

    if (searchname) {
        conditions.push(
            or(sql`upper(${companymasterInE360.companyname}) like upper(concat('%', ${searchname}, '%'))`, sql`upper(${companyholidaysInE360.reason}) like upper(concat('%', ${searchname}, '%'))`)
        );
    }

    if (status.toUpperCase() === "ACTIVE") {
        conditions.push(eq(companyholidaysInE360.isactiveflag, true));
    } else if (status.toUpperCase() === "INACTIVE") {
        conditions.push(eq(companyholidaysInE360.isactiveflag, false));
    }

    if (fromdate) {
        conditions.push(sql`${companyholidaysInE360.holiday} >= ${fromdate}::date`);
    }

    if (todate) {
        conditions.push(sql`${companyholidaysInE360.holiday} <= ${todate}::date`);
    }

    // Sorting logic
    const sortOrder =
        sorttype === 2
            ? [sql`trim(${companymasterInE360.companyname}) DESC`]
            : sorttype === 3
            ? [sql`${companyholidaysInE360.createdtimestamp} DESC`]
            : sorttype === 4
            ? [sql`${companyholidaysInE360.createdtimestamp}`]
            : [sql`trim(${companymasterInE360.companyname})`];

    // Main query
    const holidays = await db
        .select({
            companyholidaysid: companyholidaysInE360.companyholidaysid,
            companyid: companyholidaysInE360.companyid,
            comtenantid: companyholidaysInE360.comtenantid,
            holiday: sql`TO_CHAR(${companyholidaysInE360.holiday}, 'YYYY-MM-DD')`,
            reason: companyholidaysInE360.reason,
            isactiveflag: companyholidaysInE360.isactiveflag,
            createdtimestamp: companyholidaysInE360.createdtimestamp,
            createdcomuserid: companyholidaysInE360.createdcomuserid,
            companyname: companymasterInE360.companyname,
            createduser: sql`COALESCE(${usermasterInE360.firstname}, '') || ' ' || COALESCE(${usermasterInE360.lastname}, '')`,
            statename: statemasterInE360.statename,
            comstateid: statemasterInE360.comstateid,
            comcountryid: statemasterInE360.comcountryid,
            totalcount: sql`count(*) OVER()`,
            totalpages: sql`CEIL(count(*) OVER()::float / ${limit})`,
        })
        .from(companyholidaysInE360)
        .innerJoin(companymasterInE360, eq(companyholidaysInE360.companyid, companymasterInE360.companyid))
        .leftJoin(usermasterInE360, eq(companyholidaysInE360.createdcomuserid, usermasterInE360.comuserid))
        .leftJoin(citymasterInE360, eq(companymasterInE360.comcityid, citymasterInE360.comcityid))
        .leftJoin(statemasterInE360, eq(citymasterInE360.comstateid, statemasterInE360.comstateid))
        .where(and(...conditions))
        .orderBy(...sortOrder)
        .limit(limit)
        .offset(offset);

    return {
        data: holidays.map((h) => ({
            companyholidaysid: h.companyholidaysid,
            companyid: h.companyid,
            comtenantid: h.comtenantid,
            holiday: h.holiday,
            reason: h.reason,
            isactiveflag: h.isactiveflag,
            createdtimestamp: h.createdtimestamp?.replace(" ", "T") || null,
            createdcomuserid: h.createdcomuserid,
            companyname: h.companyname,
            createduser: h.createduser,
            statename: h.statename,
            comstateid: h.comstateid,
            comcountryid: h.comcountryid,
            totalcount: h.totalcount,
            totalpages: h.totalpages,
        })),
        message: "Ok",
    };
});

import { defineEventHandler, readBody, getQuery } from "h3";
import { and, or, eq, ilike, sql } from "drizzle-orm";
import { citymasterInE360, statemasterInE360, countrymasterInE360, usermasterInE360 } from "~/database/tables";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const query = getQuery(event);

    const { comstateid = 0, comcityid = 0, page = 1, sorttype = 1, searchname = "", status = "ALL" } = body;

    const tenantId = query.Tenantid ?? body.Tenantid;
    const limit = 25;
    const offset = limit * (page - 1);

    if (!tenantId) {
        return {
            status: "Error",
            message: "Missing Tenantid",
            data: [],
        };
    }

    const db = await getDB();

    const filters = [eq(citymasterInE360.comtenantid, tenantId)];

    if (comcityid !== 0) {
        filters.push(eq(citymasterInE360.comcityid, comcityid));
    }

    if (comstateid !== 0) {
        filters.push(eq(citymasterInE360.comstateid, comstateid));
    }

    if (searchname.trim()) {
        filters.push(or(ilike(citymasterInE360.cityname, `%${searchname}%`), ilike(citymasterInE360.citycode, `%${searchname}%`)));
    }

    const statusUpper = status.toUpperCase();
    if (statusUpper === "ACTIVE") {
        filters.push(eq(citymasterInE360.isactiveflag, true));
    } else if (statusUpper === "INACTIVE") {
        filters.push(eq(citymasterInE360.isactiveflag, false));
    }

    const orderBy = (() => {
        switch (sorttype) {
            case 1:
                return [citymasterInE360.cityname];
            case 2:
                return [sql`${citymasterInE360.cityname} DESC`];
            case 3:
                return [sql`${citymasterInE360.createdtimestamp} DESC`];
            case 4:
                return [citymasterInE360.createdtimestamp];
            default:
                return [citymasterInE360.cityname];
        }
    })();

    const cities = await db
        .select({
            comcityid: citymasterInE360.comcityid,
            comstateid: citymasterInE360.comstateid,
            cityname: citymasterInE360.cityname,
            citycode: citymasterInE360.citycode,
            comtenantid: citymasterInE360.comtenantid,
            isactiveflag: citymasterInE360.isactiveflag,
            createdtimestamp: citymasterInE360.createdtimestamp,
            createdcomuserid: citymasterInE360.createdcomuserid,
            modifiedtimestamp: citymasterInE360.modifiedtimestamp,
            modifiedcomuserid: citymasterInE360.modifiedcomuserid,
            notes: citymasterInE360.notes,
            createduser: sql`COALESCE(cu.firstname, '') || ' ' || COALESCE(cu.lastname, '')`.as("createduser"),
            modifieduser: sql`COALESCE(mu.firstname, '') || ' ' || COALESCE(mu.lastname, '')`.as("modifieduser"),
            statename: statemasterInE360.statename,
            countryname: countrymasterInE360.countryname,
            totalcount: sql`COUNT(*) OVER()`.as("totalcount"),
        })
        .from(citymasterInE360)
        .leftJoin(sql`${usermasterInE360} AS cu`, sql`cu.comuserid = ${citymasterInE360.createdcomuserid}`)
        .leftJoin(sql`${usermasterInE360} AS mu`, sql`mu.comuserid = ${citymasterInE360.modifiedcomuserid}`)
        .leftJoin(statemasterInE360, eq(citymasterInE360.comstateid, statemasterInE360.comstateid))
        .leftJoin(countrymasterInE360, eq(statemasterInE360.comcountryid, countrymasterInE360.comcountryid))
        .where(and(...filters))
        .orderBy(...orderBy)
        .limit(limit)
        .offset(offset);

    return {
        data: cities.map((city) => ({
            comcityid: city.comcityid,
            comstateid: city.comstateid,
            cityname: city.cityname,
            citycode: city.citycode,
            comtenantid: city.comtenantid,
            isactiveflag: city.isactiveflag,
            createdtimestamp: city.createdtimestamp ? city.createdtimestamp.replace(" ", "T") : null,
            createdcomuserid: city.createdcomuserid,
            modifiedtimestamp: city.modifiedtimestamp ? city.modifiedtimestamp.replace(" ", "T") : null,
            modifiedcomuserid: city.modifiedcomuserid,
            notes: city.notes === "" ? "" : city.notes,
            createduser: city.createduser || null,
            modifieduser: city.modifieduser || null,
            countryname: city.countryname || null,
            statename: city.statename || null,
            totalcount: typeof city.totalcount === "string" ? parseInt(city.totalcount) : city.totalcount,
        })),
        message: "ok",
    };
});

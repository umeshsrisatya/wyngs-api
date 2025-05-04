import { eq, and } from "drizzle-orm";
import {
    usermasterInE360,
    tenantmasterInE360,
    tenantsubscriptionInE360,
    companymasterInE360,
    countrymasterInE360,
    workforcegroupmasterInE360,
    workertypemasterInE360,
    roleusermappingInE360,
    rolemasterInE360,
    datmodulealiasInE360,
    datmoduleInE360,
    datmenusInE360,
    datmenupermissionInE360,
} from "~/database/tables";

import { defineEventHandler, readBody } from "h3";
import { comparePassword } from "~/utils/hash-service";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const db = await getDB();
    const { username, comtenantid, loginmethod, password } = body;
    const tenantid = comtenantid;

    // Validate request body
    if (!username || !tenantid || !loginmethod || !password) {
        return {
            status: "Error",
            message: "Missing username, tenantId, login method, or password",
        };
    }

    // Check if tenant exists
    const [tenant] = await db.select().from(tenantmasterInE360).where(eq(tenantmasterInE360.comtenantid, tenantid)).limit(1);
    if (!tenant) {
        return { status: "Tenant Not Found" };
    }

    //Check if tenant has subscribed
    const [subscription] = await db
        .select()
        .from(tenantsubscriptionInE360)
        .where(and(eq(tenantsubscriptionInE360.comtenantid, tenantid), eq(tenantsubscriptionInE360.activeflag, true)))
        .limit(1);
    if (!subscription) {
        return { status: "Tenant Not Subscribed" };
    }

    // Fetch user exist in database
    const [user] = await db
        .select()
        .from(usermasterInE360)
        .where(and(eq(usermasterInE360.username, username), eq(usermasterInE360.comtenantid, tenantid)))
        .limit(1);
    if (!user) {
        return { status: "User Not Found" };
    }
    if (!user.activeflag) {
        return { status: "Inactive User" };
    }

    // Check if the password is correct
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        return { status: "Invalid Password" };
    }

    // check for company details
    const [company] = await db
        .select()
        .from(companymasterInE360)
        .where(and(eq(companymasterInE360.companyid, user.payrollcompanyid))) //, eq(companymasterInE360.isactiveflag, true)
        .limit(1);

    // check for country details
    const [country] = await db
        .select()
        .from(countrymasterInE360)
        .where(and(eq(countrymasterInE360.comcountryid, user.nationalityid))) //, eq(countrymasterInE360.isactiveflag, true)
        .limit(1);

    // check for workforce group details
    const [workforcegroup] = await db
        .select()
        .from(workforcegroupmasterInE360)
        .where(and(eq(workforcegroupmasterInE360.comtenantid, tenantid), eq(workforcegroupmasterInE360.wfgid, user.workforcegroup))) //, eq(workforcegroupmasterInE360.isactiveflag, true)
        .limit(1);

    // check for worker type details
    const [workertype] = await db
        .select()
        .from(workertypemasterInE360)
        .where(and(eq(workertypemasterInE360.comtenantid, tenantid), eq(workertypemasterInE360.workertypeid, user.workerType))) //, eq(workertypemasterInE360.isactiveflag, true)
        .limit(1);

    // Get raw role data
    const roles = await db
        .select({
            roleid: rolemasterInE360.roleid,
            rolename: rolemasterInE360.rolename,
            rolecode: rolemasterInE360.code,
        })
        .from(roleusermappingInE360)
        .innerJoin(rolemasterInE360, eq(roleusermappingInE360.roleid, rolemasterInE360.roleid))
        .where(and(eq(roleusermappingInE360.comuserid, user.comuserid), eq(roleusermappingInE360.comtenantid, tenantid)));

    // get details for datmodulealias, datmodule, datmenus, and datmenupermission by doing inner joins
    const modulealias = await db
        .select({
            modulealiasname: datmodulealiasInE360.modulealiasname,
            modulealiasdisplayorder: datmodulealiasInE360.displayorder,

            modulename: datmoduleInE360.modulename,
            moduledisplayorder: datmoduleInE360.displayorder,

            menuname: datmenusInE360.menuname,
            datmenuid: datmenusInE360.datmenuid,
            relativepage: datmenusInE360.relativepage,
            menudisplayorder: datmenusInE360.displayorder,

            permissionname: datmenupermissionInE360.permissionname,
        })
        .from(datmodulealiasInE360)
        .innerJoin(datmoduleInE360, eq(datmodulealiasInE360.datmodulealiasid, datmoduleInE360.datmodulealiasid))
        .innerJoin(datmenusInE360, eq(datmoduleInE360.datmoduleid, datmenusInE360.datmoduleid))
        .innerJoin(datmenupermissionInE360, eq(datmenusInE360.datmenuid, datmenupermissionInE360.datmenuid))
        .where(eq(datmodulealiasInE360.comtenantid, tenantid));

    // Return with transformation
    return {
        data: modulealias.map((item) => ({
            Message: "Success",
            comuserid: user.comuserid,
            firstname: user.firstname,
            lastname: user.lastname,

            companyid: user.payrollcompanyid,
            companyname: company?.companyname ?? null,

            countryid: user.nationalityid,
            countryname: country?.countryname ?? null,

            workforcegroupid: user.workforcegroup,
            workforcegroupname: workforcegroup?.workforcegroup ?? null,

            workertypeid_: user.workerType,
            workertypename: workertype?.workertype ?? null,

            passwordresetrequired: user.passwordexpiredflag,
            loginmethod: loginmethod,

            modulealiasname: item.modulealiasname,
            modulealiasdisplayorder: item.modulealiasdisplayorder,
            moduledetails: [
                {
                    modulename: item.modulename,
                    moduledisplayorder: item.moduledisplayorder,
                    menuname: item.menuname,
                    datmenuid: item.datmenuid,
                    relativePage: item.relativepage,
                    menudisplayorder: item.menudisplayorder,
                },
            ],

            projectlist: null,
            rolelist: roles.map((role) => ({
                roleid: role.roleid,
                rolename: role.rolename,
                rolecode: role.rolecode,
                // Add more transformation if needed
            })),
        })),
        token: null,
    };
});

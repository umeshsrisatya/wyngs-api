import { eq, and, or } from "drizzle-orm";
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
    rolemenusInE360,
    datmenupermissionInE360,
    rolemenupermissionsInE360,
    projectmasterInE360,
    comuserprojectmappingInE360,
} from "~/database/tables";
import { generateToken } from "~/utils/jwt-service";
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

    // get project details
    const projects = await db
        .select({
            projectid: projectmasterInE360.projectid,
            Projectname: projectmasterInE360.projectname,
        })
        .from(projectmasterInE360)
        .innerJoin(
            comuserprojectmappingInE360,
            and(eq(projectmasterInE360.projectid, comuserprojectmappingInE360.comprojectid), eq(projectmasterInE360.comtenantid, comuserprojectmappingInE360.comtenantid))
        )
        .where(and(eq(comuserprojectmappingInE360.comuserid, user.comuserid), eq(comuserprojectmappingInE360.comtenantid, user.comtenantid)));

    const rawData = await db
        .select({
            roleid: rolemasterInE360.roleid,
            datmodulealiasid: datmodulealiasInE360.datmodulealiasid,
            modulealiasname: datmodulealiasInE360.modulealiasname,
            modulealiasdisplayorder: datmodulealiasInE360.displayorder,

            datmoduleid: datmoduleInE360.datmoduleid,
            modulename: datmoduleInE360.modulename,
            moduledisplayorder: datmoduleInE360.displayorder,

            datmenuid: datmenusInE360.datmenuid,
            menuname3: datmenusInE360.menuname,
            relativepage: datmenusInE360.relativepage,
            menudisplayorder: datmenusInE360.displayorder,

            permissionname: datmenupermissionInE360.permissionname,
        })
        .from(roleusermappingInE360)
        .innerJoin(rolemasterInE360, eq(roleusermappingInE360.roleid, rolemasterInE360.roleid))
        .innerJoin(rolemenusInE360, eq(rolemasterInE360.roleid, rolemenusInE360.roleid))
        .innerJoin(datmenusInE360, eq(rolemenusInE360.datmenuid, datmenusInE360.datmenuid))
        .innerJoin(datmoduleInE360, eq(datmenusInE360.datmoduleid, datmoduleInE360.datmoduleid))
        .innerJoin(datmodulealiasInE360, eq(datmoduleInE360.datmodulealiasid, datmodulealiasInE360.datmodulealiasid))
        .leftJoin(rolemenupermissionsInE360, and(eq(rolemenupermissionsInE360.roleid, rolemasterInE360.roleid), eq(rolemenupermissionsInE360.datmenuid, datmenusInE360.datmenuid)))
        .innerJoin(
            datmenupermissionInE360,
            and(
                eq(datmenusInE360.datmenuid, datmenupermissionInE360.datmenuid),
                or(
                    eq(rolemenusInE360.isfullrights, true), // full rights: get all permissions
                    eq(datmenupermissionInE360.datmenupermissionid, rolemenupermissionsInE360.datmenupermissionid) // partial rights: get only mapped
                )
            )
        )
        .where(and(eq(roleusermappingInE360.comuserid, user.comuserid), eq(roleusermappingInE360.comtenantid, tenantid), eq(datmodulealiasInE360.comtenantid, tenantid)));

    // Grouping logic
    const aliasMap = new Map<number, any>();

    for (const row of rawData) {
        if (!aliasMap.has(row.datmodulealiasid)) {
            aliasMap.set(row.datmodulealiasid, {
                datmodulealiasid: row.datmodulealiasid,
                modulealiasname: row.modulealiasname,
                modulealiasdisplayorder: row.modulealiasdisplayorder,
                moduledetails: [],
                menuProcessed: new Map<number, boolean>(),
            });
        }

        const alias = aliasMap.get(row.datmodulealiasid);

        if (!alias.menuProcessed.has(row.datmenuid)) {
            alias.moduledetails.push({
                modulename: row.modulename,
                moduledisplayorder: row.moduledisplayorder,
                menuname: [
                    {
                        menuname3: row.menuname3,
                        datmenuid: row.datmenuid,
                        RelativePage3: row.relativepage,
                        menudisplayorder: row.menudisplayorder,
                        permissionnames: [],
                    },
                ],
            });
            alias.menuProcessed.set(row.datmenuid, true);
        }

        const moduledetail = alias.moduledetails.find((md) => md.menuname.some((menu) => menu.datmenuid === row.datmenuid));
        const menu = moduledetail.menuname.find((menu) => menu.datmenuid === row.datmenuid);

        if (!menu.permissionnames.some((p) => p.permissionname === row.permissionname)) {
            menu.permissionnames.push({ permissionname: row.permissionname });
        }
    }

    // Final structure
    const sortedAliasList = Array.from(aliasMap.values()).sort((a, b) => a.modulealiasdisplayorder - b.modulealiasdisplayorder);

    return {
        data: sortedAliasList.map((alias) => ({
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
            modulealiasname: alias.modulealiasname,
            modulealiasdisplayorder: alias.modulealiasdisplayorder,
            moduledetails:
                alias.moduledetails?.map((mod) => ({
                    modulename: mod.modulename,
                    moduledisplayorder: mod.moduledisplayorder,
                    menuname: mod.menuname,
                })) || null,
            projectlist:
                projects?.map((project) => ({
                    projectid: project.projectid,
                    projectname: project.Projectname,
                })) || null,
            rolelist: roles.map((role) => ({
                roleid: role.roleid,
                rolename: role.rolename,
                rolecode: role.rolecode,
            })),
        })),
        token: generateToken(user),
    };
});

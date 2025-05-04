import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const rolemasterInE360 = e360.table("rolemaster", {
    roleid: integer()
        .default(sql`nextval('roleid_roleid_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    rolename: varchar({ length: 500 }),
    code: varchar({ length: 50 }),
    activeflag: boolean(),
    comtenantid: integer().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    istenantadmin: boolean(),
    issystemadmin: boolean(),
    ismmadmin: boolean(),
    isfinancemanager: boolean(),
    isdeliverymanger: boolean(),
    istalentmanger: boolean(),
    ispeoplemanager: boolean(),
    issalesmanager: boolean(),
    ispractisehead: boolean(),
    isemployee: boolean(),
    isbuhead: boolean(),
    isservicelinehead: boolean(),
    ispmo: boolean(),
    issystemrole: boolean(),
});

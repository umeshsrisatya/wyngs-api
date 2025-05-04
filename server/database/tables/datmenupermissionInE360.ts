import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const datmenupermissionInE360 = e360.table("datmenupermission", {
    datmenupermissionid: integer()
        .default(sql`nextval('datmenupermission_datmenupermissionid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    datmenuid: integer().notNull(),
    permissionname: varchar({ length: 150 }),
    activeflag: boolean(),
    comtenantid: integer().notNull(),
    notes: varchar({ length: 100 }),
    displayorder: integer(),
});

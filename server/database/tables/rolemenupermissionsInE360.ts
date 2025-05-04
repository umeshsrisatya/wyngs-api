import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const rolemenupermissionsInE360 = e360.table("rolemenupermissions", {
    rolemenupermissionsid: integer()
        .default(sql`nextval('rolemenupermissions_rolemenupermissionsid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    rolemenuid: integer().notNull(),
    roleid: integer().notNull(),
    datmenuid: integer(),
    datmenupermissionid: integer(),
});

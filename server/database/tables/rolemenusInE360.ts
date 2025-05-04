import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const rolemenusInE360 = e360.table("rolemenus", {
    rolemenuid: integer()
        .default(sql`nextval('rolemenus_rolemenuid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    roleid: integer().notNull(),
    datmenuid: integer(),
    isfullrights: boolean(),
});

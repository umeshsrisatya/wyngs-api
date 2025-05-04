import { pgTable, pgSchema, uuid, smallint, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const roleusermappingInE360 = e360.table("roleusermapping", {
    roleusermappingid: integer()
        .default(sql`nextval('roleusermapping_roleusermappingid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    roleid: integer().notNull(),
    comuserid: integer().notNull(),
    activeflag: boolean(),
    comtenantid: integer().notNull(),
    createdtimestamp: timestamp({ mode: "string" }),
    createdcomuserid: smallint(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

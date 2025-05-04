import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const workforcegroupmasterInE360 = e360.table("workforcegroupmaster", {
    wfgid: integer()
        .default(sql`nextval('workforcegroupmaster_wfgid_pkey'::regclass)`)
        .primaryKey()
        .notNull(),
    workforcegroup: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const workertypemasterInE360 = e360.table("workertypemaster", {
    workertypeid: integer()
        .default(sql`nextval('workertypemaster_workertypemaster_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    workertype: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

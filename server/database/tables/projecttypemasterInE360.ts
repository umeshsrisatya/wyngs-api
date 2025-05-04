import { pgTable, pgSchema, uuid, smallint, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const projecttypemasterInE360 = e360.table("projecttypemaster", {
    projecttypeid: integer()
        .default(sql`nextval('projecttypemaster_projecttype_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    projecttype: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

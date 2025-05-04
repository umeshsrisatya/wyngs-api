import { pgTable, pgSchema, doublePrecision, numeric, smallint, uuid, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const projecteffortdetailsInE360 = e360.table("projecteffortdetails", {
    effortdetailid: integer()
        .default(sql`nextval('projecteffort_peffortdetails_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    projeffortid: integer().notNull(),
    projtaskid: integer(),
    efforthours: doublePrecision().notNull(),
    effortdate: timestamp({ mode: "string" }).notNull(),
    staffremarks: text(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 500 }),
    referencenumber: varchar({ length: 100 }),
    projecttaskid: integer(),
    starttime: numeric({ precision: 12, scale: 2 }),
    endtime: numeric({ precision: 12, scale: 2 }),
    timecategorymasterid: integer(),
});

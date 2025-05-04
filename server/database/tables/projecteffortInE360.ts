import { pgTable, pgSchema, smallint, uuid, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const projecteffortInE360 = e360.table("projecteffort", {
    effortid: integer()
        .default(sql`nextval('projecteffort_peffort_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    projstaffid: integer(),
    projectid: integer(),
    comuserid: integer().notNull(),
    startdate: date(),
    enddate: date(),
    approverremarks: text(),
    approved: boolean(),
    approverid: integer(),
    approvedtimestamp: timestamp({ mode: "string" }),
    clientapproved: boolean(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 500 }),
    comtenantid: integer().notNull(),
    status: integer(),
    prevstatusid: integer(),
    postedtosap: boolean(),
    entrytype: varchar({ length: 50 }),
});

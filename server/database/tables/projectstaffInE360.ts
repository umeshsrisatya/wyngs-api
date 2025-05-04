import { pgTable, pgSchema, uuid, smallint, doublePrecision, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const projectstaffInE360 = e360.table("projectstaff", {
    projectstaffid: integer()
        .default(sql`nextval('projectstaff_projectstaff_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    projroleid: integer().notNull(),
    userid: integer(),
    allocation: doublePrecision().notNull(),
    startdate: timestamp({ mode: "string" }).notNull(),
    enddate: timestamp({ mode: "string" }).notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 500 }),
    projectid: integer(),
    comtenantid: integer(),
    isonsite: boolean(),
    levelid: integer(),
    staffingstatusid: integer(),
    demandid: integer(),
    plannedstartdate: date(),
    plannedenddate: date(),
    plannedallocation: doublePrecision(),
    releasedate: date(),
});

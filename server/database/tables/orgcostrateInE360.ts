import { pgTable, pgSchema, uuid, text, smallint, numeric, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const orgcostrateInE360 = e360.table("orgcostrate", {
    orgcostrateid: integer()
        .default(sql`nextval('orgcostrate_orgcostrateid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comtenantid: integer().notNull(),
    companyid: integer().notNull(),
    designationid: integer(),
    bandid: integer(),
    cost: numeric({ precision: 18, scale: 3 }).notNull(),
    comcurrencyid: integer().notNull(),
    unit: smallint().notNull(),
    startdate: date().notNull(),
    enddate: date().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    countryid: integer(),
    skillareamasterid: integer(),
    techgroupid: integer(),
});

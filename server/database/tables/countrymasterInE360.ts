import { pgTable, pgSchema, uuid, smallint, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const countrymasterInE360 = e360.table("countrymaster", {
    comcountryid: integer()
        .default(sql`nextval('countrymaster_comcountry_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comregionid: integer().notNull(),
    countryname: varchar({ length: 100 }).notNull(),
    countrycode: varchar({ length: 100 }),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

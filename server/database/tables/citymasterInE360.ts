import { pgTable, pgSchema, uuid, text, serial, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const citymasterInE360 = e360.table("citymaster", {
    comcityid: integer()
        .default(sql`nextval('citymaster_comcity_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comstateid: integer().notNull(),
    cityname: varchar({ length: 100 }).notNull(),
    citycode: varchar({ length: 100 }),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

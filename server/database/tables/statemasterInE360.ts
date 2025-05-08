import { pgTable, pgSchema, uuid, text, serial, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const statemasterInE360 = e360.table("statemaster", {
    comstateid: integer()
        .default(sql`nextval('statemaster_comstate_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comcountryid: integer().notNull(),
    statename: varchar({ length: 100 }).notNull(),
    statecode: varchar({ length: 100 }),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

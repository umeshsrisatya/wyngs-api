import { pgTable, pgSchema, serial, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";
export const companyholidaysInE360 = e360.table("companyholidays", {
    companyholidaysid: serial().primaryKey().notNull(),
    companyid: integer().notNull(),
    holiday: date(),
    reason: varchar({ length: 100 }),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

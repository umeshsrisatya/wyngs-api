import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const datmenusInE360 = e360.table("datmenus", {
    datmenuid: integer()
        .default(sql`nextval('datmenus_datmenuid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    datmoduleid: integer().notNull(),
    menuname: varchar({ length: 150 }),
    tcode: varchar({ length: 50 }),
    relativepage: varchar(),
    activeflag: boolean(),
    displayorder: integer(),
    comtenantid: integer().notNull(),
    notes: varchar({ length: 100 }),
});

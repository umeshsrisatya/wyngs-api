import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const datmoduleInE360 = e360.table(
    "datmodule",
    {
        datmoduleid: integer()
            .default(sql`nextval('datmodule_datmoduleid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datmodulealiasid: integer().notNull(),
        modulename: varchar({ length: 50 }),
        parentmoduleid: integer(),
        modulecode: varchar({ length: 10 }),
        displayorder: integer(),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        notes: varchar({ length: 100 }),
    }
);
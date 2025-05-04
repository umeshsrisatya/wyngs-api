import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const datmodulealiasInE360 = e360.table("datmodulealias", {
    datmodulealiasid: smallint()
        .default(sql`nextval('datmodulealias_datmodulealiasid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    modulealiasname: varchar({ length: 50 }),
    code: varchar({ length: 10 }),
    activeflag: boolean(),
    comtenantid: integer().notNull(),
    notes: varchar({ length: 100 }),
    displayorder: smallint(),
});

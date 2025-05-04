import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const comuserprojectmappingInE360 = e360.table("comuserprojectmapping", {
    comuserprojectmappingid: integer()
        .default(sql`nextval('comuserprojectmapping_comuserprojectmappingid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comuserid: integer().notNull(),
    comprojectid: integer().notNull(),
    comtenantid: integer().notNull(),
});

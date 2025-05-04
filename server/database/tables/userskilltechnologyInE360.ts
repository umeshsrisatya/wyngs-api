import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const userskilltechnologyInE360 = e360.table("userskilltechnology", {
    comuserskilltechnologyid: integer()
        .default(sql`nextval('userskilltechnology_comuserskilltechnology_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comuserid: integer().notNull(),
    skillmasterid: integer().notNull(),
    technologymasterid: integer(),
    techversion: varchar({ length: 50 }),
    lastusedyear: date(),
    experienceinmonths: integer(),
    remarks: varchar({ length: 500 }),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    expertise: varchar({ length: 200 }),
    domainid: integer(),
    proficiencyid: integer(),
    isprimary: boolean(),
});

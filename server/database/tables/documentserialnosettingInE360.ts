import { pgTable, pgSchema, uuid, text, smallint, serial, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const documentserialnosettingInE360 = e360.table("documentserialnosetting", {
    documentserialnosettingid: serial().primaryKey().notNull(),
    documenttype: varchar({ length: 100 }).notNull(),
    manualautostatus: varchar({ length: 1 }).notNull(),
    documentprefix: varchar({ length: 7 }).notNull(),
    comtenantid: integer(),
    categorycoderequiredflag: boolean(),
    grouprequiredflag: boolean(),
    companycoderequiredflag: boolean(),
    companyshortnamerequiredflag: boolean(),
    typecoderequiredflag: boolean(),
    leadingzero: smallint(),
    seperatorcharacter: varchar({ length: 1 }),
    serialnogeneratecompanywiseortenantwise: varchar({ length: 1 }),
    createdcomuserid: integer(),
    createddate: timestamp({ mode: "string" }),
    modifiedcomuserid: integer(),
    modifieddate: timestamp({ mode: "string" }),
    tenantidrequiredflag: boolean(),
    tenantcoderequiredflag: boolean(),
});

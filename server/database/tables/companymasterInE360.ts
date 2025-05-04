import { pgTable, pgSchema, uuid, smallint, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const companymasterInE360 = e360.table("companymaster", {
    companyid: integer()
        .default(sql`nextval('companymaster_company_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comtenantid: integer().notNull(),
    companyname: varchar({ length: 250 }).notNull(),
    parentcompanyname: varchar({ length: 250 }),
    shortname: varchar({ length: 20 }),
    companycode: varchar({ length: 20 }),
    addressStreet: varchar("address_street", { length: 50 }),
    addressPobox: varchar("address_pobox", { length: 50 }),
    address3: varchar({ length: 50 }),
    pincode: varchar({ length: 50 }),
    phoneno: varchar({ length: 50 }),
    comcityid: integer(),
    comstateid: smallint(),
    comcountryid: smallint(),
    region: varchar({ length: 250 }),
    mobile1: varchar({ length: 50 }),
    fax: varchar({ length: 50 }),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    isdeleteflag: boolean(),
    deletedtimestamp: timestamp({ mode: "string" }),
    deletedcomuserid: smallint(),
    defaultcomcurrencyid: smallint().notNull(),
    notes: varchar({ length: 100 }),
    incorporationdate: date(),
    financialyear: varchar({ length: 15 }),
});

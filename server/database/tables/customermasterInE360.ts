import { pgTable, pgSchema, uuid, text, smallint, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const customermasterInE360 = e360.table("customermaster", {
    customerid: integer()
        .default(sql`nextval('customermaster_customer_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comtenantid: integer().notNull(),
    customername: varchar({ length: 250 }).notNull(),
    customergroupid: integer().notNull(),
    shortname: varchar({ length: 20 }),
    addressStreet: varchar("address_street", { length: 250 }),
    addressPobox: varchar("address_pobox", { length: 250 }),
    address3: varchar({ length: 200 }),
    pincode: varchar({ length: 50 }),
    phoneno: varchar({ length: 50 }),
    comcityid: integer(),
    comstateid: smallint(),
    comcountryid: smallint(),
    mobile1: varchar({ length: 50 }),
    fax: varchar({ length: 50 }),
    source: varchar({ length: 50 }),
    customeridinsourcesystem: varchar({ length: 100 }),
    accountmanagerid: integer(),
    contactpersonid: integer(),
    defaultcomcurrencyid: smallint(),
    email: varchar(),
    paymentDays: integer("payment_days"),
    gstType: varchar("gst_type"),
    gstNumber: varchar("gst_number"),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    comregionid: integer(),
    industryid: integer(),
    companyid: integer(),
    businessunitid: integer(),
    customercode: varchar({ length: 20 }),
    isSapcustomer: boolean("is_sapcustomer"),
    financialyear: varchar({ length: 15 }),
});

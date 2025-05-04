import { pgTable, pgSchema, uuid, serial, smallint, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const tenantmasterInE360 = e360.table("tenantmaster", {
    comtenantid: serial().primaryKey().notNull(),
    tenantname: varchar({ length: 500 }).notNull(),
    tenantcode: varchar({ length: 100 }),
    themecode: varchar({ length: 100 }),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    loginmethod: varchar({ length: 20 }),
    logopath: varchar({ length: 2500 }),
    heroimagepath: varchar({ length: 2500 }),
    tenantaddress: varchar({ length: 3000 }),
    contactdetails: varchar({ length: 2000 }),
    gstnumber: varchar({ length: 50 }),
    cin: varchar({ length: 50 }),
    comcityid: integer(),
    pincode: varchar({ length: 10 }),
    emailid: varchar({ length: 100 }),
    frontendurl: varchar({ length: 2000 }),
});

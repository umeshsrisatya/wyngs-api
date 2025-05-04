import { pgTable, pgSchema, smallint, uuid, text, timestamp, boolean, integer, varchar, date, index, foreignKey } from "drizzle-orm/pg-core";
const e360 = pgSchema("e360");
import { sql } from "drizzle-orm";

export const tenantsubscriptionInE360 = e360.table("tenantsubscription", {
    tenantsubscriptionid: integer()
        .default(sql`nextval('tenantsubscription_tenantsubscriptionid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    comtenantid: integer().notNull(),
    datsubscriptionpackageid: integer().notNull(),
    subscriptionfromdate: date(),
    subscriptiontodate: date(),
    graceperiodindays: smallint(),
    istrialaccount: boolean(),
    activeflag: boolean(),
    isadvancesubscriptionrenew: boolean().default(false).notNull(),
    createdtimestamp: timestamp({ mode: "string" }),
    createdcomuserid: smallint(),
    deletedcomuserid: smallint(),
    deletedtimestamp: timestamp({ mode: "string" }),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    deletedflag: boolean(),
    billingcycle: smallint(),
});

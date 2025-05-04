import { type Config } from "drizzle-kit";


export default {
  schema: "e360",
  out: "./drizzle/schema.ts",
  dialect: "postgresql",
  schemaFilter: ["e360"],
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },

} satisfies Config;
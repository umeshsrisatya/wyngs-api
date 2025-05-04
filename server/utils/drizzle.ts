import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";


const { Client } = pg;
let db: ReturnType<typeof drizzle> | null = null;

export async function getDB() {
  if (!db) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    db = drizzle(client, { schema });
  }
  return db;
}
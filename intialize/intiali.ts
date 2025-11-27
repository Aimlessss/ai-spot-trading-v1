import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { DeltaClient } from "../agent/trading-orch";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "..", ".env")
});


const MONGO_URI = process.env.MONGO_URI!;
if (!MONGO_URI) throw new Error("❌ Missing MONGO_URI in .env");

const client = new MongoClient(MONGO_URI);
let db: any;

export async function connectDB() {
  if (db) return db;
  await client.connect();
  db = client.db("formflow");
  console.log("✅ Connected to MongoDB");
  return db;
}


export const delta = new DeltaClient(
  process.env.DELTA_EXCHANGE_API_KEY!,
  process.env.DELTA_EXCHANGE_API_SECRET!
);
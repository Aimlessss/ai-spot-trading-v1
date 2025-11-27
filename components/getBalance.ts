import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { getBalance } from "../agent/trading-orch";
import { connectDB } from "../intialize/intiali";
import cors from "cors";


// Fix __dirname for Bun/ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({
  path: path.resolve(__dirname, ".env")
});

const app = express();
app.use(cors());
const PORT = 3000;

// Balance route
app.get("/balance", async (req, res) => {
  try {
    const bal = await getBalance();
    res.json({
      success: true,
      balance: bal.balance
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: String(err)
    });
  }
});


app.get("/balance-history", async (req, res) => {
  const db = await connectDB();
  const col = db.collection("balance"); 

  const history = await col.find().sort({ timestamp: 1 }).toArray();

  res.json(history);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

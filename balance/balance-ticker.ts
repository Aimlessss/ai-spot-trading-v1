
import { getBalance } from "../agent/trading-orch";
import { connectDB } from "../intialize/intiali";
export const db = await connectDB();

export async function logBalance() {
  const bal = await getBalance();
  const col = db.collection("balance");
  await col.insertOne({
    timestamp: Date.now(),
    balance: bal.balance,
    model : "mock"
  });
}
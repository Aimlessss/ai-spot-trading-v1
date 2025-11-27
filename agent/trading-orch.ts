import crypto from "crypto";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { get } from "http";

const BASE_URL = "https://cdn-ind.testnet.deltaex.org";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "..", ".env")
});
export class DeltaClient {
  private apiKey: string;
  private secretKey: string;

  constructor(apiKey: string, secretKey: string) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
  }

  // Generate HMAC signature
  private createSignature(method: string, timestamp: number, path: string, body: string = "") {
    const prehash = method + timestamp + path + body;
    return crypto.createHmac("sha256", this.secretKey).update(prehash).digest("hex");
  }


  // POST /v2/orders  → Place order
  async placeOrder(params: {
    product_id: number,
    size: number;
    side: string;
    order_type: string;
    limit_price?: string;
    client_order_id?: string;
  }) {
    const path = "/v2/orders";
    const method = "POST";

    const body = JSON.stringify(params);
    const timestamp = Math.floor(Date.now() / 1000); // FIXED

    const signature = this.createSignature(method, timestamp, path, body);

    const res = await fetch(BASE_URL + path, {
      method: "POST",
      headers: {
        "api-key": this.apiKey,
        timestamp: String(timestamp),
        signature: signature,
        "Content-Type": "application/json",
      },
      body,
    });

    const json = await res.json();
    return json;
  }

  async getBalance() {
    const path = '/v2/wallet/balances';
    const method = 'GET';
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = this.createSignature(method, timestamp, path);

    const res = await fetch(BASE_URL + path, {
      method: 'GET',
      headers: {
        'api-key': this.apiKey,
        timestamp: String(timestamp),
        signature: signature,
        "Content-Type": "application/json",
      }
    });
    const json: any = await res.json();
    const response = {
      balance: json.result[0].balance as string
    }
    return response;
  }

}

const delta = new DeltaClient(
  process.env.DELTA_EXCHANGE_API_KEY!,
  process.env.DELTA_EXCHANGE_API_SECRET!
);

export async function getBalance() {
  const getBalance = await delta.getBalance();
  return getBalance;
}



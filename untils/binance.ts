import { Spot } from '@binance/connector'

const client = new Spot();

export async function getRawBTCData() {
  const res = await client.klines('BTCUSDT', '1m', { limit: 200 });
  return res.data;
}

export function parseBinanceKlines(raw: any[]) {
  return raw.map(k => ({
    openTime: k[0],
    open: Number(k[1]),
    high: Number(k[2]),
    low: Number(k[3]),
    close: Number(k[4]),
    volume: Number(k[5]),
    closeTime: k[6]
  }));
}


const parsed = parseBinanceKlines(await getRawBTCData()); 
console.log(parsed);

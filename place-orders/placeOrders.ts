import { ExchangeClient, HttpTransport } from '@nktkas/hyperliquid'


const client = new ExchangeClient({
  wallet: process.env.WALLET_ADDRESS!, 
  transport: new HttpTransport(), 
});

export async function placeLong(){
  const order = await client.order({});

}
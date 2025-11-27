import { 
  calculateEMA, 
  calculateSupportResistance, 
  calculateTradingViewRSI, 
  engulfingCandle, 
  getEma, 
  getMacD, 
  getMidPrices, 
  getOpenClose,
  type TengulfingCandle
} from './indicators';
import { CandlestickApi, IsomorphicFetchHttpLibrary, ServerConfiguration } from '../lighter-sdk-ts/generated';
import { parseBinanceKlines, getRawBTCData } from './binance';

const BASE_URL = "https://mainnet.zklighter.elliot.ai";
const SOL_MARKET_ID = 1;

const klinesApi = new CandlestickApi({
  baseServer: new ServerConfiguration(BASE_URL, {}),
  httpApi: new IsomorphicFetchHttpLibrary(),
  middleware: [],
  authMethods: {}
});

export async function techincals(marketId: number, tf: '1m' | '5m' | '15m' | '1h' | '4h', period = 14) {
const now = Date.now() - 1;
const end = Math.floor(now / 1000);
const start = end - (200 * 60); // ~3.3h ago
if (start >= end) throw new Error("start >= end, invalid timestamp math");


  // const candles = await klinesApi.candlesticks(marketId, tf, start, end, 200);
  const candles = parseBinanceKlines(await getRawBTCData()); 

  const rsi = calculateTradingViewRSI(candles, period);
  const ema = calculateEMAsForTimeframe(candles);
  const sr = calculateSupportResistance(candles, 3, tf === '1m' ? 10 : 50);
  const candlesTf =  await getOpenClose(candles);
  const prev = {
    open : candles[1]?.open ?? 0,
    close : candles[1]?.close?? 0
  }
  const curr = {
    open : candles[0]?.open ?? 0,
    close : candles[0]?.close ?? 0
  }
  const candleForEngulf : TengulfingCandle = {
    prev : prev,
    curr : curr
  }
  const engulfing = engulfingCandle(candleForEngulf)

  return { rsi, ema, sr, candlesTf, engulfing };
}

function calculateEMAsForTimeframe(candles: { close: number }[]) {
  const closes = candles.map(c => c.close);

  return {
    EMA20: calculateEMA(closes, 20),
    EMA50: calculateEMA(closes, 50),
    EMA200: calculateEMA(closes, 200)
  };
}

export async function getKlines() {
  const tech1m = await techincals(1, '1m');
  const tech5m = await techincals(1, '5m');
  const tech15m = await techincals(1, '15m');
  const tech1h = await techincals(1, '1h');
  const tech4h = await techincals(1, '4h');

  const response = {
    "1m": tech1m,
    "5m": tech5m,
    "15m": tech15m,
    "1h": tech1h,
    "4h": tech4h
  };

  return response;

}




import type { Candlestick } from "../lighter-sdk-ts/generated";

 export function getEma(prices : number[], period : number) : number[]{
    const multiplier = 2 / (period + 1);

    if(prices.length < period){
        throw new Error('Not enough prices provided');
    }

    let sma = 0;
    for(let i = 0; i<period; i++){
        sma += (prices[i] ?? 0);
    }
    sma /= period;

    const emas = [sma];
    for(let i = 0; i<period; i++){
        const ema = (emas[emas.length - 1] ?? 0) * (1 - multiplier) + (prices[i] ?? 0) * multiplier;
        emas.push(ema);
    }
    return emas
 }

 export async function getMidPrices(candlesticks : Candlestick[]) : Promise<number[]> {
    return candlesticks.map(({open, close}) => Number(((open + close) / 2).toFixed(2)));
 }

type candleStickType = Array<{
    openTime: any;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    closeTime: any;
}>
 export async function getOpenClose(candlesticks : candleStickType) : Promise<any>{
    const open = candlesticks.map(candle => candle.open);
    const close = candlesticks.map(candle => candle.close);

    const candles = {
      open : open,
      close : close
    };
    return candles;
 }

 export async function getMacD(prices : number[]){
  const ema26 = getEma(prices, 26);
  let ema12 = getEma(prices, 12);
  ema12 = ema12.slice(-ema12.length);
  
  const macD = ema12.map((_, index) => (ema12[index] ?? 0) - (ema26[index] ?? 0));

  return macD;

 }

export function calculateTradingViewRSI(
  candles: { close: number }[],
  period: number = 14
): number {
  const closes = candles.map(c => c.close);
  if (closes.length < period + 50) { // at least 50+ more for warm-up
    throw new Error('Not enough candles to match TradingView accuracy');
  }

  // Step 1: Calculate gains/losses for all candles
  const gains = [];
  const losses = [];

  for (let i = 1; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    gains.push(Math.max(diff, 0));
    losses.push(Math.max(-diff, 0));
  }

  // Step 2: Initialize average gain/loss for first "period"
  let avgGain =
    gains.slice(0, period).reduce((a, b) => a + b, 0) / period;
  let avgLoss =
    losses.slice(0, period).reduce((a, b) => a + b, 0) / period;

  // Step 3: Apply Wilder’s smoothing recursively over *entire* dataset
  for (let i = period; i < gains.length; i++) {
    avgGain = (avgGain * (period - 1) + gains[i]) / period;
    avgLoss = (avgLoss * (period - 1) + losses[i]) / period;
  }

  const RS = avgLoss === 0 ? 0 : avgGain / avgLoss;
  const RSI = avgLoss === 0 ? 100 : 100 - 100 / (1 + RS);

  return Number(RSI.toFixed(2));
}


export function calculateEMA(closes: number[], period: number): number {
  if (closes.length < period) {
    throw new Error(`Not enough data for EMA(${period})`);
  }

  const k = 2 / (period + 1);
  // Start with SMA for the first value (TradingView does this)
  let emaPrev =
    closes.slice(0, period).reduce((a, b) => a + b, 0) / period;

  // Then apply EMA recursively
  for (let i = period; i < closes.length; i++) {
    emaPrev = closes[i] * k + emaPrev * (1 - k);
  }

  return Number(emaPrev.toFixed(2));
}


export function calculateSupportResistance(
  candles: { high: number; low: number; close: number }[],
  lookback = 3,
  mergeDistance = 50 // how close levels can be merged (tweak by timeframe)
) {
  const supports: number[] = [];
  const resistances: number[] = [];

  for (let i = lookback; i < candles.length - lookback; i++) {
    const lows = candles.slice(i - lookback, i + lookback + 1).map(c => c.low);
    const highs = candles.slice(i - lookback, i + lookback + 1).map(c => c.high);
    const currLow = candles[i].low;
    const currHigh = candles[i].high;

    // Support (local minimum)
    if (currLow === Math.min(...lows)) supports.push(currLow);

    // Resistance (local maximum)
    if (currHigh === Math.max(...highs)) resistances.push(currHigh);
  }

  // Merge nearby levels (avoid clutter)
  const mergeLevels = (levels: number[]) => {
    levels.sort((a, b) => a - b);
    const merged: number[] = [];
    for (const lvl of levels) {
      if (!merged.length || Math.abs(lvl - merged[merged.length - 1]) > mergeDistance) {
        merged.push(lvl);
      }
    }
    return merged;
  };

  return {
    supports: mergeLevels(supports).slice(-3),     // keep last 3 strongest
    resistances: mergeLevels(resistances).slice(-3)
  };
}

export type TengulfingCandle = {
  prev : {
    open : number,
    close : number
  },
  curr : {
    open : number,
    close : number
  }
}



export function engulfingCandle(candles : TengulfingCandle) : string | undefined{
  const { prev, curr } = candles;

  const prevIsRed = prev.close < prev.open;
  const prevIsGreen = prev.close > prev.open;

  const currIsGreen = curr.close > curr.open;
  const currIsRed = curr.close < curr.open;

  const bullish =
    prevIsRed &&
    currIsGreen &&
    curr.open <= prev.close &&
    curr.close >= prev.open;

  const bearish =
    prevIsGreen &&
    currIsRed &&
    curr.open >= prev.close &&
    curr.close <= prev.open;

  if (bullish) return "bullish";
  if (bearish) return "bearish";
  return undefined;
}

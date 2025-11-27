import { transformer } from "./fundamentals/fedPreesScrap";
import { getKlines } from "./untils/stockData";

const technicals = await getKlines();
const fundamentals = await transformer('');

const resAI = {
    technicals : technicals,
    fundamentals : fundamentals
}

console.log(resAI);
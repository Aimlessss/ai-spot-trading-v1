import axios from "axios";

export async function getPortfolio(accountIndex: string): Promise<{ total: string, available: string }> {

    const response = await axios.get(`https://mainnet.zklighter.elliot.ai/api/v1/account?by=index&value=${accountIndex}`)

    return { 
        total: response.data.accounts[0]?.collateral, 
        available: response.data.accounts[0]?.available_balance 
    };
}


const res = await getPortfolio('0');
console.log(res);

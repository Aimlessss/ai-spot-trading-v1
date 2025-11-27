import { symbolName } from "typescript";
import { AccountApi, AccountPosition, ApiKeyAuthentication, IsomorphicFetchHttpLibrary, OrderApi, ServerConfiguration } from "../lighter-sdk-ts/generated";

const BASE_URL = "https://mainnet.zklighter.elliot.ai"
const API_KEY_PRIVATE_KEY = process.env['API_KEY_PRIVATE_KEY']!
const ACCOUNT_INDEX = 283587


export async function main() {
    const accountApi = new AccountApi({
        baseServer: new ServerConfiguration<{  }>(BASE_URL, {  }),
        httpApi: new IsomorphicFetchHttpLibrary(),
        middleware: [],
        authMethods: {
            apiKey: new ApiKeyAuthentication(API_KEY_PRIVATE_KEY)
        }
    });

    const currentOpenOrders = await accountApi.accountWithHttpInfo(
        'index',
        ACCOUNT_INDEX.toString()
    );
    const currOrders = currentOpenOrders.data.accounts[0]?.positions.map((AccountPosition) =>({
        symbol : AccountPosition.symbol,
        position : AccountPosition.position,
        sign : AccountPosition.sign == 1 ? 'long' : 'short',
        unrealizedPnl : AccountPosition.unrealizedPnl,
        realizedPnl : AccountPosition.realizedPnl,
        liquidationPrice : AccountPosition.liquidationPrice

    }));

    return currOrders;
}

main()
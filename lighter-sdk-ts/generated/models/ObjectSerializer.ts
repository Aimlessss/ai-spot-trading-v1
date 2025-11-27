export * from './Account';
export * from './AccountApiKeys';
export * from './AccountLimits';
export * from './AccountMarginStats';
export * from './AccountMarketStats';
export * from './AccountMetadata';
export * from './AccountMetadatas';
export * from './AccountPnL';
export * from './AccountPosition';
export * from './AccountStats';
export * from './AccountTradeStats';
export * from './Announcement';
export * from './Announcements';
export * from './ApiKey';
export * from './Block';
export * from './Blocks';
export * from './BridgeSupportedNetwork';
export * from './Candlestick';
export * from './Candlesticks';
export * from './ContractAddress';
export * from './CurrentHeight';
export * from './Cursor';
export * from './DailyReturn';
export * from './DepositHistory';
export * from './DepositHistoryItem';
export * from './DetailedAccount';
export * from './DetailedAccounts';
export * from './DetailedCandlestick';
export * from './EnrichedTx';
export * from './ExchangeStats';
export * from './ExportData';
export * from './Funding';
export * from './FundingRate';
export * from './FundingRates';
export * from './Fundings';
export * from './L1Metadata';
export * from './L1ProviderInfo';
export * from './LiqTrade';
export * from './Liquidation';
export * from './LiquidationInfo';
export * from './LiquidationInfos';
export * from './MarketInfo';
export * from './NextNonce';
export * from './Order';
export * from './OrderBook';
export * from './OrderBookDepth';
export * from './OrderBookDetail';
export * from './OrderBookDetails';
export * from './OrderBookOrders';
export * from './OrderBookStats';
export * from './OrderBooks';
export * from './Orders';
export * from './PnLEntry';
export * from './PositionFunding';
export * from './PositionFundings';
export * from './PriceLevel';
export * from './PublicPool';
export * from './PublicPoolInfo';
export * from './PublicPoolMetadata';
export * from './PublicPoolShare';
export * from './PublicPools';
export * from './ReferralPointEntry';
export * from './ReferralPoints';
export * from './ReqExportData';
export * from './ReqGetAccount';
export * from './ReqGetAccountActiveOrders';
export * from './ReqGetAccountApiKeys';
export * from './ReqGetAccountByL1Address';
export * from './ReqGetAccountInactiveOrders';
export * from './ReqGetAccountLimits';
export * from './ReqGetAccountMetadata';
export * from './ReqGetAccountPnL';
export * from './ReqGetAccountTxs';
export * from './ReqGetBlock';
export * from './ReqGetBlockTxs';
export * from './ReqGetByAccount';
export * from './ReqGetCandlesticks';
export * from './ReqGetDepositHistory';
export * from './ReqGetFastWithdrawInfo';
export * from './ReqGetFundings';
export * from './ReqGetL1Metadata';
export * from './ReqGetL1Tx';
export * from './ReqGetLatestDeposit';
export * from './ReqGetLiquidationInfos';
export * from './ReqGetNextNonce';
export * from './ReqGetOrderBookDetails';
export * from './ReqGetOrderBookOrders';
export * from './ReqGetOrderBooks';
export * from './ReqGetPositionFunding';
export * from './ReqGetPublicPools';
export * from './ReqGetPublicPoolsMetadata';
export * from './ReqGetRangeWithCursor';
export * from './ReqGetRangeWithIndex';
export * from './ReqGetRangeWithIndexSortable';
export * from './ReqGetRecentTrades';
export * from './ReqGetReferralPoints';
export * from './ReqGetTrades';
export * from './ReqGetTransferFeeInfo';
export * from './ReqGetTransferHistory';
export * from './ReqGetTx';
export * from './ReqGetWithdrawHistory';
export * from './RespChangeAccountTier';
export * from './RespGetFastBridgeInfo';
export * from './RespPublicPoolsMetadata';
export * from './RespSendTx';
export * from './RespSendTxBatch';
export * from './RespWithdrawalDelay';
export * from './ResultCode';
export * from './RiskInfo';
export * from './RiskParameters';
export * from './SharePrice';
export * from './SimpleOrder';
export * from './Status';
export * from './SubAccounts';
export * from './Ticker';
export * from './Trade';
export * from './Trades';
export * from './TransferFeeInfo';
export * from './TransferHistory';
export * from './TransferHistoryItem';
export * from './Tx';
export * from './TxHash';
export * from './TxHashes';
export * from './Txs';
export * from './ValidatorInfo';
export * from './WithdrawHistory';
export * from './WithdrawHistoryItem';
export * from './ZkLighterInfo';

import { Account } from './Account';
import { AccountApiKeys } from './AccountApiKeys';
import { AccountLimits } from './AccountLimits';
import { AccountMarginStats } from './AccountMarginStats';
import { AccountMarketStats } from './AccountMarketStats';
import { AccountMetadata } from './AccountMetadata';
import { AccountMetadatas } from './AccountMetadatas';
import { AccountPnL } from './AccountPnL';
import { AccountPosition } from './AccountPosition';
import { AccountStats } from './AccountStats';
import { AccountTradeStats } from './AccountTradeStats';
import { Announcement } from './Announcement';
import { Announcements } from './Announcements';
import { ApiKey } from './ApiKey';
import { Block } from './Block';
import { Blocks } from './Blocks';
import { BridgeSupportedNetwork } from './BridgeSupportedNetwork';
import { Candlestick } from './Candlestick';
import { Candlesticks } from './Candlesticks';
import { ContractAddress } from './ContractAddress';
import { CurrentHeight } from './CurrentHeight';
import { Cursor } from './Cursor';
import { DailyReturn } from './DailyReturn';
import { DepositHistory } from './DepositHistory';
import { DepositHistoryItem   , DepositHistoryItemStatusEnum    } from './DepositHistoryItem';
import { DetailedAccount } from './DetailedAccount';
import { DetailedAccounts } from './DetailedAccounts';
import { DetailedCandlestick } from './DetailedCandlestick';
import { EnrichedTx } from './EnrichedTx';
import { ExchangeStats } from './ExchangeStats';
import { ExportData } from './ExportData';
import { Funding } from './Funding';
import { FundingRate , FundingRateExchangeEnum     } from './FundingRate';
import { FundingRates } from './FundingRates';
import { Fundings } from './Fundings';
import { L1Metadata } from './L1Metadata';
import { L1ProviderInfo } from './L1ProviderInfo';
import { LiqTrade } from './LiqTrade';
import { Liquidation  , LiquidationTypeEnum      } from './Liquidation';
import { LiquidationInfo } from './LiquidationInfo';
import { LiquidationInfos } from './LiquidationInfos';
import { MarketInfo } from './MarketInfo';
import { NextNonce } from './NextNonce';
import { Order                , OrderTypeEnum  , OrderTimeInForceEnum     , OrderStatusEnum  , OrderTriggerStatusEnum           } from './Order';
import { OrderBook  , OrderBookStatusEnum           } from './OrderBook';
import { OrderBookDepth } from './OrderBookDepth';
import { OrderBookDetail  , OrderBookDetailStatusEnum                           } from './OrderBookDetail';
import { OrderBookDetails } from './OrderBookDetails';
import { OrderBookOrders } from './OrderBookOrders';
import { OrderBookStats } from './OrderBookStats';
import { OrderBooks } from './OrderBooks';
import { Orders } from './Orders';
import { PnLEntry } from './PnLEntry';
import { PositionFunding      , PositionFundingPositionSideEnum   } from './PositionFunding';
import { PositionFundings } from './PositionFundings';
import { PriceLevel } from './PriceLevel';
import { PublicPool } from './PublicPool';
import { PublicPoolInfo } from './PublicPoolInfo';
import { PublicPoolMetadata } from './PublicPoolMetadata';
import { PublicPoolShare } from './PublicPoolShare';
import { PublicPools } from './PublicPools';
import { ReferralPointEntry } from './ReferralPointEntry';
import { ReferralPoints } from './ReferralPoints';
import { ReqExportData   , ReqExportDataTypeEnum   } from './ReqExportData';
import { ReqGetAccount, ReqGetAccountByEnum    } from './ReqGetAccount';
import { ReqGetAccountActiveOrders } from './ReqGetAccountActiveOrders';
import { ReqGetAccountApiKeys } from './ReqGetAccountApiKeys';
import { ReqGetAccountByL1Address } from './ReqGetAccountByL1Address';
import { ReqGetAccountInactiveOrders } from './ReqGetAccountInactiveOrders';
import { ReqGetAccountLimits } from './ReqGetAccountLimits';
import { ReqGetAccountMetadata, ReqGetAccountMetadataByEnum     } from './ReqGetAccountMetadata';
import { ReqGetAccountPnL , ReqGetAccountPnLByEnum   , ReqGetAccountPnLResolutionEnum       } from './ReqGetAccountPnL';
import { ReqGetAccountTxs  , ReqGetAccountTxsByEnum      } from './ReqGetAccountTxs';
import { ReqGetBlock, ReqGetBlockByEnum    } from './ReqGetBlock';
import { ReqGetBlockTxs, ReqGetBlockTxsByEnum    } from './ReqGetBlockTxs';
import { ReqGetByAccount, ReqGetByAccountByEnum    } from './ReqGetByAccount';
import { ReqGetCandlesticks , ReqGetCandlesticksResolutionEnum       } from './ReqGetCandlesticks';
import { ReqGetDepositHistory    , ReqGetDepositHistoryFilterEnum   } from './ReqGetDepositHistory';
import { ReqGetFastWithdrawInfo } from './ReqGetFastWithdrawInfo';
import { ReqGetFundings , ReqGetFundingsResolutionEnum      } from './ReqGetFundings';
import { ReqGetL1Metadata } from './ReqGetL1Metadata';
import { ReqGetL1Tx } from './ReqGetL1Tx';
import { ReqGetLatestDeposit } from './ReqGetLatestDeposit';
import { ReqGetLiquidationInfos } from './ReqGetLiquidationInfos';
import { ReqGetNextNonce } from './ReqGetNextNonce';
import { ReqGetOrderBookDetails } from './ReqGetOrderBookDetails';
import { ReqGetOrderBookOrders } from './ReqGetOrderBookOrders';
import { ReqGetOrderBooks } from './ReqGetOrderBooks';
import { ReqGetPositionFunding     , ReqGetPositionFundingSideEnum   } from './ReqGetPositionFunding';
import { ReqGetPublicPools , ReqGetPublicPoolsFilterEnum      } from './ReqGetPublicPools';
import { ReqGetPublicPoolsMetadata , ReqGetPublicPoolsMetadataFilterEnum      } from './ReqGetPublicPoolsMetadata';
import { ReqGetRangeWithCursor } from './ReqGetRangeWithCursor';
import { ReqGetRangeWithIndex } from './ReqGetRangeWithIndex';
import { ReqGetRangeWithIndexSortable  , ReqGetRangeWithIndexSortableSortEnum   } from './ReqGetRangeWithIndexSortable';
import { ReqGetRecentTrades } from './ReqGetRecentTrades';
import { ReqGetReferralPoints } from './ReqGetReferralPoints';
import { ReqGetTrades    , ReqGetTradesSortByEnum  , ReqGetTradesSortDirEnum       } from './ReqGetTrades';
import { ReqGetTransferFeeInfo } from './ReqGetTransferFeeInfo';
import { ReqGetTransferHistory } from './ReqGetTransferHistory';
import { ReqGetTx, ReqGetTxByEnum    } from './ReqGetTx';
import { ReqGetWithdrawHistory   , ReqGetWithdrawHistoryFilterEnum   } from './ReqGetWithdrawHistory';
import { RespChangeAccountTier } from './RespChangeAccountTier';
import { RespGetFastBridgeInfo } from './RespGetFastBridgeInfo';
import { RespPublicPoolsMetadata } from './RespPublicPoolsMetadata';
import { RespSendTx } from './RespSendTx';
import { RespSendTxBatch } from './RespSendTxBatch';
import { RespWithdrawalDelay } from './RespWithdrawalDelay';
import { ResultCode } from './ResultCode';
import { RiskInfo } from './RiskInfo';
import { RiskParameters } from './RiskParameters';
import { SharePrice } from './SharePrice';
import { SimpleOrder } from './SimpleOrder';
import { Status } from './Status';
import { SubAccounts } from './SubAccounts';
import { Ticker } from './Ticker';
import { Trade  , TradeTypeEnum                        } from './Trade';
import { Trades } from './Trades';
import { TransferFeeInfo } from './TransferFeeInfo';
import { TransferHistory } from './TransferHistory';
import { TransferHistoryItem   , TransferHistoryItemTypeEnum        } from './TransferHistoryItem';
import { Tx } from './Tx';
import { TxHash } from './TxHash';
import { TxHashes } from './TxHashes';
import { Txs } from './Txs';
import { ValidatorInfo } from './ValidatorInfo';
import { WithdrawHistory } from './WithdrawHistory';
import { WithdrawHistoryItem   , WithdrawHistoryItemStatusEnum  , WithdrawHistoryItemTypeEnum    } from './WithdrawHistoryItem';
import { ZkLighterInfo } from './ZkLighterInfo';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "DepositHistoryItemStatusEnum",
    "FundingRateExchangeEnum",
    "LiquidationTypeEnum",
    "OrderTypeEnum",
    "OrderTimeInForceEnum",
    "OrderStatusEnum",
    "OrderTriggerStatusEnum",
    "OrderBookStatusEnum",
    "OrderBookDetailStatusEnum",
    "PositionFundingPositionSideEnum",
    "ReqExportDataTypeEnum",
    "ReqGetAccountByEnum",
    "ReqGetAccountMetadataByEnum",
    "ReqGetAccountPnLByEnum",
    "ReqGetAccountPnLResolutionEnum",
    "ReqGetAccountTxsByEnum",
    "ReqGetBlockByEnum",
    "ReqGetBlockTxsByEnum",
    "ReqGetByAccountByEnum",
    "ReqGetCandlesticksResolutionEnum",
    "ReqGetDepositHistoryFilterEnum",
    "ReqGetFundingsResolutionEnum",
    "ReqGetPositionFundingSideEnum",
    "ReqGetPublicPoolsFilterEnum",
    "ReqGetPublicPoolsMetadataFilterEnum",
    "ReqGetRangeWithIndexSortableSortEnum",
    "ReqGetTradesSortByEnum",
    "ReqGetTradesSortDirEnum",
    "ReqGetTxByEnum",
    "ReqGetWithdrawHistoryFilterEnum",
    "TradeTypeEnum",
    "TransferHistoryItemTypeEnum",
    "WithdrawHistoryItemStatusEnum",
    "WithdrawHistoryItemTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountApiKeys": AccountApiKeys,
    "AccountLimits": AccountLimits,
    "AccountMarginStats": AccountMarginStats,
    "AccountMarketStats": AccountMarketStats,
    "AccountMetadata": AccountMetadata,
    "AccountMetadatas": AccountMetadatas,
    "AccountPnL": AccountPnL,
    "AccountPosition": AccountPosition,
    "AccountStats": AccountStats,
    "AccountTradeStats": AccountTradeStats,
    "Announcement": Announcement,
    "Announcements": Announcements,
    "ApiKey": ApiKey,
    "Block": Block,
    "Blocks": Blocks,
    "BridgeSupportedNetwork": BridgeSupportedNetwork,
    "Candlestick": Candlestick,
    "Candlesticks": Candlesticks,
    "ContractAddress": ContractAddress,
    "CurrentHeight": CurrentHeight,
    "Cursor": Cursor,
    "DailyReturn": DailyReturn,
    "DepositHistory": DepositHistory,
    "DepositHistoryItem": DepositHistoryItem,
    "DetailedAccount": DetailedAccount,
    "DetailedAccounts": DetailedAccounts,
    "DetailedCandlestick": DetailedCandlestick,
    "EnrichedTx": EnrichedTx,
    "ExchangeStats": ExchangeStats,
    "ExportData": ExportData,
    "Funding": Funding,
    "FundingRate": FundingRate,
    "FundingRates": FundingRates,
    "Fundings": Fundings,
    "L1Metadata": L1Metadata,
    "L1ProviderInfo": L1ProviderInfo,
    "LiqTrade": LiqTrade,
    "Liquidation": Liquidation,
    "LiquidationInfo": LiquidationInfo,
    "LiquidationInfos": LiquidationInfos,
    "MarketInfo": MarketInfo,
    "NextNonce": NextNonce,
    "Order": Order,
    "OrderBook": OrderBook,
    "OrderBookDepth": OrderBookDepth,
    "OrderBookDetail": OrderBookDetail,
    "OrderBookDetails": OrderBookDetails,
    "OrderBookOrders": OrderBookOrders,
    "OrderBookStats": OrderBookStats,
    "OrderBooks": OrderBooks,
    "Orders": Orders,
    "PnLEntry": PnLEntry,
    "PositionFunding": PositionFunding,
    "PositionFundings": PositionFundings,
    "PriceLevel": PriceLevel,
    "PublicPool": PublicPool,
    "PublicPoolInfo": PublicPoolInfo,
    "PublicPoolMetadata": PublicPoolMetadata,
    "PublicPoolShare": PublicPoolShare,
    "PublicPools": PublicPools,
    "ReferralPointEntry": ReferralPointEntry,
    "ReferralPoints": ReferralPoints,
    "ReqExportData": ReqExportData,
    "ReqGetAccount": ReqGetAccount,
    "ReqGetAccountActiveOrders": ReqGetAccountActiveOrders,
    "ReqGetAccountApiKeys": ReqGetAccountApiKeys,
    "ReqGetAccountByL1Address": ReqGetAccountByL1Address,
    "ReqGetAccountInactiveOrders": ReqGetAccountInactiveOrders,
    "ReqGetAccountLimits": ReqGetAccountLimits,
    "ReqGetAccountMetadata": ReqGetAccountMetadata,
    "ReqGetAccountPnL": ReqGetAccountPnL,
    "ReqGetAccountTxs": ReqGetAccountTxs,
    "ReqGetBlock": ReqGetBlock,
    "ReqGetBlockTxs": ReqGetBlockTxs,
    "ReqGetByAccount": ReqGetByAccount,
    "ReqGetCandlesticks": ReqGetCandlesticks,
    "ReqGetDepositHistory": ReqGetDepositHistory,
    "ReqGetFastWithdrawInfo": ReqGetFastWithdrawInfo,
    "ReqGetFundings": ReqGetFundings,
    "ReqGetL1Metadata": ReqGetL1Metadata,
    "ReqGetL1Tx": ReqGetL1Tx,
    "ReqGetLatestDeposit": ReqGetLatestDeposit,
    "ReqGetLiquidationInfos": ReqGetLiquidationInfos,
    "ReqGetNextNonce": ReqGetNextNonce,
    "ReqGetOrderBookDetails": ReqGetOrderBookDetails,
    "ReqGetOrderBookOrders": ReqGetOrderBookOrders,
    "ReqGetOrderBooks": ReqGetOrderBooks,
    "ReqGetPositionFunding": ReqGetPositionFunding,
    "ReqGetPublicPools": ReqGetPublicPools,
    "ReqGetPublicPoolsMetadata": ReqGetPublicPoolsMetadata,
    "ReqGetRangeWithCursor": ReqGetRangeWithCursor,
    "ReqGetRangeWithIndex": ReqGetRangeWithIndex,
    "ReqGetRangeWithIndexSortable": ReqGetRangeWithIndexSortable,
    "ReqGetRecentTrades": ReqGetRecentTrades,
    "ReqGetReferralPoints": ReqGetReferralPoints,
    "ReqGetTrades": ReqGetTrades,
    "ReqGetTransferFeeInfo": ReqGetTransferFeeInfo,
    "ReqGetTransferHistory": ReqGetTransferHistory,
    "ReqGetTx": ReqGetTx,
    "ReqGetWithdrawHistory": ReqGetWithdrawHistory,
    "RespChangeAccountTier": RespChangeAccountTier,
    "RespGetFastBridgeInfo": RespGetFastBridgeInfo,
    "RespPublicPoolsMetadata": RespPublicPoolsMetadata,
    "RespSendTx": RespSendTx,
    "RespSendTxBatch": RespSendTxBatch,
    "RespWithdrawalDelay": RespWithdrawalDelay,
    "ResultCode": ResultCode,
    "RiskInfo": RiskInfo,
    "RiskParameters": RiskParameters,
    "SharePrice": SharePrice,
    "SimpleOrder": SimpleOrder,
    "Status": Status,
    "SubAccounts": SubAccounts,
    "Ticker": Ticker,
    "Trade": Trade,
    "Trades": Trades,
    "TransferFeeInfo": TransferFeeInfo,
    "TransferHistory": TransferHistory,
    "TransferHistoryItem": TransferHistoryItem,
    "Tx": Tx,
    "TxHash": TxHash,
    "TxHashes": TxHashes,
    "Txs": Txs,
    "ValidatorInfo": ValidatorInfo,
    "WithdrawHistory": WithdrawHistory,
    "WithdrawHistoryItem": WithdrawHistoryItem,
    "ZkLighterInfo": ZkLighterInfo,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (!(data instanceof Date)) {
                return data;
            }
            if (format == "date") {
                let month = data.getMonth()+1
                let monthStr = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                let dayStr = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + monthStr + "-" + dayStr;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}

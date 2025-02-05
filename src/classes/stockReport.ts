import stockItem from "./stockItem";
import { StockTransaction } from "./stockTransaction";

export interface StockReport {
    stockItems: Map<string, stockItem>;
    transactions: StockTransaction[];
}
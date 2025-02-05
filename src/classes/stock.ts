import { StockItem } from './stockItem';
import { Transaction } from './transaction';

export class Stock {
    private stockItems: Map<number, StockItem>;
    private transactions: Transaction[];

    constructor() {
        this.stockItems = new Map();
        this.transactions = [];
    }

    addNewItem(
        itemId: number,
        name: string,
        quantity: number,
        unit: string,
        threshold: number,
    ): void {
        const newItem = new StockItem(itemId, name, quantity, unit, threshold);
        this.stockItems.set(itemId, newItem);
    }

    removeItem(itemId: number): void {
        this.stockItems.delete(itemId);
    }
}
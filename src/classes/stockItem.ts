export class StockItem {
    public id: number;
    public name: string;
    private quantity: number;
    private unit: string;
    private threshold: number;

    public constructor(
        id: number,
        name: string,
        quantity: number,
        unit: string,
        threshold: number,
    ) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.threshold = threshold;
    }

    public isBellowThreshold(): boolean {
        return this.quantity <= this.threshold;
    }

    // setters
    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public setUnit(unit: string): void {
        this.unit = unit;
    }

    public setThreshold(threshold: number): void {
        this.threshold = threshold;
    }

    // getters
    public getQuantity(): number {
        return this.quantity;
    }

    public getUnit(): string {
        return this.unit;
    }

    public getThreshold(): number {
        return this.threshold;
    }

}

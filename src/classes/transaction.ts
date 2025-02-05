export class Transaction {
  id: string;
  type: 'add' | 'remove';
  name: string;
  stockItemId: string;
  ingredients: Map<string, number>;
  quantity: number;

  constructor(
    id: string,
    type: 'add' | 'remove',
    name: string,
    stockItemId: string,
    ingredients: Map<string, number>,
    quantity: number
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.stockItemId = stockItemId;
    this.ingredients = ingredients;
    this.quantity = quantity;
  }
}

export default class Meal {
  private id: string;
  private name: string;
  private ingredients: Map<string, number>;

  constructor(id: string, name: string, ingredients: Map<string, number>) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  addIngredient(ingredient: string, quantity: number): void {
    this.ingredients.set(ingredient, quantity);
  }

  getIngredients(): Map<string, number> {
    return this.ingredients;
  }
}

import { contextBridge, ipcRenderer } from 'electron';

// Define types for the parameters
type StockItemData = {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    threshold: number;
};

type MealData = {
    id: string;
    name: string;
    ingredients: Map<string, number>;
};

contextBridge.exposeInMainWorld('electronAPI', {
    // Stock handlers
    getStockItems: () => ipcRenderer.invoke('getStockItems'),
    addStockItem: (itemData: StockItemData) => ipcRenderer.invoke('addStockItem', itemData),
    addStock: (stockItemId: string, amount: number) => ipcRenderer.invoke('addStock', stockItemId, amount),
    recordLoss: (stockItemId: string, amount: number) => ipcRenderer.invoke('recordLoss', stockItemId, amount),

    // Meal handlers
    getMeals: () => ipcRenderer.invoke('getMeals'),
    addMeal: (mealData: MealData) => ipcRenderer.invoke('addMeal', mealData),
    consumeStock: (mealId: string, servings: number) => ipcRenderer.invoke('consumeStock', mealId, servings),
});

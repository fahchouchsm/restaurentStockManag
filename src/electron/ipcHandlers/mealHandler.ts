import { ipcMain } from 'electron';
import { StockManager } from '../classes/stockManager.js';
import { Meal } from '../classes/meal.js';

const stockManager = new StockManager();

// ✅ Fetch All Meals
ipcMain.handle('getMeals', () => {
    return Array.from(stockManager.generateReport().stockItems.values());
});

// ✅ Add a Meal
ipcMain.handle('addMeal', (_event, mealData) => {
    const meal = new Meal(
        mealData.id,
        mealData.name,
        new Map(mealData.ingredients)
    );
    stockManager.addMeal(meal);
    return { success: true };
});

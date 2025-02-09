import { ipcMain } from 'electron';
import { StockManager } from '../classes/stockManager.js';
import stockItem from '../classes/stockItem.js';

const stockManager = new StockManager();

// ✅ Fetch All Stock Items
ipcMain.handle('getStockItems', () => {
  return Array.from(stockManager.generateReport().stockItems.values());
});

// ✅ Add a New Stock Item
ipcMain.handle('addStockItem', (_event, itemData) => {
  const item = new stockItem(
    itemData.id,
    itemData.name,
    itemData.quantity,
    itemData.unit,
    itemData.threshold
  );
  stockManager.addStockItem(item);
  return { success: true };
});


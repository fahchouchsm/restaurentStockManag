import sqlite3 from 'sqlite3';
import path from 'path';
import { app } from 'electron';

// Change the DB path to use 'userData' instead of 'documents'
const DB_PATH = path.join(app.getPath('userData'), 'restaurant-stock.db');

class Database {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database(DB_PATH, (err) => {
            if (err) {
                console.error('Failed to connect to database:', err);
            } else {
                console.log('Connected to database at:', DB_PATH);
                this.initializeDatabase();
            }
        });
    }

    initializeDatabase() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS stockItems (
                id TEXT PRIMARY KEY,
                name TEXT,
                quantity INTEGER,
                unit TEXT,
                threshold INTEGER
            )
        `);

        this.db.run(`
            CREATE TABLE IF NOT EXISTS meals (
                id TEXT PRIMARY KEY,
                name TEXT,
                ingredients TEXT
            )
        `);

        this.db.run(`
            CREATE TABLE IF NOT EXISTS transactions (
                id TEXT PRIMARY KEY,
                type TEXT,
                name TEXT,
                stockItemId TEXT,
                ingredients TEXT,
                quantity INTEGER,
                timestamp DATETIME
            )
        `);
    }

    async addStockItem(item: { id: string; name: string; quantity: number; unit: string; threshold: number }) {
        const query = `
            INSERT INTO stockItems (id, name, quantity, unit, threshold)
            VALUES (?, ?, ?, ?, ?)
        `;
        await this.db.run(query, [item.id, item.name, item.quantity, item.unit, item.threshold]);
    }

    async getStockItems() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM stockItems', (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}

const database = new Database();
export default database;

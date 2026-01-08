import { Pool } from "pg";

export const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_Mlb5PIagj6Yr@ep-ancient-bar-a8db9gts-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
});

export const initDB = async()=>{
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone VARCHAR(25) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
        console.log("Database connected");

        
}
"use server"
import { sql } from "@vercel/postgres";



export async function getLeaderboard() {
    try {

        const { rows } = await sql`
        SELECT * FROM users
        LIMIT 10
        `;

        if (rows.length === 0) {
            throw new Error("Invalid credentials");
        }

        return rows;
        
    } catch (error: any) {
        console.error("Failed to login:", error);
        throw error;
    }
}
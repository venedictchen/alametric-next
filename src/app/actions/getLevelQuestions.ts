"use server"
import { sql } from "@vercel/postgres";



export async function getLevelQuestions(level:number) {
    try {

        const { rows } = await sql`
            SELECT * FROM level_questions where level = ${level};
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
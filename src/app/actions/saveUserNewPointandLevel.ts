"use server"
import { sql } from "@vercel/postgres";

export async function saveUserNewPointandLevel(userKode: string, score:number,level:number) {
    try {
        const { rows } = await sql`
          UPDATE users
            SET points = ${score},level = ${level}
            WHERE kode = ${userKode};

        `;

        return rows;
        
    } catch (error: any) {
        console.error("Failed to insert or update points:", error);
        throw error;
    }
}

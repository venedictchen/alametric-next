"use server"
import { sql } from "@vercel/postgres";



export async function loginUser(kode: string, nama: string) {
    try {

        const { rows } = await sql`
        SELECT * FROM users
        WHERE kode=${kode} AND name=${nama}
        `;

        if (rows.length === 0) {
            throw new Error("Invalid credentials");
        }

        return rows[0];
        
    } catch (error: any) {
        console.error("Failed to login:", error);
        throw error;
    }
}
"use server"
import { sql } from "@vercel/postgres";

export async function getSaveAnswer(userKode: string) {
    try {
        const { rows } = await sql`
            SELECT qq.id AS question_id, qq.question, ua.selected_answer
            FROM user_answers ua
            JOIN level_questions qq on ua.question_id = qq.id
            JOIN users u ON ua.user_kode = u.kode
            WHERE u.kode = ${userKode};
        `;
        return rows;
        
    } catch (error: any) {
        console.error("Failed to insert or update answer:", error);
        throw error;
    }
}

"use server"
import { sql } from "@vercel/postgres";

export async function saveAnswer(userKode: string, questionId: number, answer: string) {
    try {
        const { rows } = await sql`
            INSERT INTO user_answers (user_kode, question_id, selected_answer)
            VALUES (${userKode},${questionId}, ${answer})
            ON CONFLICT (user_kode, question_id)
            DO UPDATE SET selected_answer = ${answer}
            RETURNING *;
        `;

        return rows;
        
    } catch (error: any) {
        console.error("Failed to insert or update answer:", error);
        throw error;
    }
}

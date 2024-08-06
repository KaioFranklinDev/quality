// app/api/gettest/route.ts
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Handle GET requests
export async function GET() {
    try {
        const result = await sql`SELECT * FROM obras`;
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error();
    }
}

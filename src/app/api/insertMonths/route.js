import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST (req){
try{
        const data = await req.json();

        if (!data.month_name){
            return NextResponse.json({error: 'class name are required'},{status: 400});
        }
        const db = await createConnection()
        const sql = 'INSERT INTO MONTHS(month_name) VALUES(?)';
        const [result] = await db.query(sql, [
            data.month_name,
        ]);
        return NextResponse.json({message: 'month added successfully', id: result.insertId},{status: 201});
}catch(error){
    console.error('Error inserting month:', error);
    return NextResponse.json({error: 'Error inserting month'}, {status: 500});
}
}

import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST (req){
try{
        const data = await req.json();

        if (!data.name){
            return NextResponse.json({error: 'class name are required'},{status: 400});
        }
        const db = await createConnection()
        const sql = 'INSERT INTO CLASS(class_name) VALUES(?)';
        const [result] = await db.query(sql, [
            data.name,
        ]);
        return NextResponse.json({message: 'class added successfully', id: result.insertId},{status: 201});
}catch(error){
    console.error('Error inserting class:', error);
    return NextResponse.json({error: 'Error inserting class'}, {status: 500});
}


}
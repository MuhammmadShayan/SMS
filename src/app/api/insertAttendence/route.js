import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";


export async function POST(req) {
    try{
        const data = await req.json()
        if( !data.class || !data.date || !data.month || !data.year){
            return NextResponse.json("class, date, month, year are required")
        }
        const db = await createConnection()
        const sql = 'INSERT INTO ATTENDENCE(class, date, month, year) VALUES(?, ?, ?, ?)'
        const [atten] = await db.query(sql, [
            data.class,
            data.date,
            data.month,
            data.year
        ]);
        return NextResponse.json({message:'attendence record added successfully', id: atten.insertId},{status: 201})
    }catch(error){
            console.error('error insreting attendence record', error);
            return NextResponse.json({error:'server error'},{status: 500});
    
    }    
    
    
}
import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
    const data = await req.json();
    if ( !data.name || !data.date || !data.class || !data.amount || !data.status){
        return NextResponse.json({error: 'name, date, class, expense, amount and status are required '}, {status: 400})
    }
    const db = await createConnection()
    const sql = 'INSERT INTO FEES (student_id, date, class_id, amount, status) VALUES(?, ?, ?, ?, ?)'
    const [user] = await db.query(sql, [
        data.name,
        data.date,
        data.class,
        data.amount,
        data.status
    ]);
    return NextResponse.json({message:'Fees record added successfully', id: user.insertId},{status: 201})
}catch(error){
        console.error('error insreting Fees record', error);
        return NextResponse.json({error:'server error'},{status: 500});

}    
}
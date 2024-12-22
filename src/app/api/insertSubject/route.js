import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";
import { GET } from "../classes/route";

export async function POST(req) {
    try{
        const data = await req.json()
        if( !data.subjectName || !data.class ){
            return NextResponse.json("subject name, class and date are required")
        }
        const db = await createConnection()
        const sql = 'INSERT INTO SUBJECT(subjectName, class_id, ) VALUES(?, ?, )'
        const [subject] = await db.query(sql, [
            data.subjectName,
            data.class,
           
        ]);
        return NextResponse.json({message:'Fees record added successfully', id: subject.insertId},{status: 201})
    }catch(error){
            console.error('error insreting Fees record', error);
            return NextResponse.json({error:'server error'},{status: 500});
    
    }    
    
    
}
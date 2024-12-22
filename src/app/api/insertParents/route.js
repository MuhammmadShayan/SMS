import { createConnection } from "../../../../lib/db"
import { NextResponse } from "next/server"

export async function POST(req){
    try{
        
        const data = await req.json();
        if (!data.name|| !data.email || !data.age || !data.phone || !data.address){
            return NextResponse.json({error: 'name email age and phone number are required'}, {status: 400});
        }
        const db = await createConnection();
        const sql ='INSERT INTO PARENTS(parent_name, email, age, phone, address) VALUES(?, ?, ?, ?, ?)';
        const [result] = await db.query(sql,[
            data.name,
            data.email,
            data.age,
            data.phone,
            data.address
        ]);
        return NextResponse.json({message:"parents added sucessfully",id: result.insertId},{status: 201});
    }catch(error){
        console.error('error insreting parents', error);
        return NextResponse.json({error:'server error'},{status: 500});
    }
}
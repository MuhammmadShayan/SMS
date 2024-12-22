import { createConnection } from "../../../../lib/db"
import { NextResponse } from "next/server"

export async function POST(req){
    try{

        const data = await req.json();

        console.log(data);
        if (!data.name || !data.parent || !data.email || !data.class || !data.age || !data.gr_num){
            return NextResponse.json({error: 'name, parent, email, class, age and Gr num are required'},{status: 400});
        }
        const db = await createConnection();

        const sql = 'INSERT INTO STUDENT (name, parents, email, class, gr_num, age) VALUES(?, ?, ?, ?, ?, ?)'
        
        const [result] = await db.query(sql, [
            data.name,
            data.parent,
            data.email,
            data.class,
            data.gr_num,
            data.age
        ]);
        return NextResponse.json({message: 'student added successfully', id: result.insertId},{status: 201});
    }catch(error){
        console.error('error inserting student:', error);
        return NextResponse.json({error: 'server error'},{status: 500});
    }
}
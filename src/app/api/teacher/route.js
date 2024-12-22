import { createConnection } from "../../../../lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    try{
        const db = await createConnection()
        
        const sql = 'SELECT teachers.*, class.class_name, subject.subjectName FROM teachers INNER JOIN class ON teachers.class_id = class.id INNER JOIN subject ON teachers.subject_id = subject.id'
        const [users] = await db.query(sql)
        return NextResponse.json(users)
    }catch(error){  
        console.log(error);
        return NextResponse.json({error: error.message})
    }
}
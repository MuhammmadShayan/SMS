import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const db = await createConnection()
        const sql = 'SELECT student.*, class.class_name, parents.parent_name FROM student INNER JOIN class ON student.class_id = class.id INNER JOIN parents ON student.parent_id = parents.id'
        const [users] = await db.query(sql)
        return NextResponse.json(users)
    }catch(error){
        console.log(error)
        return NextResponse.json({error: error.message})
    }
}
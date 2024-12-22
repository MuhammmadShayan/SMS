import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const db = await createConnection()
        const sql = 'SELECT COUNT(*) AS total FROM STUDENT ';
        const [rows] = await db.query(sql);
        // Extract the count value
        const totalStudents = rows[0]?.total; // Access the "total" field
        //console.log(`Total number of students: ${totalStudents}`);
        return NextResponse.json(totalStudents)
    }catch(error){
        console.log(error)
        NextResponse.json({error: "error fetching total student"})
    }
    
}
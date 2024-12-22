import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const db = await createConnection()
        const sql = "SELECT COUNT(*) AS totalTeacher FROM TEACHERS"
        const [result] = await db.query(sql)
        const total = result[0]?.totalTeacher;
        return NextResponse.json(total)
    }catch(error){
        console.log(error)
        NextResponse.json({error: "error fetching total teacher"})
    }
}
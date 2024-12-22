import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{
    const db = await createConnection()
    const sql = "SELECT * FROM SUBJECT"

    const sqlTwo = "SELECT subject.*, class.class_name FROM subject INNER JOIN class ON subject.class_id = class.id";
    const [user] = await db.query(sqlTwo);
    return NextResponse.json(user)
}catch(error){
    console.log(error)
    return NextResponse.json({error:'error fetching data'})
}
}
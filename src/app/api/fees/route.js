import next from "next";
import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const db = await createConnection()
        const sql = "SELECT fees.*, class.class_name FROM fees INNER JOIN class ON fees.class_id = class.id "
        const [user] = await db.query(sql)
        return NextResponse.json(user)
    }catch(error){
        console.log(error)
        NextResponse.json({error : 'Error fetching fees data'})
    }


}

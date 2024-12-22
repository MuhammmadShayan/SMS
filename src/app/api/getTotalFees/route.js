import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const db = await createConnection()
        const sql = "SELECT SUM(AMOUNT) AS total_fees FROM FEES"
        const [result] = await db.query(sql)
        const total = result[0]?.total_fees;
        return NextResponse.json(total)
    }catch(error){
        console.log(error)
        NextResponse.json({error: 'error fetching total fees amount'})
    }
}
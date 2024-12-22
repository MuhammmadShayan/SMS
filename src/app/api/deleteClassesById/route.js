import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req){
    const {searchParams} = new URL(req.url);
    const class_id = searchParams.get('id')

    if(!class_id){
        return NextResponse.json({error: "class_id is required"},{status: 400})
    }
    const db = await createConnection();
    const idToDelete = class_id;
    const sql = 'DELETE FROM CLASS WHERE ID = ?'
     await db.query(sql, [idToDelete]);
     console.log(`Record with id ${class_id} deleted successfully`)

    return NextResponse.json({
        success: 'true',
        message: `Record with id ${idToDelete} deleted successfully`,
        deletedId: idToDelete,
    });
}
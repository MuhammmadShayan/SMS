import { NextResponse } from 'next/server';
import { createConnection } from "../../../../lib/db";

export async function GET(req) {

  console.log(req.url);
  console.log("req.url")
  
  const { searchParams } = new URL(req.url);

  console.log(searchParams)
  const month_id = searchParams.get('month_id');  // Get the class_id from the query parameters

  if (!month_id) {
    return NextResponse.json({ error: 'month_id is required' }, { status: 400 });
  }
    const db = await createConnection();
    const idToDelete = month_id; // Replace with the ID of the record you want to delete
    const sql = "DELETE FROM months WHERE id = ?";
    await db.query(sql, [idToDelete]);
    console.log(`Record with ID ${idToDelete} deleted successfully.`);    
   
  //const students = await fetchStudentsByClassId(class_id);  // Fetch students based on class_id
  
  return NextResponse.json({
    success: true,
    message: `Record with ID ${idToDelete} deleted successfully.`,
    deletedId: idToDelete,
    // students: students // Include if students data is fetched
});
}

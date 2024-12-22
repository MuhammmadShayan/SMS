import {createConnection} from '../../../../lib/db.js'
import { NextResponse } from 'next/server'


export async function POST(req) {
    try {
      const data = await req.json(); // Parse the JSON data from the request body
      
      // Validate the data (you can add more validation checks as needed)
      if (!data.name || !data.email || !data.phone || !data.address || !data.class || !data.subject || !data.age ) {
        return NextResponse.json({ error: 'Name, email,  age, address, city and stsa are required' }, { status: 400 });
      }
  
      // Create a connection to the database
      const db = await createConnection();
  
      // Insert the student data into the MySQL database
      const sql = `
        INSERT INTO TEACHERS (name, email, phone, address, class_id, subject_id, Age) VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      
      const [result] = await db.query(sql, [
        data.name,
        data.email,
        data.phone,
        data.address,
        data.class,
        data.subject,
        data.age,
      ]);
  
      // Return success response
      return NextResponse.json({ message: 'Teacher added successfully', id: result.insertId }, { status: 201 });
    } catch (error) {
      console.error('Error inserting Teacher:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}







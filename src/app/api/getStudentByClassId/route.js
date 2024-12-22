// import { NextResponse } from 'next/server';


// export async function GET(req) {
//     const { searchParams } = new URL(req.url);
//     const class_id = searchParams.get('class_id');

//   console.log(class_id);
   
  
//     //const students = await fetchStudentsByClassId(class_id);
//     //return NextResponse.json();
//   }


import { NextResponse } from 'next/server';

// Mock function to simulate fetching students by class_id
const fetchStudentsByClassId = async (class_id) => {
  const students = [
    { id: 1, name: "John Doe", class_id: "2" },
    { id: 2, name: "Jane Smith", class_id: "2" },
    { id: 3, name: "Alex Brown", class_id: "3" },
  ];
  
  return students.filter((student) => student.class_id === class_id);
};

export async function GET(req) {

  console.log(req.url);
  console.log("req.url")
  
  const { searchParams } = new URL(req.url);

  console.log(searchParams)
  const class_id = searchParams.get('class_id');  // Get the class_id from the query parameters
  
  if (!class_id) {
    return NextResponse.json({ error: 'class_id is required' }, { status: 400 });
  }
  
  const students = await fetchStudentsByClassId(class_id);  // Fetch students based on class_id
  
  return NextResponse.json(students);  // Return students as a JSON response
}

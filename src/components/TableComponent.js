'use client'
import { param } from 'jquery';
import React from 'react'

const TableComponent = (props) => {


    const handleMonthEdit = () => {
      console.log('handleMonthEdit')
    }

    const handleMonthDelete = async (monthDeleteId) => {
      const response = await fetch(`/api/deleteMonthById?month_id=${monthDeleteId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      console.log('Deleted Successfully:', data); 
    }

    const handleClassesDelete = async () => {
      const response = await fetch('/api/deleteClassesById?class');
    }
    
    if(props.recordName == "classes"){

       return(

        <div className="card">
                    <div className="card-header">
                      <h5>{props.tableTitle}</h5>
                      {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                    </div>
                    <div className="card-block">
                      <div className="card-block table-border-style">
                        <div className="table-responsive">
                          <table className="table" responsive>
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>class Name</th>
                                <th>created at</th>
                              </tr>
                            </thead>
                            <tbody>

                              {props.tableRecord.map((classRec) => (
                                <tr key={classRec.id}>
                                  <td>{classRec.id}</td>
                                  <td>{classRec.class_name}</td>
                                  <td>
                                    <button className="btn btn-primary" onClick={()=>handleEdit(classRec.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>handleDelete(classRec.id)}>Delete</button>
                                  </td>
                                </tr>
                              ))}
                              
                              
                              
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
       );

    }else if(props.recordName == "subjects"){

      return (
          <div className="card">
          <div className="card-header">
          <h5>Subject Records</h5>
          {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
          </div>
          <div className="card-block">
          <div className="card-block table-border-style">
                                  <div className="table-responsive">
                                      <table className="table">
                                          <thead>
                                              <tr>
                                                  <th>#</th>
                                                  <th>Subject Name</th>
                                                  <th>Class</th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                            {props.tableRecord.map((Subject, index) => (
                                                  <tr key={Subject.id}>
                                                      <td>{index + 1}</td>
                                                      <td>{Subject.subjectName}</td>
                                                      <td>{Subject.class_name}</td>
                                                      
                                                      <td>
                                                          <EditAction/>
                                                          <button className="btn btn-danger" onClick={() => handleDelete(Subject.id)}>Delete</button>
                                                      </td>
                                                  </tr>   
                                            )) }
                                            
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
          </div>
      </div>
      )

    }else if(props.recordName == "parents"){


        return (
            <div className="card">
                                <div className="card-header">
                                <h5>Parents List</h5>
                                {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                                </div>
                                <div className="card-block">
                                <div className="card-block table-border-style">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Parent Name</th>
                                                                        <th>Email</th>
                                                                        <th>age</th>
                                                                        <th>Phone</th>
                                                                        <th>address</th>
                                                                        <th>Action</th> 
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                   
                                                                   {props.tableRecord.map((parentRec)=>(
                                                                    <tr key={parentRec.id}>
                                                                         <td>{parentRec.id}</td>
                                                                         <td>{parentRec.parent_name}</td>
                                                                         <td>{parentRec.email}</td>
                                                                         <td>{parentRec.age}</td>
                                                                         <td>{parentRec.phone}</td>
                                                                         <td>{parentRec.address}</td>
                                                                        <td>
                                                                        <button className="btn btn-primary" onClick={() => handleEdit(student.id)}>Edit</button>
                                                                        <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                                                                        </td>
                                                                    </tr>
                                                                   
                                                                   ))}
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                </div>
                            </div>
        )

    }else if(props.recordName=="studentsRecord"){

      return(
        <div className="card">
                      <div className="card-header">
                        <h5>{props.tableTitle}</h5>
                        {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                      </div>
                      <div className="card-block">
                        <div className="card-block table-border-style">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>parents</th>
                                  <th>Email</th>
                                  <th>class</th>
                                  <th>GR number</th>
                                  <th>Age</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {props.tableRecord.map((student) => (
                                  <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.parent_name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.class_name}</td>
                                    <td>{student.gr_num}</td>
                                    <td>{student.age}</td>
                                    <td>
                                      <button
                                        className="btn btn-primary"
                                        onClick={() => handleEdit(student.id)}
                                      >
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(student.id)}
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
   )
   }else if(props.recordName=="teacher"){
    return(
      <div className="card">
      <div className="card-header">
        <h5>{props.tableTitle}</h5>
        {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
      </div>
      <div className="card-block">
        <div className="card-block table-border-style">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th># id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.tableRecord.map((teacher) => (
                  <tr key={teacher.id}>
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.class_name}</td>
                    <td>{teacher.subjectName}</td>
                    <td>{teacher.phone}</td>
                    <td>{teacher.Age}</td>
                    <td>{teacher.address}</td>
                    
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(teacher.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(teacher.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
   }
   else if(props.recordName=="fees"){
    return(
        <div className="card">
                                  <div className="card-header">
                                  <h5>{props.tableTitle}</h5>
                                  {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                                  </div>
                                  <div className="card-block">
                                  <div className="card-block table-border-style">
                                                          <div className="table-responsive">
                                                              <table className="table">
                                                                  <thead>
                                                                      <tr>
                                                                          <th>#</th>
                                                                          <th>Name</th>
                                                                          <th>Date</th>
                                                                          <th>Class</th>
                                                                          <th>Amount</th>
                                                                          <th>Status</th>
                                                                          <th>Action</th>
                                                                      </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                    {props.tableRecord.map((fees) => (
                                                                          <tr key={fees.id}>
                                                                              <td>{fees.id}</td>
                                                                              <td>{fees.student_id}</td>
                                                                              <td>{fees.date}</td>
                                                                              <td>{fees.class_id}</td>
                                                                              <td>{fees.amount}</td>
                                                                              <td>{fees.status}</td>
                                                                              <td>
                                                                                  <button className="btn btn-primary" onClick={() => handleEdit(fees.id)}>Edit</button>
                                                                                  <button className="btn btn-danger" onClick={() => handleDelete(fees.id)}>Delete</button>
                                                                              </td>
                                                                          </tr>   
                                                                    )) }
                                                                    
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>
                                  </div>
                              </div>
    )
   }
else if (props.recordName=="months"){
  return(

    <div className="card">
    <div className="card-header">
      <h5>{props.tableTitle}</h5>
      {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
    </div>
    <div className="card-block">
      <div className="card-block table-border-style">
        <div className="table-responsive">
          <table className="table" responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Month Name</th>
                <th>created at</th>
              </tr>
            </thead>
            <tbody>

              {props.tableRecord.map((monthRec) => (
                <tr key={monthRec.id}>
                  <td>{monthRec.id}</td>
                  <td>{monthRec.month_name}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>handleMonthEdit(monthRec.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>handleMonthDelete(monthRec.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}

   else if(props.recordName=="attendence"){
    return (
      <div className="card">
      <div className="card-header">
        <h5>{props.tableTitle} </h5>
        {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
      </div>
      <div className="card-block">
        <div className="card-block table-border-style">
          <div className="table-responsive">
            <table className="table" responsive>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Class</th>
                  <th>Date</th>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.tableRecord.map((attendance) => (
                  <tr key={attendance.id}>
                    <td>{attendance.id}</td>
                    <td>{attendance.class_name}</td>
                    <td>{attendance.date}</td>
                    <td>{attendance.month}</td>
                    <td>{attendance.year}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handleEdit(attendance.id)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          handleDelete(attendance.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
   }
    
}

export default TableComponent
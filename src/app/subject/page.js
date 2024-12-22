'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import HeaderComponent from '@/components/HeaderComponent'
import TableComponent from '@/components/TableComponent';

export default function Subject() {

    const [subjectRecord, setSubjectRecord] = useState([]);
    
    const [classRecord, setClassRecord] = useState([]);

    const [formData, setFormData] = useState({
        subjectName: "",
        class:"",
       
       
    });

    useEffect( () => {

        fetch('api/subject')
        .then(response => response.json())
        .then((data)=>{
            setSubjectRecord(data)
            console.log("Subject API Data:", data);

        })
        .catch(error => console.log("error fetching data from Subject api", error));
    },[]);


    
    useEffect( () => {
        
        fetch('api/classes')
        .then(response => response.json())
        .then((data)=>{
            setClassRecord(data)
            console.log("Classes API Data:", data);

        })
        .catch(error => console.log("error fetching data from Classes api", error));
    },[]);



    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name] : type === "checked" ? checked : value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('api/insertSubject',{
                method: 'POST',
                header:{
                    'Contant-Type' : 'application/json'
                },

                body :JSON.stringify(formData)
            })
            if (response.ok) {
                // Optionally, handle success (e.g., reset form, show success message)
                alert('subject Record added successfully!');
                window.location.reload();
              } else {
                const result = await response.json();
                alert(`Error: ${result.error}`);
              }
        } catch (error) {
              console.error('Error submitting form:', error);
              alert('Something went wrong!');
            }
            
          
        
    };

  return (
 

<div className="pcoded-content">
                {/* Page-header start */}
                <HeaderComponent
                title="subject"
                subTitle="Mange and view subject information, records, and indivdidual profile all in one place"
                />
                
                {/* Page-header end */}
                <div className="pcoded-inner-content">
                    {/* Main-body start */}
                    <div className="main-body">
                    <div className="page-wrapper">
                        {/* Page body start */}
                        <div className="page-body">
                        <div className="row">
                            <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                <h5>Add new subject Records</h5>
                                {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                                </div>
                                <div className="card-block">
                                <form className="form-material" onSubmit={handleSubmit}>
                                    <div className="form-group form-default">
                                    <input type="text" name="subjectName" className="form-control" required value={formData.subjectName} onChange={handleChange} />
                                    <span className="form-bar" />
                                    <label className="float-label">subject Name </label>
                                    </div>
                                    <div className="form-group form-default">
                                        <select required name="class" onChange={handleChange} value={formData.class} className="form-control">
                                        <option>select class..</option>
                                        {classRecord.map((classrow) => (
                                            <option value={classrow.id}>{classrow.class_name}</option>
                                            )) }
                                        </select>

                                      
                              
                                    </div>
                                    
                                    <button type='submit'>submit</button>
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-8">

                            <TableComponent  tableRecord={subjectRecord}  recordName="subjects" tableTitle={"Subject List"}/>

                        
                            </div>
                        </div>
                        
                        
                        </div>
                    
                    </div>
                    </div>
                    
                    
                </div>
                </div>


  )
}

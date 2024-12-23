"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import HeaderComponent from '@/components/HeaderComponent'
import TableComponent from "@/components/TableComponent";

export default function Classes() {

  const [classRecord, setClassRecord] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    fetch("/api/classes")
      .then((response) => response.json())
      .then((data) => {
        setClassRecord(data);
        console.log(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch('/api/insertClasses',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok){
          alert('student added successfully!');
          window.location.reload();
        }else{
          const result = await response.json();
          alert(`Error: ${result.error}`);
        }
    }catch (error){
      console.error('Error submitting from:', error);
      alert('something went wrong!');
    }
  };




  return (
    <div className="pcoded-content">
      {/* Page-header start */}
      
      <HeaderComponent 
          title="Classes" 
          subTitle="Manage and view classes information, attendance records, and individual profiles all in one place"/>

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
                      <h5>Add new class</h5>
                      {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                    </div>
                    <div className="card-block">
                      <form className="form-material" onSubmit={handleSubmit}>
                        <div className="form-group form-default">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <span className="form-bar" />
                          <label className="float-label">Class Name</label>
                        </div>
                        <button type="submit">submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <TableComponent tableRecord={classRecord} recordName="classes" tableTitle={"Class List"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

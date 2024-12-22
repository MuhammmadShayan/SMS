'use client'
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import HeaderComponet from '@/components/HeaderComponent'
import TableComponent from "@/components/TableComponent";

export default function Teacher() {

  const [classRecord, setClassRecord] = useState([]);
  const [subjectRecord, setSubjectRecord] = useState([]);
  const [teacherRecord, setTeacherRecord] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class:"",
    subject: "",
    phone: "",
    age: "",
    address: "",
    
  });

  useEffect(() => {
    // fetch data from API
    fetch("api/teacher")
      .then((response) => response.json())
      .then((data) => {
        setTeacherRecord(data); // Store the data
        console.log("teacher API data",data); // Log the data inside the .then() block
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []); // Empty dependency array to run this effect only once (on mount)


  useEffect(() => {
    // fetch data from API
    fetch("api/classes")
      .then((response) => response.json())
      .then((data) => {
        setClassRecord(data); // Store the data
        console.log("classes API data",data); // Log the data inside the .then() block
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []);

  useEffect(() => {
    // fetch data from API
    fetch("api/subject")
      .then((response) => response.json())
      .then((data) => {
        setSubjectRecord(data); // Store the data
        console.log("subject API data",data); // Log the data inside the .then() block
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("/api/insertTeacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Optionally, handle success (e.g., reset form, show success message)
        alert("Teacher added successfully!");
        window.location.reload();
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="pcoded-content">
      {/* Page-header start */}
      <HeaderComponet
      title="Teacher"
      subTitle="Mange and view Teacher information, records, and indivdidual profile all in one place"
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
                      <h5>Add new Teacher</h5>
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
                          <label className="float-label">Name</label>
                        </div>
                        <div className="form-group form-default">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <span className="form-bar" />
                          <label className="float-label">Email</label>
                        </div>
                        <div className="form-group form-default">
                          <input
                            type="number"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                           <span className="form-bar" />
                          <label className="float-label">phone</label>
                        </div>
                        <div className="form-group form-default">
                          <input
                            type="number"
                            name="age"
                            className="form-control"
                            value={formData.age}
                            onChange={handleChange}
                            required
                          />
                          <span className="form-bar" />
                          <label className="float-label">age</label>
                        </div>
                     
                        <div className="form-group from-default">
                          <select className="form-control" value={formData.class} onChange={handleChange} name="class">
                            <option>select class</option>
                            {
                              classRecord.map((classrow) => (
                                
                                <option value={classrow.id}>{classrow.class_name}</option>
                              ))
                            }
                          </select>
                          <span className="form-bar" />
                          <label className="float-label">Class</label>
                        </div>
                     
                        <div className="form-group from-default">
                          <select className="form-control" value={formData.subject} onChange={handleChange} name="subject">
                            <option>select subject</option>
                            {
                              subjectRecord.map((subjectrow) => (
                                <option value={subjectrow.id}>{subjectrow.subjectName}</option>
                              ))
                            }
                          </select>
                          <span className="form-bar" />
                          <label className="float-label">Subject</label>

                        </div>

                        <div className="form-group form-default">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                          <span className="form-bar" />
                          <label className="float-label">Address</label>
                        </div>
                        
                     

                        <button type="submit">submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                 <TableComponent recordName="teacher" tableTitle="Teachers Record" tableRecord={teacherRecord} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

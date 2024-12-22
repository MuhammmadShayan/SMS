"use client";
import React, { useEffect, useState } from "react";
import Parents from "../parents/page";
import HeaderComponent from "@/components/HeaderComponent";
import TableComponent from "@/components/TableComponent";

export default function Students() {
  const [classRecord, setClassRecord] = useState([]);
  const [parentsRecord, setParentsRecord] = useState([]);
  const [studentRecord, setStudentRecord] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    parent: "",
    email: "",
    class: "",
    gr_num: "",
    age: "",
  });

  useEffect(() => {
    fetch("api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudentRecord(data);
        console.log("Student API Data:", data);
      })
      .catch((error) => console.log("error fetching data from api", error));
  }, []);

  useEffect(() => {
    fetch("api/parents")
      .then((response) => response.json())
      .then((data) => {
        setParentsRecord(data);
        console.log("Parent API Data:", data);
      })
      .catch((error) =>
        console.log("error fetching data from parents api", error)
      );
  }, []);

  useEffect(() => {
    fetch("api/classes")
      .then((response) => response.json())
      .then((data) => {
        setClassRecord(data);
        console.log("classes API Data:", data);
      })
      .catch((error) =>
        console.log("error fetching data from classes api", error)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checked" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/insertStudent", {
        method: "POST",
        header: {
          "Contant-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Optionally, handle success (e.g., reset form, show success message)
        alert("Student added successfully!");
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
    <div>
      <div className="pcoded-content">
        {/* Page-header start */}
       <HeaderComponent
       title="Students"
       subTitle="Mange and view Student information, records, and indivdidual profile all in one place"
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
                        <h5>Add new Students</h5>
                        {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                      </div>
                      <div className="card-block">
                        <form className="form-material" onSubmit={handleSubmit}>
                          <div className="form-group form-default">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                            <span className="form-bar" />
                            <label className="float-label"> Name</label>
                          </div>

                          <div className="form-group form-default">
                            <select
                              className="form-control"
                              name="parent"
                              value={formData.parent}
                              onChange={handleChange}
                            >
                              <option>select parent</option>
                              {parentsRecord.map((parentsrow) => (
                                <option value={parentsrow.id}>
                                  {parentsrow.parent_name}
                                </option>
                              ))}
                            </select>
                            <span className="form-bar" />
                            <label className="float-label">parent Name</label>
                          </div>

                          <div className="form-group form-default">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <span className="form-bar" />
                            <label className="float-label">Email</label>
                          </div>

                          <div className="form-group form-default">
                            <select
                              required
                              value={formData.class}
                              name="class"
                              onChange={handleChange}
                              className="form-control"
                            >
                              <option>select class</option>
                              {classRecord.map((classrow) => (
                                <option value={classrow.id}>
                                  {classrow.class_name}

                                </option>
                              ))}
                            </select>
                            <label className="float-label">class</label>
                          </div>

                          <div className="form-group form-default">
                            <input
                              type="text"
                              name="gr_num"
                              className="form-control"
                              required
                              value={formData.gr_num}
                              onChange={handleChange}
                            />
                            <span className="form-bar" />
                            <label className="float-label">GR number</label>
                          </div>

                          <div className="form-group form-default">
                            <input
                              type="number"
                              name="age"
                              className="form-control"
                              required
                              value={formData.age}
                              onChange={handleChange}
                            />
                            <span className="form-bar" />
                            <label className="float-label">Age</label>
                          </div>
                          <button type="submit">submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <TableComponent tableRecord={studentRecord} recordName="studentsRecord" tableTitle={'Students Records'}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

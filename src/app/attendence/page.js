"use client";
import React, { useEffect, useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import TableComponent from "@/components/TableComponent";

export default function Attendance() {
  const [classRecord, setClassRecord] = useState([]);
  const [attendanceRecord, setAttendenceRecord] = useState([]);
  const [formData, setFormData] = useState({
    class: "",
    date: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    fetch("api/classes")
      .then((response) => response.json())
      .then((data) => {
        setClassRecord(data);
        console.log("API Data:", data);
      })
      .catch((error) =>
        console.log("error fetching data from classes api", error)
      );
  }, []);

  useEffect(() => {
    fetch("api/attendence")
      .then((response) => response.json())
      .then((data) => {
        setAttendenceRecord(data);
        console.log("API Data:", data);
      })
      .catch((error) =>
        console.log("error fetching data from Attendence api", error)
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

    try{
        const response = await fetch('/api/insertAttendence',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok){
          alert('Attendence added successfully!');
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
    <div>
      <div className="pcoded-content">
        {/* Page-header start */}
        <HeaderComponent
        title="Attendences"
        subTitle="Mange and view Attendence information, records, and indivdidual profile all in one place"
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
                        <h5>Attendence</h5>
                        {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                      </div>
                      <div className="card-block">
                        <form className="form-material" onSubmit={handleSubmit}>
                          <div className="form-group form-default">
                            <select
                              className="form-control"
                              value={formData.class}
                              onChange={handleChange}
                              name="class"
                              required
                            >
                              <option>select class..</option>
                              {classRecord.map((classrec) => (
                                <option value={classrec.id}>
                                  {classrec.class_name}
                                </option>
                              ))}
                            </select>
                            <span className="form-bar" />
                            <label className="float-label">Select Class </label>
                          </div>

                          <div className="form-group form-default">
                            <input
                              type="date"
                              name="date"
                              className="form-control"
                              required
                              value={formData.date}
                              onChange={handleChange}
                            />
                            <span className="form-bar" />
                            <label className="float-label">Date</label>
                          </div>

                          <div className="form-group form-default">
                            <select
                              className="form-control"
                              required
                              name="month"
                              value={formData.month}
                              onChange={handleChange}
                            >
                              <option>select month..</option>
                              <option>january</option>
                              <option>Febury</option>
                              <option>March</option>
                              <option>Apirl</option>
                              <option>May</option>
                              <option>June</option>
                              <option>July</option>
                              <option>August</option>
                              <option>September</option>
                              <option>October</option>
                              <option>NOvember</option>
                              <option>December</option>
                            </select>
                            <span className="form-bar" />
                            <label className="float-label">Select Month</label>
                          </div>
                          <div className="form-group form-default">
                            <select
                              className="form-control"
                              name="year"
                              onChange={handleChange}
                              value={formData.year}
                              required
                            >
                              <option>select year..</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                              <option>2022</option>
                              <option>2023</option>
                              <option>2024</option>
                            </select>
                            <span className="form-bar" />
                            <label className="float-label">Select year</label>
                          </div>

                          <button type="submit">submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                  <TableComponent tableRecord={attendanceRecord} tableTitle={"Attendence Record"} recordName="attendence" />
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

"use client"
import React from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import TableComponent from '@/components/TableComponent'
import { useState, useEffect } from 'react';

export default function Month() {


  const [monthRecord, setMonthRecord] = useState([]);
  const [formData, setFormData] = useState({
    month_name: "",
  });

  useEffect(() => {
    fetch("/api/months")
      .then((response) => response.json())
      .then((data) => {
        setMonthRecord(data);
        console.log(data);
      })
      .catch(error => console.error("Error fetching month data:", error));
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
        const response = await fetch('/api/insertMonths',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok){
          alert('Month added successfully!');
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

<HeaderComponent
title="Month"
subTitle="Add Month"
/>
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
                      <h5>Add Month </h5>
                      {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                    </div>
                    <div className="card-block">
                      <form className="form-material" onSubmit={handleSubmit} >
                        <div className="form-group form-default">
                          <input
                            type="text"
                            name="month_name"
                            className="form-control"
                            value={formData.month_name}
                            onChange={handleChange}
                            required
                          />
                          <span className="form-bar" />
                          <label className="float-label">Month Name</label>
                        </div>
                        <button type="submit">submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <TableComponent tableRecord={monthRecord} recordName="months" tableTitle={"Month list"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

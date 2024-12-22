'use client';
import React, { useState, useEffect } from 'react';
import HeaderComponent from '@/components/HeaderComponent';
import TableComponent from '@/components/TableComponent';
import Select from 'react-select';

export default function Fees() {
  const [studentRecord, setStudentRecord] = useState([]);
  const [classRecord, setClassRecord] = useState([]);
  const [feesRecord, setFeesRecord] = useState([]);
  const [formData, setFormData] = useState({
    student_id: "",
    date: "",
    class_id: "",
    amount: "",
    status: ""
  });

  useEffect(() => {
    fetch('api/fees')
      .then(response => response.json())
      .then((data) => {
        setFeesRecord(data);
        console.log("API Data:", data);
      })
      .catch(error => console.log("error fetching data from api", error));

    fetch('api/students')
      .then(response => response.json())
      .then((data) => {
        setStudentRecord(data);
        console.log("API Data:", data);
      })
      .catch(error => console.log("error fetching data from student api", error));

    fetch('api/classes')
      .then(response => response.json())
      .then((data) => {
        setClassRecord(data);
        console.log("classes API Data:", data);
      })
      .catch(error => console.log("error fetching data from classes api", error));
  }, []);

  const handleChange = async (e, ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      
    });
  };

  const fetchStudentsByClass = async (class_id) => {
    try {
      const response = await fetch(`/api/getStudentByClassId?class_id=${class_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      console.log('Fetched Students:', data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };


  
  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : "",
    });

    if (name === "class_id" && selectedOption) {
        console.log("Selected Class ID:", selectedOption.value);
        
        fetchStudentsByClass(selectedOption.value);
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/insertFees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Fees Record added successfully!');
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

  const studentOptions = studentRecord.map(student => ({
    value: student.id,
    label: `${student.name} - ${student.class_name}`
  }));

  

  const classOptions = classRecord.map(classRow => ({
    value: classRow.id,
    label: classRow.class_name
  }));

  return (
    <div className="pcoded-content">
      {/* Page-header start */}
      <HeaderComponent
        title="Fees"
        subTitle="Manage and view Fees information, records, and individual profile all in one place"
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
                      <h5>Add new Fees Records</h5>
                    </div>
                    <div className="card-block">
                      <form className="form-material" onSubmit={handleSubmit}>
                      <div className="form-group form-default">
                          <Select
                            name="class_id"
                            options={classOptions}
                            onChange={handleSelectChange}
                            placeholder="Select class..."
                          />
                          <span className="form-bar" />
                          
                        </div>
                       

                        <div className="form-group form-default">
                          <Select
                            name="student_id"
                            options={studentOptions}
                            onChange={handleSelectChange}
                            placeholder="Select student..."
                          />
                          <span className="form-bar" />
                          
                        </div>

                        <div className="form-group form-default">
                          <input type="date" name="date" className="form-control" required value={formData.date} onChange={handleChange} />
                          <span className="form-bar" />
                          <label className="float-label">Date</label>
                        </div>
                        

                        <div className="form-group form-default">
                          <input type="number" name="amount" className="form-control" required value={formData.amount} onChange={handleChange} />
                          <span className="form-bar" />
                          <label className="float-label">Amount</label>
                        </div>
                        <div className="form-group form-default">
                          <input type="text" name="status" className="form-control" required value={formData.status} onChange={handleChange} />
                          <span className="form-bar" />
                          <label className="float-label">Status</label>
                        </div>
                        <button type='submit'>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <TableComponent tableRecord={feesRecord} recordName="fees" tableTitle={"Fees Record"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import TableComponent from '@/components/TableComponent'

export default function Parents() {

    const [parentRecord, setParentRecord] = useState([])


    const [formData, setFormData] = useState({
        name:'',
        email:'',
        age:'',
        phone:'',
        address:''
        
    })

    useEffect(()=>{
        fetch('api/parents')
        .then(response => response.json())
        .then((data) => {
            setParentRecord(data);
            console.log(data);
        })
        .catch(error => console.error('error fetching data', error));
    },[]);


    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch('api/insertParents',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
                });
                
                if(response.ok){
                    alert('Parents added successfully!');
                    window.location.reload();
                }else{
                    const result = await response.json();
                    alert(`Error: ${result.error}`);
                }
    }catch(error){
        console.error('Error submitting form:', error);
        alert('something went wrong');
    }
    };
    

  return (
    <div>

<div className="pcoded-content">
                {/* Page-header start */}
                <HeaderComponent
                title="Parents"
                subTitle="Mange and view Parents information, records, and indivdidual profile all in one place"
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
                                <h5>Add new Parents</h5>
                                {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                                </div>
                                <div className="card-block">
                                <form className="form-material" onSubmit={handleSubmit}>
                                    <div className="form-group form-default">
                                    <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
                                    <span className="form-bar" />
                                    <label className="float-label">Parent Name</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="email" name="email" className="form-control" required  value={formData.email} onChange={handleChange}/>
                                    <span className="form-bar" />
                                    <label className="float-label">Email</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="number" name="age" className="form-control" required value={formData.age} onChange={handleChange}/>
                                    <span className="form-bar" />
                                    <label className="float-label">Age</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="number" name="phone" className="form-control" required value={formData.phone} onChange={handleChange} />
                                    <span className="form-bar" />
                                    <label className="float-label">Phone number</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="text" name="address" className="form-control" required value={formData.address} onChange={handleChange} />
                                    <span className="form-bar" />
                                    <label className="float-label">address</label>
                                    </div>
                                    <button type='submit'>submit</button>
                                   
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-8">

                            <TableComponent  tableRecord={parentRecord}  recordName="parents" tableTitle={"Parent List"}/>

                            
                            </div>
                        </div>
                        
                        
                        </div>
                    
                    </div>
                    </div>
                    
                    
                </div>
                </div>

    </div>
  )
}

import React from 'react'

export default function Classes() {
  return (
       
                <div className="pcoded-content">
                {/* Page-header start */}
                <div className="page-header">
                    <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Classes</h5>
                            <p className="m-b-0">Manage and view classes information, attendance records, and individual profiles all in one place</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <ul className="breadcrumb-title">
                            <li className="breadcrumb-item">
                            <a href="index.html"> <i className="fa fa-home" /> </a>
                            </li>
                            <li className="breadcrumb-item"><a href="#!">Form Components</a>
                            </li>
                            <li className="breadcrumb-item"><a href="#!">Basic Form Inputs</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
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
                                <form className="form-material">
                                    <div className="form-group form-default">
                                    <input type="text" name="footer-email" className="form-control" required />
                                    <span className="form-bar" />
                                    <label className="float-label">First Name</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="text" name="footer-email" className="form-control" required />
                                    <span className="form-bar" />
                                    <label className="float-label">Last Name</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="email" name="footer-email" className="form-control" required />
                                    <span className="form-bar" />
                                    <label className="float-label">Email</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="text" name="footer-email" className="form-control" required defaultValue="My value" />
                                    <span className="form-bar" />
                                    <label className="float-label"></label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="text" name="footer-email" className="form-control" required disabled />
                                    <span className="form-bar" />
                                    <label className="float-label">Disabled</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <input type="text" name="footer-email" className="form-control" required maxLength={6} />
                                    <span className="form-bar" />
                                    <label className="float-label">Max length 6 char</label>
                                    </div>
                                    <div className="form-group form-default">
                                    <textarea className="form-control" required defaultValue={""} />
                                    <span className="form-bar" />
                                    <label className="float-label">Text area Input</label>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                <h5>Class List</h5>
                                {/*<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>*/}
                                </div>
                                <div className="card-block">
                                <div className="card-block table-border-style">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>id</th>
                                                                        <th>className</th>
                                                                        <th>Action</th>
                                                                        
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">1</th>
                                                                        <td></td>
                                                                        <td></td>
                                                                        
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">2</th>
                                                                        <td>Jacob</td>
                                                                        <td>Thornton</td>
                                                                        
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">3</th>
                                                                        <td>Larry</td>
                                                                        <td>the Bird</td>
                                                                        
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                </div>
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
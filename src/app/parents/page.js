import React from 'react'

export default function Parents() {
  return (
    <div>

<div className="pcoded-content">
                {/* Page-header start */}
                <div className="page-header">
                    <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Parents </h5>
                            <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
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
                                <h5>Add new Parents</h5>
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
                                                                        <th>First Name</th>
                                                                        <th>Last Name</th>
                                                                        <th>Username</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">1</th>
                                                                        <td>Mark</td>
                                                                        <td>Otto</td>
                                                                        <td>@mdo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">2</th>
                                                                        <td>Jacob</td>
                                                                        <td>Thornton</td>
                                                                        <td>@fat</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">3</th>
                                                                        <td>Larry</td>
                                                                        <td>the Bird</td>
                                                                        <td>@twitter</td>
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

    </div>
  )
}

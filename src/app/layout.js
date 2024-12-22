'use client';

import localFont from 'next/font/local';
import './globals.css';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from "react-bootstrap";
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>School Management System</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Mega Able Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs."
        />
        <meta
          name="keywords"
          content="bootstrap, bootstrap admin template, admin theme, admin dashboard, dashboard template, admin template, responsive"
        />
        <meta name="author" content="codedthemes" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/pages/waves/css/waves.min.css" />
        
        <link rel="stylesheet" href="/assets/icon/themify-icons/themify-icons.css" />
        <link rel="stylesheet" href="/assets/icon/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.css" />
        <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <div id="pcoded" className="pcoded">
          <div className="pcoded-overlay-box"></div>
          <div className="pcoded-container navbar-wrapper">
            <nav className="navbar header-navbar pcoded-header" style={{backgroundColor: "black"}}>
              <div className="navbar-wrapper">
                <div className="navbar-logo">
                  <a className="mobile-menu waves-effect waves-light" id="mobile-collapse" href="#!">
                    <i className="ti-menu" style={{color: "white"}}></i>
                  </a>
                  <a href="index.html">
                    <img className="img-fluid" src="/assets/images/logo.png" alt="Theme-Logo" />
                  </a>
                  <a className="mobile-options waves-effect waves-light">
                    <i className="ti-more" ></i>
                  </a>
                </div>
                <div className="navbar-container container-fluid">
                  <ul className="nav-left">
                    <li>
                      <div className="sidebar_toggle">
                        <a href="javascript:void(0)">
                          <i className="ti-menu"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="#!" className="waves-effect waves-light" onClick={() => toggleFullScreen()}>
                        <i className="ti-fullscreen" style={{color: "white"}}></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-right">
                    <li className="user-profile header-notification">
                      <a href="#!" className="waves-effect waves-light">
                        <img
                          src="/assets/images/avatar-4.jpg"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                        <span style={{color: "white"}}>John Doe</span>
                        <i className="ti-angle-down" style={{color: "white"}}></i>
                      </a>
                      <ul className="show-notification profile-notification">
                        <li>
                          <a href="#!">
                            <i className="ti-settings"></i> Settings
                          </a>
                        </li>
                        <li>
                          <a href="user-profile.html">
                            <i className="ti-user"></i> Profile
                          </a>
                        </li>
                        <li>
                          <a href="auth-normal-sign-in.html">
                            <i className="ti-layout-sidebar-left"></i> Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                 

                </div>
              </div>
            </nav>
            <div className="pcoded-main-container">
              <div className="pcoded-wrapper">
                <nav className="pcoded-navbar">
                  <div className="sidebar_toggle">
                    <a href="#">
                      <i className="icon-close icons"></i>
                    </a>
                  </div>
                  <div className="pcoded-inner-navbar main-menu">
                    <div className="main-menu-header">
                      <img
                        className="img-80 img-radius"
                        src="/assets/images/avatar-4.jpg"
                        alt="User-Profile-Image"
                      />
                      <div className="user-details">
                        <span id="more-details">
                          John Doe <i className="fa fa-caret-down"></i>
                        </span>
                      </div>
                    </div>
                    <ul className="pcoded-item pcoded-left-item">
                      <li className="active">
                        <Link href="/dashboard" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}}  className="ti-home"></i>
                          </span>
                          <span className="pcoded-mtext">Dashboard</span>
                        </Link>
                      </li>
                      <li className="pcoded-hasmenu">
                        <Link href="/classes" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">Classes</span>
                        </Link>
                        
                      </li>

                      <li className="pcoded-hasmenu">
                        <Link href="/subject" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">Subject</span>
                        </Link>
                        
                      </li>

                      <li className="pcoded-hasmenu">
                        <Link href="/parents" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color: "black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">Parents</span>
                        </Link>
                        
                      </li>

                      <li className="pcoded-hasmenu">
                        <Link href="/teacher" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:'black'}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">Teacher</span>
                        </Link>
                       
                        
                      </li>

                      <li className="pcoded-hasmenu">
                        <Link href="/students" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">Student</span>
                        </Link>
                       
                        
                      </li>

                      <li className="pcoded-hasmenu">
                        <Link href="/fees" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">fees</span>
                        </Link>
                       
                        
                      </li>

                      <li className="pcoded-hasmenu">
                        <Link href="/attendence" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">attendance</span>
                        </Link>
                       
                        
                      </li>


                      <li className="pcoded-hasmenu">
                        <Link href="/settings" className="waves-effect waves-dark">
                          <span className="pcoded-micon">
                            <i style={{color:"black"}} className="ti-layout-grid2-alt"></i>
                          </span>
                          <span className="pcoded-mtext">Setting</span>
                        </Link>
                       
                        
                      </li>

                    </ul>
                  </div>
                </nav>
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

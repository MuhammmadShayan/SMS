'use client'
import React from 'react'

const headerComponent = (props) => {
  return (
    <div> <div className="page-header">
    <div className="page-block">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="page-header-title">
            <h5 className="m-b-10">{props.title}</h5>
            <p className="m-b-0">
            {props.subTitle}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <ul className="breadcrumb-title">
            <li className="breadcrumb-item">
              <a href="index.html">
                {" "}
                <i className="fa fa-home" />{" "}
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Form Components</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Basic Form Inputs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default headerComponent


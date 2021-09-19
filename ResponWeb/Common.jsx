import React from "react";
import { NavLink } from "react-router-dom";

const Common = (propes) =>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{propes.name} <strong className="brand-name">RadhaKrishna</strong></h1>
                  <h2 className="my-3">
                    we are the team of talented developer making websites
                  </h2>
                  <div className="my-3">
                  <NavLink to={propes.visit} className="btn-get-started">{propes.btname}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={propes.imgsrc} className="img-fluid animated" alt="home img" />
                </div>
                </div>
              </div>
            </div>
        </div>    
          </section>
        </>
    );
}
export default Common;
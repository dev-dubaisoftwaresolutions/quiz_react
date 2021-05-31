import React from "react";
import { NavLink} from "react-router-dom";
import './App.css';

const Cards = () => {
  return (
    <>
    <br />
    <section className="marginn">
    <h3>Dashboard</h3>
    <div className="main">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-4 ">
            <div className="card">
              <img
                className="card-img-top"
                src="backend.jpg"
                alt="not fount"
              />
              <div className="card-body rounded">
                <h5 className="card-title">Chapter 1</h5>
                <h5>What is backend?</h5>
                <p className="card-text">Loreum ipsum........</p>
                <NavLink to="./Tutorial" /*className="btn btn-primary"*/>
                <img src="Button (2).png" alt="not found" className="btncard"/>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                className="card-img-top"
                src="frontend.jpg"
                alt="not found"
              />
              <div class="card-body">
                <h5 class="card-title">Chapter 2</h5>
                <h5>What is FrontEnd?</h5>
                <p class="card-text">
                Loreum ipsum........
                </p>
                <NavLink to="./Tutorial" /*className="btn btn-primary"*/>
                <img src="Button (2).png" alt="not found" className="btncard"/>
                </NavLink>
                
              </div>
            </div>
          </div>
          <div className="col-4  ">
            <div className="card" style={{ width: "18rem;" }} >
              <img className="card-img-top" src="fullstackk.jpg" alt="not found" />
              <div className="card-body">
                <h5 className="card-title">Chapter 3 </h5>
                <h5>What is FUll Stack?</h5>
                <p className="card-text">
                Loreum ipsum........
                </p>
                <NavLink to="./Tutorial" /*className="btn btn-primary"*/>
                <img src="Button (2).png" alt="not found" className="btncard"/>
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default Cards;

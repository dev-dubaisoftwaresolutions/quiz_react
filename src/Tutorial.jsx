import React from "react";
import "./App.css";
// import Quizchapter from "./Quizchapter";
import {NavLink} from "react-router-dom";
// import Navigation from './Navigation';
const Tutorial = (props) => {
  return (
    <>
    {/* <div>
      <Navigation/></div> */}
      <div className="container mt-5">
        <h3>Tutorials</h3>
      </div>
      <div className="d-flex justify-content-center">
        <img src="line.png" alt="not found" />
      </div>

      <div className="container mt-5 quiz">
        <div class="row">
          <div className="col-lg-6 d-flex jusitfy-content-center p-5">
         
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            
          </div>
          <div className="col-lg-6 ">
            <div className="chap1">
              <h2>Chapter 1</h2>
              </div>
              <br />
            <div className="back">
              <h4 >What is BACKEND</h4>
              </div>
                  <br />
            <div className="text">
              <p>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has
been the industry's standard</p>
              </div>
          </div>
          
        </div>
      </div>
      {/* <button type="props.btname" className="btn btn-primary btns">
      Start Quiz</button> */}
      <NavLink to="./Quizchapter" className=" btn btn-primary Next mt-4" >Start Quiz</NavLink>
    </>
  );
};
export default Tutorial;

import React from 'react';

// import './App.css';
//import { NavLink } from 'react-router-dom';

// const numb = document.querySelector(".number");
// let counter = 0;
// setInterval(() => {
//   if(counter == 100 ){
//     clearInterval();
//   }else{
//     counter+=1;
//     numb.textContent = counter + "%";
//   }
// }, 80);



const Result = (props) => {
      return (
       <>
       {/* <h4 className="main-color result">Result</h4>
<h1 className="test">Congratulations! you passed the test.</h1>
<div className="container my-5">
 <div className="row d-flex justify-content-center ">
  <div className="col-md-4 my-5 bar">
 <div className="circular">
            <div className="inner"></div>
            <div className="outer"></div>
            <div className="numb">
               0%
            </div>
            <div className="circle">
               <div className="dot">
                  <span></span>
               </div>
               <div className="bar left">
                  <div className="progress"></div>
               </div>
               <div className="bar right">
                  <div className="progress"></div>
               </div>
            </div>
         </div>  
  </div>
  <div className="col-md-5 text-center">
    <h3 className="text-muted">Correct</h3>
    <span className="display-2 font-weight-bold" id="marks">7</span>
    <span className="display-2 font-weight-bold">/</span>
    <span className="display-2 font-weight-bold">10</span>
  </div>
 </div> 
</div>
<div className="container maximum-width p-4 my-5">
  <div className="row py-3 px-2 d-flex justify-content-between">
    <div className="col-md-4 ">
      <h3 className="text-muted">Out of</h3>
      <h3>10</h3>
    </div>
    <div className="col-md-4 ">
      <h3 className="text-muted">Date</h3>
       <h3 id="date"></h3>
    </div>
  </div>
  <br/>
   <div className="row py-3 px-2 d-flex justify-content-between">
    <div className="col-md-4 ">
      <h3 className="text-muted">Passing score</h3>
      <h3 id="#">50%</h3>
    </div>
    <div className="col-md-4 ">
      <h3 className="text-muted">Transcript id</h3>
       <h3 id="#">544587</h3>
    </div>
  </div>
</div> */}

       <div className="container">
       <div className="reslt">
       <h2 className="mt-3">Result</h2>
       </div>
       <div className="container">
       <h4 className="score">Congratulations! you passed the test.</h4>
       <br />
    <div className="row">
       <div className="circular">
  <div className="inner"></div>
  <div className="number">100%</div>
  <div className="circle">
     <div className="bar left">
        <div className="progress"></div>
     </div>
     <div className="bar right">
        <div className="progress"></div>
     </div>
   </div>
</div>
<div className="col-md-5 text-center">
    <h3 className="text-muted">Correct</h3>
    <span className="display-2 font-weight-bold" id="marks">7</span>
    <span className="display-2 font-weight-bold">/</span>
    <span className="display-2 font-weight-bold">10</span>
  </div>
</div>


       
       {/* <img src="score.png" alt="not found" className="score2" /> */}
       </div>
       <div className="container mt-5 lastbox">
             <div className="row">
                   <div className="col-6 p-5">
                         <p>Out Of</p><h4>10</h4>
                         &nbsp;
                         &nbsp;
                         <p>Passing score</p><h4>50%</h4>
                   </div>
                   
                   <div className="col-6 p-3 marg">
                         <p>Date</p><h4>May 21,2021</h4>
                         &nbsp;
                         &nbsp;
                         <p>Transcript Id</p><h4>544587</h4>
                   </div>
             </div>
       </div>

       </div> 
            {/* <NavLink to={props.visit2} className="btn btn-secondary">
            {props.btprevoius}</NavLink>
            <NavLink to={props.visit} className="btn btn-primary Next">
            {props.btname}</NavLink>  */}
      
       </>
      );

}
export default Result;
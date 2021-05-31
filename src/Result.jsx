import React from 'react';
 
const Result = () => {
      return (
       <>
       <div className="container">
       <div className="reslt">
       <h2 className="mt-3">Result</h2>
       </div>
       <div className="container">
       <h4 className="score">Congratulations! you passed the test.</h4>
       <br />
       <img src="score.png" alt="not found" className="score2" />
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
      
       </>
      );

}
export default Result;
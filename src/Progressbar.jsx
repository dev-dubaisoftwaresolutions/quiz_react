import React from 'react';

const Progressbar = () => {
      return (
            <>

      <div className="container ">            
<h3 className= "d-flex justify-content-start mt-5">Overall Progress
</h3>
&nbsp;
</div>
<div className="container progres contain" style = {{background: "white"}}>
            <div className = "row">
                  <div className="col">
<h3>Chapter 1</h3>
<div className="progress">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h3>Chapter 2</h3>
<div className="progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h3>Chapter 3</h3>
<div className="progress">
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>


                  </div>
            </div>
      </div>
            </>
      );
};

export default Progressbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
// import Basic from './Basic';
const Common6 = (props) => {
      return (
       <>
       <div className="container mt-2">
            
            <h3>Quiz(Chapter 1 with Ques6)</h3>
            <br/>
            <img src="line2.png" alt="not found"/>
            <div className="container  mt-5 box">
            <h4 className="text2 p-5">As a salesperson, what do you sell first on a sale call?</h4>

            <section><div class="form-check form-check-inline ml-5">
      
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">The great service or product you are selling</label>
            </div>
            <br/>
            <br/>
            <div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">The reasonable price for the product or service</label>
            </div>
            <br/>
            <br/>
            <div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">Your personality, your style, youtself</label>
            </div>
            <br/>
            <br/>
            <div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">The fine reputation of the company you work for</label>
            </div>
            <br/>
            <br/>
            </section>

            {/* <p className= "ml-5"><img src="circle.png" alt="not found" /> The great service or product you are selling</p>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />The reasonable price for the product or service</p>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />Your personality, your style, youtself</p>
            <p className= "ml-5"  ><img src="circle.png" alt="not found"/>The fine reputation of the company you work for</p> */}
            {/* <button type="button" className="btn btn-secondary ">Previous</button>  */}
            <NavLink to={props.visit2} className="btn btn-secondary">
            {props.btprevoius}</NavLink>
            <NavLink to={props.visit} className="btn btn-primary Next">
            {props.btname}</NavLink> 
            </div>
            </div>
       {/* <div className="container">
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
       </div> */}
      
       </>
      );

}
export default Common6;
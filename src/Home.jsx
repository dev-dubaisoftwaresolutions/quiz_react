import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import Cards from './Cards';
import  Progressbar from './Progressbar';
// import Question2 from './Question2';
// import Tutorial from "./Tutorial";
// import Quizchapter from './Quizchapter';
import './App.css';
// import { NavLink } from 'react-router-dom';
// import Result from './Result';



const Home = () => {
      return (
            <>
          
           <Navigation/>
           <Cards/>
           <Progressbar/>
           {/* <Question2/> */}

           {/* <Tutorial/> */}
           {/* <NavLink to={props.visit} className="btn btn-primary Next">
            {props.btname}</NavLink> */}
           {/*<Quizchapter/>
           <Result/> */}
           </>
      );
};

export default Home;
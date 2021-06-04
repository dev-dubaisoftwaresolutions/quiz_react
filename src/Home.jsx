import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import Cards from './Cards';
import './App.css';



const Home = () => {
      return (
            <>
          
           <Navigation/>
           <Cards/>
           </>
      );
};

export default Home;
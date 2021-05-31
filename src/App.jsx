import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import Cards from './Cards';
import  Progressbar from './Progressbar';
import Tutorial from "./Tutorial";
import Quizchapter from './Quizchapter';
// import Question2main from './Question2main';
import './App.css';
import Result from './Result';
import Home from "./Home";
import { BrowserRouter, Switch , Route, Redirect} from 'react-router-dom'; 
import Question2 from './Question2';


const App = () => {
      return (
            <>
          <BrowserRouter>
           
           <Route path="/Home" component={Home}/>
           <Switch>
           <Route path="/Navigation" component={Navigation}/>
           <Route path="/Cards" component={Cards}/>
           <Route path="/Progressbar" component={Progressbar}/>
           <Route path="/Tutorial" component={Tutorial}/>
           <Route path="/Quizchapter" component={Quizchapter}/>
           {/* <Route path="/Question2main" component={Question2main}/> */}
           <Route path ="/Question2" component={Question2}/>
           <Route path="/Result" component={Result}/>
           <Redirect to="/Home"/>

           </Switch>
           </BrowserRouter>
          
            </>
      );
};

export default App;
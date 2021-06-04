import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import Cards from './Cards';
import Progressbar from './Progressbar';
import Tutorial from "./Tutorial";
import Quizchapter from './Quizchapter';
import Quizchapter2 from './Quizchapter2';
import Quizquestion3 from './Quizquestion3';
import Quizquestion4 from './Quizquestion4';
import Quizquestion5 from './Quizquestion5';
import Quizquestion6 from './Quizquestion6';
import Result from './Result';
import './App.css';
import Home from "./Home";
import { BrowserRouter, Switch , Route, Redirect} from 'react-router-dom'; 



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
           <Route path="/Quizchapter2" component={Quizchapter2}/>
           <Route path="/Quizquestion3" component={Quizquestion3}/>
           <Route path="/Quizquestion4" component={Quizquestion4}/>
           <Route path="/Quizquestion5" component={Quizquestion5}/>
           <Route path="/Quizquestion6" component={Quizquestion6}/>
           <Route path="/Result" component={Result}/>
           <Redirect to="/Home"/>
           
           </Switch>
           </BrowserRouter>
          
            </>
      );
};

export default App;
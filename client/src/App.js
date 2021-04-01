import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import './App.css';
import DonorAccount from './components/donorDetails/donorAccount'
import Statistics from './components/donorDetails/statistics';
import Learn from './components/donorDetails/Learn';
import Selections from './components/donorDetails/selections';

function App() {
  return (
    <Router>
      <div >
        <DonorAccount />
      </div>

      {/* <Route exact path="/" component={Home}></Route> */}
      <Route path="/Selections" component={Selections} />
      <Route path="/statistics" component={Statistics} />
      <Route exact path="/learn" component={Learn} />
    </Router>

  );
}

export default App;

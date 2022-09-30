import logo from './logo.svg';
import './App.css';
import log from './log';
import moe from './dld';
import star from './stary';
import React from 'react';
function App() {
  return (
    <>
    <Router>
    <Route path='/' component={star} />
        <Route path='/main' component={log} />
        <Route path='/profile' component={moe} />
    </Router>
    
    </>
      
  );
}

export default App;

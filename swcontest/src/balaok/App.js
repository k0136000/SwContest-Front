
import './App.css';
import log from './log';
import moe from './dld';
import star from './stary';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path='/' component={star} />
    <switch>
        <Route path='/main' component={log} />
        <Route path='/profile' component={moe} />
        </switch>
    </BrowserRouter>
    </>
      
  );
}

export default App;

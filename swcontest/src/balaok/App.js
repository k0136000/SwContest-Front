
import './App.css';
import log from './coin/log';
import moe from './coin/dld';
import star from './coin/start';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' component={star} />
        <Route path='/main' component={log} />
        <Route path='/profile' component={moe} />
      </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;

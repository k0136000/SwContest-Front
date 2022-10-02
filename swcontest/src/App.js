import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import change_Upload from "./Pages/change_Upload";
import change_progress from "./Pages/change_progress";
import musicSheet_Upload from "./Pages/musicSheet_Upload";

function App() {
  return (
    <Router>
      <Route path='/' element= {change_Upload}/>
      <Route path='/change_progress' element={change_progress} />
      <Route path='/musicSheet_Upload' element= {musicSheet_Upload}/>
    </Router>
  );
}

export default App;

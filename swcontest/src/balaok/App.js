import './App.css';
import log from './coin/log';
import moe from './coin/dld';
import star from './coin/start';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch,} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
        <Route path='/star'  component={star}  />
        <Route path='/log' component={log} />
        <Route path='/dld' component={moe} />
      </Switch>
      
    </BrowserRouter>
    </>
      
  );
}

export default App;

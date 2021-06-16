import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <BrowserRouter>
        <Homepage />
    </BrowserRouter>
        
  );
}

export default App;

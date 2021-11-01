import React from "react";
import { Container } from "@mui/material";
import {BrowserRouter,Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/header/Header.js';
import SimpleBottomNavigation from './components/Mainnav.js'

import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";



function App() { 
  return (
    
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>
      <Switch>
        {/* <Route path="/" component={Trending} exact /> */}
        <Route path='/' component ={Trending} exact/>
        <Route path='/Movies' component ={Movies}  />
        <Route path='/Series' component ={Series} />
        <Route path='/Search' component ={Search} />
      </Switch>
    </Container>
    </div>
    
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;

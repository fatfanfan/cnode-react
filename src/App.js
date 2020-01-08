import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


import Header from "./components/Header";
import ListView from "./components/ListView.js";
import Footer from "./components/Footer";
import Artical from "./components/Artical";
import SiderBar from "./components/SiderBar";

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}


        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/artical/:id">
          <Artical  />
        </Route>
        <Route path="/user/:username">
          <SiderBar />
        </Route>
        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Header />
          <ListView/>
          <Footer/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;

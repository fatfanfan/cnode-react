import React, { useState, useEffect } from 'react';
import Request from '../request/http'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <div style={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
      <Link to="/">
        <img style={ { width: "150px", height: "40px" } }
          src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" />
      </Link>
      <div >
        <Link to="/" >首页</Link>
      </div>
    </div>
  )
}

export default Header

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
    <h1>Header</h1>
  )
}

export default Header

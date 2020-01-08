import React, { useState, useEffect } from 'react';
import Request from '../request/http'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function SiderBar(props) {
  let {username} = useParams()
  console.log(username)

  useEffect(()=> {
    Request.getUserInfo(username)
      .then(res => {
        console.log(res)
      })
  },[])


  return (
    <Link to="/"><h1>siderbar</h1></Link>

  )
}


export default SiderBar

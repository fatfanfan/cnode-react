import React, { useState, useEffect } from 'react';
import Request from '../request/http'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Artical(props) {
  let {id} = useParams()
  let [author, setAuthor] = useState({})

  useEffect(()=> {
    Request.getDetail(id)
      .then(res => {
        console.log(res)
        setAuthor(res.data.data.author)
      })
  },[])

  return (
    <h1>
      <Link to="/">Home</Link>
      <Link to={"/user/" + author.loginname}>SiderBar</Link>
    </h1>
  )
}
export default Artical

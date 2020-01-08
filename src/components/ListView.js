import React, { useState, useEffect } from 'react';
import Request from '../request/http'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function ListView(props) {
  const [count, setCount] = useState([])
  useEffect(
    () => {
      Request.getTopics()
        .then(res => {
          console.log(res);
          setCount(res.data.data)
        })
    }
    , [])
  const getDetail = (id) => {
    Request.getDetail(id)
      .then(res => {
        console.log(res);
      })
  }

  const getUserInfo = (username) => {
    Request.getUserInfo(username)
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div >
      { count.map((item, index) =>
        <div key={ item.id } >
          <Link to={"/artical/" + item.id} >{item.title}</Link>
          <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
        </div>
      ) }
    </div>
  )
}

export default ListView;

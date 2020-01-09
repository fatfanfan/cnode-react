import React, { useState, useEffect } from 'react';
import Request from '../request/http'

import { Button } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function ListItem(props) {
  return (
    <div key={ props.item.id } >
      <Link to={ `/user/${props.item.author.loginname}` }
        style={ { color: "black", padding: "0 10px" } } >
        <img src={ props.item.author.avatar_url }
          style={ { width: "30px", height: "30px", borderRadius: "3px" } }
          alt={ props.item.author.loginname } />
        { props.item.author.loginname }
      </Link>

      <span style={ { paddingRight: "10px" } }>{ props.item.reply_count }/{ props.item.visit_count }</span>
      
      <Link to={ `/artical/${props.item.id}` }
        style={ { color: "black" } } >
        { props.item.title }
      </Link>
    </div>
  )
}

function Types(props) {
  let [type]
}



export default ListItem

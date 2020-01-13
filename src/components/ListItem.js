import React, {useState, useEffect} from 'react';
import Request from '../request/http'

import "../styles/listItem.less"
import {
  Link
} from "react-router-dom";

import Timer from "./Timer"
import Types from "./Types"






function ListItem(props) {


  return <div className="listItem-container" key={props.item.id}>
    <Link className="avatar_wrapper" to={`/user/${props.item.author.loginname}`}>
      <img className="avatar"
           src={props.item.author.avatar_url}
           alt=""/>
    </Link>

    <Types item={ props.item }/>
    <span style={{paddingRight: "10px"}}>
        {props.item.reply_count}/{props.item.visit_count}
      </span>
    <Link className="title" to={`/artical/${props.item.id}`} style={{color: "black"}}>
      {props.item.title}
    </Link>
    <div style={{marginLeft:"auto",marginRight:"5px", minWidth:"50px"}}>
      {Timer(props.item.last_reply_at)}
    </div>
  </div>
}


export default ListItem;

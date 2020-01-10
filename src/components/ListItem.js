import React, {useState, useEffect} from 'react';
import Request from '../request/http'

import "../styles/listItem.less"
import {
  Link
} from "react-router-dom";

function Types(props) {
  const whichTags = () => {
    if (props.item.top || props.item.good) {
      return "tags"
    }else {
      return "gray tags"
    }
  }

  if (props.item.top) {
    return (
      <div className={whichTags()}>置顶</div>
    )
  }
  else if (props.item.good) {
    return (
      <div className={whichTags()}>精华</div>
    )
  }
  else if (props.item.tab === 'ask') {
    return <span className={whichTags()}>问答</span>
  }
  else if (props.item.tab === 'share') {
    return <div className={whichTags()}>分享</div>
  }
  else {
    return <div className={whichTags()}>招聘</div>
  }
}





function ListItem(props) {

  const Timer = (props) => {
    let str = props.item.last_reply_at || ""
    if (!str) return ''
    let date = new Date(str)
    let time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
      return ''
    } else if ((time / 1000 < 30)) {
      return '刚刚'
    } else if (time / 1000 < 60) {
      return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
      return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
      return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000) + '月前'
    } else {
      return parseInt(time / 31536000000) + '年前'
    }
  }
  return <div className="listItem-container" key={props.item.id}>
    <Link className="avatar_wrapper" to={`/user/${props.item.author.loginname}`}>
      <img className="avatar" src={props.item.author.avatar_url}
           alt={props.item.author.loginname}/>
    </Link>

    <Types item={ props.item }/>
    <span style={{paddingRight: "10px"}}>
        {props.item.reply_count}/{props.item.visit_count}
      </span>
    <Link to={`/artical/${props.item.id}`} style={{color: "black"}}>
      {props.item.title}
    </Link>
    <div style={{marginLeft:"auto",marginRight:"20px"}}>
      {Timer(props)}
    </div>
  </div>
}


export default ListItem;

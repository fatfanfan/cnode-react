import React, { useState, useEffect } from 'react';
import Request from '../request/http'
import {Link ,useParams} from "react-router-dom";
import {Row, Col} from "antd"
import "../styles/markdown.css"
import "../styles/artical.less"
import Types from "./Types"


function Artical(props) {
  let {id} = useParams()
  let [artical, setArtical] = useState({})
  let [author, setAuthor] = useState({})
  useEffect(()=> {
    Request.getDetail(id)
      .then(res => {
        setArtical(res.data.data)
        Request.getUserInfo(res.data.data.author.loginname)
          .then(res => {
            console.log(res.data.data)
            setAuthor(res.data.data)
          })
      })
  },[])


  return (
    <div className="artical-container" >
      <Row  style={{margin:" 0 10px"}}>
        <Col span={24}  >
          <Row style={{background:'white',padding:"10px"}}>
            <Col span={24}  style={{borderBottom:"1px solid #e1e1e1"}}>
              <div  className="artical-header">
                <Types item={artical}>
                </Types>
                  <h1 style={{margin: "0"}}>
                    {artical.title}
                  </h1>
              </div>
              <div>
                <Link style={{display:"flex",justifyContent:"flex-start",paddingBottom: "10px",flexGrow: "0"}} to={`/user/${author.loginname}`}>
                    <img style={{width:"30px", height:"30px"}}
                         src={author.avatar_url}
                         alt={author.loginame}/>
                  <span className="userInfo" >
                    {author.loginname}
                  </span>
                </Link>
                <Row>
                  <Col xs={12}  sm={12} md={4}>浏览量 {artical.visit_count}</Col>
                  <Col xs={12} sm={12} md={4}>来自 {artical.tab}</Col>
                </Row>
              </div>
            </Col>
            <Col span={24} >
              <div className="markdown-body" dangerouslySetInnerHTML={{__html: artical.content}}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Artical

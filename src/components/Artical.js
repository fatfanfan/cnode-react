import React, { useState, useEffect } from 'react';
import Request from '../request/http'
import {Link ,useParams} from "react-router-dom";
import {Row, Col} from "antd"
import "../styles/markdown.css"
import "../styles/artical.less"



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
      <Row gutter={20} style={{margin:" 0 10px"}}>
        <Col  xs={24}   sm={18}  style={{padding:"0"}}>
          <Row style={{background:'white',padding:"10px"}}>
            <Col span={24}  style={{borderBottom:"1px solid #e1e1e1"}}>
              <h1>{artical.title}</h1>
              <div>
                <span>浏览量 {artical.visit_count}</span>
                <span>来自 {artical.tab}</span>
              </div>
            </Col>
            <Col span={24} >
              <div className="markdown-body" dangerouslySetInnerHTML={{__html: artical.content}}/>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={6}    >
          <Row style={{background:"white"}}>
            <Col span={24}>
              <h2>个人信息</h2>
            </Col>
            <Col span={24}>
              <Link to={`/user/${author.loginname}`}>
                <div className="userInfo" >
                  作者: {author.loginname}
                  <img src={author.avatar_url} alt={author.loginame}/>
                </div>
              </Link>
              <div>
                积分:  {author.score}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Artical

import React, {useState, useEffect} from 'react';
import Request from '../request/http'
import {Link, useParams, useHistory} from "react-router-dom";
import {Row, Col} from "antd"
import "../styles/markdown.css"
import "../styles/artical.less"
import Types from "./Types"


function Artical(props) {
  let {id} = useParams()
  let history = useHistory()
  let [artical, setArtical] = useState({})
  let [author, setAuthor] = useState({})
  useEffect(() => {
    Request.getDetail(id)
      .then(res => {
        setArtical(res.data.data)
        Request.getUserInfo(res.data.data.author.loginname)
          .then(res => {
            console.log(res.data.data)
            setAuthor(res.data.data)
          })
      })
  }, [id])

  const toUser = (loginname) => {
    history.push(`/user/${loginname}`)
  }


  return (
    <div className="artical-container">
      <Row style={{margin: " 0 10px"}}>
        <Col span={24}>
          <Row style={{background: 'white', padding: "10px"}}>
            <Col span={24} style={{borderBottom: "1px solid #e1e1e1"}}>
              <div className="artical-header">
                <Types item={artical}>
                </Types>
                <h1 style={{margin: "0"}}>
                  {artical.title}
                </h1>
              </div>
              <span className="img-wrapper" onClick={()=>toUser(author.loginname)}>
                <img
                  src={author.avatar_url}
                  alt=""/>
                {author.loginname}
              </span>


              <div>浏览量 {artical.visit_count}</div>
            </Col>
            <Col span={24}>
              <div className="markdown-body"
                   dangerouslySetInnerHTML={{__html: artical.content}}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Artical

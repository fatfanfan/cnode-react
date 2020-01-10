import React, {useState, useEffect} from 'react';
import Request from '../request/http'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Tabs}  from "antd"
import ListItem from "./ListItem"
import "../styles/listview.less"


function ListView(props) {
  const [count, setCount] = useState([])
  const tabs = ["全部", "精华", "分享", "问答" ,"招聘"]
  const { TabPane } = Tabs;
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
  const callback = (key)=>{
    console.log(key);
  }
  return (
    <div className="listview-container">
      <Tabs style={{background:"#f6f6f6"}} defaultActiveKey="1" onChange={callback} >
        {
          tabs.map((tab,index)=>
            <TabPane tab={tab} key={index}>
              {count.map((item, index) =>
                <div key={item.id}>
                  <ListItem item={item}/>
                </div>
              )}
            </TabPane>
          )

        }

      </Tabs>

    </div>
  )
}

export default ListView;

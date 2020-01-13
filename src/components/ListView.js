import React, {useState, useEffect} from 'react';
import Request from '../request/http'

import {Tabs, Spin, Pagination} from "antd"
import ListItem from "./ListItem"
import "../styles/listview.less"
const {TabPane} = Tabs;

function ListView(props) {
  const [count, setCount] = useState([])
  const [tab, setTab] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const tabs = ["全部", "精华", "分享", "问答", "招聘"]

  useEffect(
    () => {
      if(tab){
        handlePageChange({page: currentPage, tab, limit: 20})
      }else {
        handlePageChange({page: currentPage, limit: 20})
      }
    },
    [currentPage, tab]
  )



  const handlePageChange = (data) => {
    Request.getTopics(data)
      .then(res => {
        setCount(res.data.data)
      })
  }

  const handleCurrentChange = (page)=>{
    setCurrentPage(page)
  }


  const handleTabChange = (key) => {
    switch (key) {
      case "1":
        setTab("good")
        setCurrentPage(1)
        break
      case "2":
        setTab("share")
        setCurrentPage(1)
        break
      case "3":
        setTab("ask")
        setCurrentPage(1)
        break
      case "4":
        setTab("job")
        setCurrentPage(1)
        break
      default:
        setTab("")
        setCurrentPage(1)
    }
  }
  if (!count.length) {
    return (
      <div className="listview-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Spin size="large"/>
      </div>
    )
  }
  return (
    <div className="listview-container">
      <Tabs style={{background: "#f6f6f6"}} defaultActiveKey="0" onChange={handleTabChange}>
        {
          tabs.map((tab, index) =>
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
      <Pagination className="list-pagination"
                  defaultCurrent={1}
                  current={currentPage}
                  total={500}
                  onChange={handleCurrentChange} />
    </div>
  )
}

export default ListView;

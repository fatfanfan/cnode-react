import React, { useState, useEffect } from 'react';
import Request from '../request/http'

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
        <div key={ item.id } onClick={ () => getDetail(item.id) }>
          <span>{ item.title }</span>
          <span onClick={ () => getUserInfo(item.author.loginname) }>{ item.author.loginname }</span>
        </div>
      ) }
    </div>
  )
}

export default ListView;
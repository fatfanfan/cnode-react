import React from "react"


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
      <span className={whichTags()}>置顶</span>
    )
  }
  else if (props.item.good) {
    return (
      <span className={whichTags()}>精华</span>
    )
  }
  else if (props.item.tab === 'ask') {
    return <span className={whichTags()}>问答</span>
  }
  else if (props.item.tab === 'share') {
    return <span className={whichTags()}>分享</span>
  }
  else {
    return <span className={whichTags()}>招聘</span>
  }
}


export default Types;

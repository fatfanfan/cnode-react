import axios from 'axios'

axios.defaults.baseURL = "https://cnodejs.org/api/v1"


let Url = {
  getTopics: "/topics",
  getDetail: "/topic/",
  getUserInfo: "/user/"
}

const Request = {
  getTopics(data) {
    return new Promise((resolve, reject) => {
      axios.get(Url.getTopics, {
        params: data
      })
        .then(res => {
          resolve(res)
        })
    })
  },
  getDetail(id) {
    return new Promise((resolve, reject) => {
      axios.get(Url.getDetail + id)
        .then(res => {
          resolve(res)
        })
    })
  },
  getUserInfo(username) {
    return new Promise((resolve, reject) => {
      axios.get(Url.getUserInfo + username)
        .then(res => {
          resolve(res)
        })
    })
  }
}

export default Request;

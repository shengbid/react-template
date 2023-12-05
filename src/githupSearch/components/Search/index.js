import React, { Component } from "react"
import axios from "axios"
import PubSub from "pubsub-js"

export default class Search extends Component {
  // 搜索
  search = async () => {
    const {
      keyWordElement: { value },
    } = this
    // const { getCustmerList } = this.props
    console.log(value)
    // 发送网络请求
    axios.get(`/api1/search/users2?q=${value}`).then(
      (response) => {
        const custmerList = response.data.items
        if (custmerList) {
          // getCustmerList(custmerList)
          PubSub.publish("getMessage", custmerList)
        }
      },
      (err) => {
        console.log("err")
      }
    )
    // fetch("/api1/search/users2")
    //   .then(
    //     (response) => {
    //       console.log(response)
    //       return response.json()
    //     },
    //     (error) => {
    //       console.log(error)
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response)
    //   })
    try {
      const response = await fetch("/api1/search/users2")
      const data = await response.json()
      console.log(data)
    } catch (error) {}
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}

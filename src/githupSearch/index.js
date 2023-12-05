import React, { Component } from "react"
import "./index.css"
import Header from "./components/Search"
import List from "./components/List"

export default class Search extends Component {
  // state = {
  //   custmerList: [],
  // }
  // getCustmerList = (data) => {
  //   this.setState({
  //     custmerList: data,
  //   })
  // }
  render() {
    // const { custmerList } = this.state
    return (
      <div className="container">
        {/* <Header getCustmerList={this.getCustmerList} />
        <List custmerList={custmerList} /> */}
        <Header />
        <List />
      </div>
    )
  }
}

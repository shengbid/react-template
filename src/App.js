import React, { Component } from "react"
import axios from "axios"
import "./bootstrap.css"
// import Search from "./githupSearch/index"
import Link from "./RouterComponents/Link/index"

class App extends Component {
  getStudent = () => {
    axios.get("http://localhost:3000/api1/search/users2").then(
      (response) => {
        console.log(response.data)
      },
      (err) => {
        console.log("err")
      }
    )
  }

  render() {
    return (
      <div className="App">
        {/* <div>
          <button onClick={this.getStudent}>点我获取数据</button>
        </div> */}
        {/* <Search /> */}
        <Link />
      </div>
    )
  }
}

export default App

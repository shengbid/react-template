import React, { Component } from "react"
import PubSub from "pubsub-js"

export default class Search extends Component {
  state = {
    custmerList: [],
  }
  componentDidMount() {
    PubSub.subscribe("getMessage", (_, data) => {
      // console.log(data)
      this.setState({ custmerList: data })
    })
  }
  render() {
    const { custmerList } = this.state

    return (
      <div className="row">
        {custmerList &&
          custmerList.map((item) => (
            <div key={item.id} className="card">
              <a href={item.html_url} target="_blank">
                <img
                  alt={item.avatar_url}
                  src={item.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          ))}
      </div>
    )
  }
}

import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class MyNavLink extends Component {
  render() {
    // 标签体内容是一个特殊属性children
    // const { children } = this.props
    return <NavLink className="list-group-item" {...this.props} />
  }
}

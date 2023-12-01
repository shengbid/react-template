import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Item extends Component {
  static propTypes = {
    changeCheck: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  state = { mouse: false }
  // 鼠标移入移出
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      })
    }
  }
  // 切换勾选
  handleCheck = (id) => {
    return (e) => {
      this.props.changeCheck({ id, done: e.target.checked })
    }
  }
  // 删除
  handleDelete = (id) => {
    this.props.deleteTodo(id)
  }
  render() {
    const { name, done, id } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    )
  }
}

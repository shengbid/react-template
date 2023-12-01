import React, { Component } from "react"
import { nanoid } from "nanoid"
import PropTypes from "prop-types"

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (e) => {
    const { target, keyCode } = e
    if (keyCode !== 13) return

    this.props.addTodo({
      id: nanoid(),
      name: target.value,
      done: false,
    })
  }
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}

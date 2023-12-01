import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    const { todos, deleteDoneTodos, selectAll } = this.props
    const doneCount = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0)
    }, 0)
    const totalCount = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === totalCount && totalCount > 0}
            onChange={(e) => selectAll(e.target.checked)}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={deleteDoneTodos}>
          清除已完成任务
        </button>
      </div>
    )
  }
}

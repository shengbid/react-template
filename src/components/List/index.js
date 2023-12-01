import React, { Component } from "react"
import Item from "../Item"

export default class List extends Component {
  render() {
    const { todos, changeCheck, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((item) => (
          <Item
            changeCheck={changeCheck}
            key={item.id}
            {...item}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    )
  }
}

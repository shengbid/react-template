import React, { Component } from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

import "./app.css"

class TodoList extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
    ],
  }
  addTodo = (item) => {
    const { todos } = this.state
    const newTodos = [item, ...todos]
    this.setState({
      todos: newTodos,
    })
  }
  // 删除
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    this.setState({
      todos: newTodos,
    })
  }
  changeCheck = ({ id, done }) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      const newItem = { ...item }
      if (item.id === id) {
        newItem.done = done
      }
      return newItem
    })
    this.setState({
      todos: newTodos,
    })
  }
  // 删除已完成任务
  deleteDoneTodos = () => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => !item.done)
    this.setState({
      todos: newTodos,
    })
  }
  // 全选事件
  selectAll = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      const newItem = { ...item, done }

      return newItem
    })
    this.setState({
      todos: newTodos,
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="TodoList">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              changeCheck={this.changeCheck}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={todos}
              selectAll={this.selectAll}
              deleteDoneTodos={this.deleteDoneTodos}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList

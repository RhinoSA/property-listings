import React, { Component } from "react";
import TodoItem from "./todoitem";
import TodoItemDetails from "./todoitemdetails";

const todoData = [
  {
    id: 1,
    title: "Learn JavaScript",
    completed: "",
    description: "This is a paragraph of text giving an outline of the task.",
    price: 70.5
  },
  {
    id: 2,
    title: "Learn React",
    completed: "",
    description: "This is a paragraph of text giving an outline of the task.",
    price: 50.5
  },
  {
    id: 3,
    title: "Learn PHP",
    completed: "",
    description: "This is a paragraph of text giving an outline of the task.",
    price: 60.5
  }
];

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  handleChangeTwo(id) {
    this.setState(prevState => {
      const updatedTodosTwo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodosTwo
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    const todoItemDetails = this.state.todos.map(item => (
      <TodoItemDetails
        key={item.id}
        item={item}
        handleChangeTwo={this.handleChangeTwo}
      />
    ));

    const totalDone = todoData.filter(c => c.completed).length;
    const totalItems = todoData.filter(c => c.id).length;
    const priceTotalCompleted = todoData
      .filter(c => c.completed !== "checked")
      .reduce((sum, i) => (sum += i.price), 0);
    const priceTotalIncomplete = todoData
      .filter(c => c.completed)
      .reduce((sum, i) => (sum += i.price), 0);
    const priceTotal = priceTotalCompleted - priceTotalIncomplete;

    return (
      <React.Fragment>
        <div className="row">
          <div className="todo-list col-md-3">
            <h4>
              Menu{" "}
              <span
                style={{ fontSize: 12, position: "relative", top: -3 }}
                className="badge badge-warning"
              >
                {totalDone} | {totalItems}
              </span>
            </h4>
            {todoItems}
            <p style={{ marginTop: 15 }}>
              Total:&nbsp;
              {priceTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </p>
          </div>
          <div className="todo-list-details col-md-9">
            {todoItemDetails}
            {totalItems === totalDone ? (
              <React.Fragment>
                <h4>Tasks completed!</h4>
                <p>You can now take a rest.</p>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoList;

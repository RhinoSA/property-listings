import React, { Component } from "react";
import { TodoBanner } from "./todobanner";
import { TodoCreator } from "./todocreator";
import { TodoRow } from "./todorow";
import { VisibilityControl } from "./visibilitycontrol";
import Title from "../../modules/title";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Andrew",
      todoItems: [
        { id: 1, action: "Buy Flowers", done: false },
        { id: 2, action: "Get Shoes", done: false },
        { id: 3, action: "Collect Tickets", done: true },
        { id: 4, action: "Call Joe", done: false }
      ],
      showCompleted: true
    };
  }

  deleteTodo = id => {
    console.log(id);
    let todoItems = this.state.todoItems.filter(user => {
      return user.id !== id;
    });
    this.setState({
      todoItems: todoItems
    });
  };

  changeStateData = () => {
    this.setState({
      username: this.state.username === "Andrew" ? "Bob" : "Andrew"
    });
  };

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = task => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }]
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  };

  toggleTodo = todo =>
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  todoTableRows = doneValue =>
    this.state.todoItems
      .filter(item => item.done === doneValue)
      .map(item => (
        <TodoRow
          key={item.action}
          item={item}
          id={item.id}
          callback={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      ));

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "Andrew",
            todoItems: [
              { id: 1, action: "Buy Flowers", done: false },
              { id: 2, action: "Get Shoes", done: false },
              { id: 3, action: "Collect Tickets", done: true },
              { id: 4, action: "Call Joe", done: false }
            ],
            showCompleted: true
          }
    );
  };

  render = () => (
    <div className="container">
      <Title title="Todo List" />
      <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
      <div>
        <TodoCreator
          callback={this.createNewTodo}
          onCLick={this.changeStateData}
        />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th className="text-right">Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows(false)}</tbody>
        </table>

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={this.state.showCompleted}
            callback={checked => this.setState({ showCompleted: checked })}
          />
        </div>

        {this.state.showCompleted && (
          <table className="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th>Description</th>
                <th className="text-right">Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

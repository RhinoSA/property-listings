import React, { Component } from "react";
import Joke from "./joke";

class Jokes extends Component {
  state = {
    listJokesUnsorted: [
      {
        id: 1,
        question: "This is the first joke which asks a question.",
        answer: "This is the answer to the first question."
      },
      {
        id: 2,
        question: "",
        answer:
          "This is the second joke without a question and renders differently to the other jokes."
      },
      {
        id: 3,
        question:
          "This is the second joke without a question and renders differently to the other jokes.",
        answer:
          "This is the second joke without a question and renders differently to the other jokes."
      }
    ]
  };

  render() {
    //let jokes = this.state.listJokesUnsorted.sort((a, b) =>
    //  a.question > b.question ? 1 : -1
    //);

    let jokes = this.state.listJokesUnsorted;

    function sorttheList() {
      return (
        <div jokes={jokes}>
          {jokes.map(rows => (
            <Joke key={rows.id} question={rows.question} answer={rows.answer} />
          ))}
        </div>
      );
    }

    return <React.Fragment>{sorttheList()}</React.Fragment>;
  }
}

export default Jokes;

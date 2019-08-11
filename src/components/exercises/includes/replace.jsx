import React, { Component } from "react";

class Replace extends Component {
  state = {};

  replaceWord = (word, newWord) => {
    let sentence = "This is a sentence with the word Andrew in it.";
    return sentence.replace(word, newWord);
  };

  render() {
    return (
      <React.Fragment>
        <h2>Using replace(a,b)</h2>
        <p>
          This function replaces a word in a string with an alternative word.
        </p>
        <p className="alert alert-secondary">
          replaceWord = (word, newWord) => &#123;
          <br />
          &nbsp;&nbsp;let sentence = "This is a sentence with the word Andrew in
          it.";
          <br />
          &nbsp;&nbsp;return sentence.replace(word, newWord);
          <br />
          &#125;
        </p>
        <h4>The Output:</h4>
        <p>{this.replaceWord("Andrew", "Patrick")}</p>
        <p>
          The name 'Andrew' was replaced with the name 'Patrick' in the above
          sentence.
        </p>
      </React.Fragment>
    );
  }
}

export default Replace;

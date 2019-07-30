import React, { Component } from "react";
import ListItem from "./listitem";

class MappingParts extends Component {
  state = {
    listUnsorted: [
      { id: 1, title: "Peter", job: "Plumber" },
      { id: 2, title: "John", job: "Doctor" },
      { id: 3, title: "Andrew", job: "" }
    ]
  };

  render() {
    let list = this.state.listUnsorted.sort((a, b) =>
      a.title > b.title ? 1 : -1
    );

    function sortList() {
      return (
        <div list={list}>
          {list.map(rows => (
            <ListItem key={rows.id} title={rows.title} id={rows.id} job={rows.job} />
          ))}
        </div>
      );
    }

    return (
      <React.Fragment>
        <h4>List of Names</h4>
        {sortList()}
      </React.Fragment>
    );
  }
}

export default MappingParts;

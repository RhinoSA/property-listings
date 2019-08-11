import React from "react";

export function Table({ names }) {
  if (names.length > 0) {
    return (
      <React.Fragment>
        <table className="table table-striped mt-3">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Letters</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{name.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  } else {
    return <p>There are no names in the list to display.</p>;
  }
}

export default Table;

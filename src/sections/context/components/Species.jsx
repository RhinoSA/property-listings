import React from "react";
import { MammalsContext } from "../context/MammalsContext";
import { Link } from "react-router-dom";

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function Species() {
  return (
    <MammalsContext.Consumer>
      {contextData => (
        <React.Fragment>
          <h4>
            {capitalize(contextData.order)}{" "}
            <span className="small">({contextData.sortedMammals.length})</span>
          </h4>
          <ul className="list-unstyled">
            {contextData.sortedMammals
              .sort((a, b) => a.title.localeCompare(b.title))
              .map(item => {
                return (
                  <li key={item.id}>
                    <Link to={`/animal/${item.slug}`}>{item.title}</Link>
                  </li>
                );
              })}
          </ul>
          <h4>Featured Species</h4>
          <ul className="list-unstyled">
            {contextData.mammals
              .filter(item => item.featured === true)
              .map(item => {
                return (
                  <li key={item.id}>
                    <Link to={`/animal/${item.slug}`}>{item.title}</Link>
                  </li>
                );
              })}
          </ul>
        </React.Fragment>
      )}
    </MammalsContext.Consumer>
  );
}

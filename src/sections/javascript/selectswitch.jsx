import React, { Component } from "react";
import mammals from "../context/data/mammals";
import "../extras/snap/blip-simple.css";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const info = [
  {
    id: 1,
    order: "carnivora",
    desc: "This is the information about the order carnivora."
  },
  {
    id: 2,
    order: "ruminantia",
    desc: "This is the information about the order ruminantia."
  },
  {
    id: 3,
    order: "primata",
    desc: "This is the information about the order primata."
  },
  {
    id: 4,
    order: "perissodactyla",
    desc: "This is the information about the order perissodactyla."
  },
  {
    id: 5,
    order: "tubulidentata",
    desc: "This is the information about the order tubulidentata."
  },
  {
    id: 6,
    order: "pholidota",
    desc: "This is the information about the order pholidota."
  }
];

let orders = getUnique(mammals, "order");

const ordersList = ["Select order...", ...orders];

const options = ordersList.map((item, index) => {
  return (
    <option value={item} key={index}>
      {capitalize(item)}
    </option>
  );
});

class SelectSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "Select order...",
      orderChoice: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Animals</h2>
        <select
          name="order"
          id="order"
          value={this.state.order}
          className="form-control mb-3 mt-3"
          onChange={this.handleChange}
        >
          {options}
        </select>
        {this.state.order === "Select order..." ? null : (
          <React.Fragment>
            <h4>Order Info:</h4>
            {info
              .filter(item => item.order === this.state.order)
              .map(item => {
                return <p key={item.id}>{capitalize(item.desc)}</p>;
              })}
          </React.Fragment>
        )}
        {this.state.order === "Select order..." ? (
          <p>Choose an order in the list to display the animals.</p>
        ) : (
          <React.Fragment>
            <h4>
              Species&nbsp;
              <span className="small">
                (
                {mammals.filter(item => item.order === this.state.order).length}
                ):
              </span>
            </h4>
            <ul className="list-unstyled">
              {mammals
                .filter(item => item.order === this.state.order)
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(item => {
                  return (
                    <li key={item.id}>
                      {capitalize(item.title)}&nbsp;-&nbsp;
                      {capitalize(item.latin)}
                    </li>
                  );
                })}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default SelectSwitch;

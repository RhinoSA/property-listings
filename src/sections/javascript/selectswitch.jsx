import React, { Component } from "react";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const mammals = [
  { id: 1, title: "lion", order: "carnivora", latin: "panthera leo" },
  { id: 2, title: "buffalo", order: "ruminantia", latin: "syncerus caffer" },
  {
    id: 3,
    title: "aardvark",
    order: "tubulidentata",
    latin: "orycteropus afer"
  },
  { id: 4, title: "leopard", order: "carnivora", latin: "panthera pardus" },
  {
    id: 5,
    title: "white rhino",
    order: "perissodactyla",
    latin: "ceratotherium simum"
  },
  { id: 6, title: "pangolin", order: "pholidota", latin: "manis temminckii" },
  {
    id: 7,
    title: "chacma baboon",
    order: "primata",
    latin: "papio cynocephalus ursinus"
  },
  {
    id: 8,
    title: "african civet",
    order: "carnivora",
    latin: "civettictis civetta"
  },
  {
    id: 9,
    title: "black wildebeest",
    order: "ruminantia",
    latin: "connochaetes gnou"
  },
  {
    id: 10,
    title: "common duiker",
    order: "ruminantia",
    latin: "sylvicapra grimmia"
  }
];

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
  state = {
    order: "Select order...",
    orderChoice: ""
  };

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

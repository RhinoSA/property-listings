import React, { Component } from "react";
import "./style.css";
import Card from "./card";

const cardsData = [
  {
    id: 1,
    name: "Greater kudu"
  },
  {
    id: 2,
    name: "Mongoose, javan gold-spotted"
  },
  {
    id: 3,
    name: "Cat, european wild"
  },
  {
    id: 4,
    name: "South American meadowlark (unidentified)"
  },
  {
    id: 5,
    name: "Red-tailed hawk"
  } /*, {
		"id": 6,
		"name": "Rufous-collared sparrow"
	}, {
		"id": 7,
		"name": "Antechinus, brown"
	}, {
		"id": 8,
		"name": "African elephant"
	}, {
		"id": 9,
		"name": "Deer, black-tailed"
	}, {
		"id": 10,
		"name": "Northern fur seal"
	}, {
		"id": 11,
		"name": "Buffalo, american"
	}, {
		"id": 12,
		"name": "White-necked stork"
	}, {
		"id": 13,
		"name": "Gazelle, grant's"
	}, {
		"id": 14,
		"name": "Russian dragonfly"
	}, {
		"id": 15,
		"name": "Adouri (unidentified)"
	} */
];

class TweenDataCycle extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card cards={cardsData} />
      </div>
    );
  }
}

export default TweenDataCycle;

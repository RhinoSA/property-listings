import React, { Component } from "react";
import { MammalsContext } from "../context/MammalsContext";
import { Link } from "react-router-dom";
import Menu from "../../menu";

class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      title: props.title
    };
  }
  static contextType = MammalsContext;
  render() {
    const { getMammal } = this.context;
    const mammal = getMammal(this.state.slug);
    const animal = { ...mammal };
    // console.log(animal);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>{animal.title}</h1>
            <p>{animal.latin}</p>
            <p>{animal.order}</p>
            <p>
              <Link to="/home/context" className="btn btn-secondary">
                Back
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Animal;

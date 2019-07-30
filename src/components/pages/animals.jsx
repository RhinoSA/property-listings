import React, { Component } from "react";
import { MammalContext } from "../../contextmammals";
import Title from "../modules/title";
//import Loading from "../modules/loading";
import Animal from "../modules/species/animal";
// NEW
import MammalContainer from "../modules/species/mammalcontainer";

export default class Animals extends Component {
  static contextType = MammalContext;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { mammals: animals } = this.context;
    let mammalsSort = animals.sort((a, b) => (a.title > b.title ? 1 : -1));
    animals = mammalsSort.map(animal => {
      return <Animal key={animal.id} animals={animal} />;
    });
    return (
      <React.Fragment>
        <div className="container">
          <Title title="Mammals of Southern Africa" />
          <MammalContainer />
        </div>
      </React.Fragment>
    );
  }
}

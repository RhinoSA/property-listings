import React, { Component } from "react";
import Card from "../modules/card";

class CardsSection extends Component {
  state = {};
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-3" className="anchor" />
        <h2>Cards</h2>
        <p>
          Cards are an extemely versatile way of laying out information on a
          page. There are two types of card groups, the first one is the card
          deck and the second one is the card columns. To find out more about
          the features of the two syles of cards, see the descriptions further
          down this section.
        </p>
        <Card />
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/card"
            target="boot-card"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default CardsSection;

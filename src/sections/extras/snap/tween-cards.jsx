import React, { Component } from "react";
import { TimelineLite, TweenLite } from "gsap/all";
import "./style.css";

const cardsArray = [
  {
    id: "GlaHquq0",
    file: "One"
  },
  {
    id: "GQ9u3hYG",
    file: "Two"
  },
  {
    id: "A4ohotl0",
    file: "Three"
  },
  {
    id: "dzLtZcL0",
    file: "Four"
  },
  {
    id: "AZjc6InA",
    file: "Five"
  }
];

class TweenCards extends Component {
  state = {
    selected: 0
  };

  cards = [];
  TweenLite = null;

  componentDidMount() {
    // set the initial card size
    TweenLite.set(this.cards[this.state.selected], {
      minWidth: 150,
      height: 450
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selected: preSel } = prevState;
    const { selected } = this.state;
    if (preSel !== selected) {
      let groupX, currentX, resetX;
      if (selected === 0) {
        groupX = resetX = 0;
        currentX = "+=160";
      } else {
        groupX = currentX = "+=110";
        resetX = 110 * preSel - 490;
      }
      const _cards = this.cards;
      const tl = new TimelineLite({ paused: true });
      tl.to(_cards[selected], 0.5, { minWidth: 150, height: 450 }, 0)
        .to(_cards, 0.5, { x: groupX }, 0)
        .to(_cards[preSel], 0.5, { minWidth: 100, height: 125, x: currentX }, 0)
        .set(_cards[preSel], { x: resetX })
        .play();
    }
  }

  nextClickHandler = () => {
    const { selected } = this.state;
    this.setState({
      selected: selected < cardsArray.length - 1 ? selected + 1 : 0
    });
  };

  render() {
    return (
      <div className="wrapper d-flex flex-row">
        {/* cards */}
        <div className="cards-wrap">
          <div className="card-indicator">
            {`${this.state.selected + 1} / ${cardsArray.length}`}
          </div>

          {cardsArray.map((e, i) => (
            <div
              key={e.id}
              data-target={i}
              ref={card => this.cards.push(card)}
              className="card-el"
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* info */}
        <div className="card-info">
          <div className="card-info-data" style={{ color: "#fff" }}>
            {cardsArray[this.state.selected].file}
          </div>

          <div className="card-info-nav">
            <button
              className="btn btn-secondary"
              onClick={this.nextClickHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TweenCards;

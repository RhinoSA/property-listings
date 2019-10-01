import React, { Component } from "react";
import { TweenLite } from "gsap/all";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.cards,
      discarded: []
    };

    this.cardTween = null;
    this.cardElement = null;

    this.reverseCard = this.reverseCard.bind(this);
  }

  componentDidMount() {
    this.cardTween = TweenLite.to(this.cardElement, 0.75, {
      opacity: 0,
      y: -500,
      paused: true,
      onComplete: this.reverseCard
    });
  }

  reverseCard() {
    const { cards, discarded } = this.state;
    // if the card total in the state is 0
    // reset the cards in the state from the props
    if (cards.length === 1) {
      this.setState({
        cards: this.props.cards,
        discarded: []
      });
    } else {
      const updatedCards = [].concat(cards);
      const first = updatedCards.shift();
      // update the state
      this.setState({
        cards: updatedCards,
        discarded: [first].concat(discarded)
      });
    }
    // reverse the animation
    this.cardTween.reverse();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Cycling Data</h2>
        <p>
          This is an example of how one can use GSAP to animate the updating of
          data in an element.
        </p>
        <div className="card-wrapper">
          {/* container */}
          <div className="card-outer">
            {/* card */}
            <div className="card flipper" ref={e => (this.cardElement = e)}>
              <div className="card-content">{this.state.cards[0].name}</div>
            </div>
          </div>

          {/* controls */}
          <div className="card-controls">
            <div className="button-container">
              <button
                onClick={() => this.cardTween.play()}
                className="btn btn-info"
              >
                Next Card
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;

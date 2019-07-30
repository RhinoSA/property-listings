import React, { Component } from "react";
import CardItem from "./carditem";
import CardColItem from "./cardcolitem";

class Card extends Component {
  state = {
    cardItems: [
      {
        id: 1,
        imageUrl: "../../assets/images/banner-01.jpg",
        imageAlt: "Alt Text",
        cardTitle: "Card Title 01",
        cardText:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        cardFooter: "This is the footer text."
      },
      {
        id: 2,
        imageUrl: "../../assets/images/banner-02.jpg",
        imageAlt: "Alt Text",
        cardTitle: "Card Title 02",
        cardText:
          "This card has supporting text below as a natural lead-in to additional content.",
        cardFooter: "This is the footer text."
      },
      {
        id: 3,
        imageUrl: "../../assets/images/banner-03.jpg",
        imageAlt: "Alt Text",
        cardTitle: "Card Title 03",
        cardText:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
        cardFooter: "This is the footer text."
      }
    ],
    cardColumnItems: [
      {
        id: 1,
        imageUrl: "",
        imageAlt: "",
        cardTitle: "Card Minus Image",
        cardText:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        cardFooter: "This is the footer text."
      },
      {
        id: 2,
        imageUrl: "../../assets/images/banner-01.jpg",
        imageAlt: "Alt Text",
        cardTitle: "Card Minus Footer",
        cardText:
          "This card has supporting text below as a natural lead-in to additional content.",
        cardFooter: ""
      },
      {
        id: 3,
        imageUrl: "../../assets/images/banner-02.jpg",
        imageAlt: "Alt Text",
        cardTitle: "",
        cardText:
          "This is a card that does not have a heading like the other cards.",
        cardFooter: "This is the footer text."
      },
      {
        id: 4,
        imageUrl: "",
        imageAlt: "Alt Text",
        cardTitle: "Card Minus Image",
        cardText:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
        cardFooter: "This is the footer text."
      },
      {
        id: 5,
        imageUrl: "../../assets/images/banner-03.jpg",
        imageAlt: "Alt Text",
        cardTitle: "Full-Features",
        cardText:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
        cardFooter: "This is the footer text."
      }
    ]
  };
  render() {
    return (
      <div>
        <h4>Card Decks</h4>
        <p>
          Card decks are used when you want to have the cards all look the same
          and have consistent heights. The height of the cards get scaled
          according to the card with the most content. The other difference
          between card decks and card columns is the fact that one needs to list
          them in rows of three or whatever number of cards you want in a row.
          If you add a fourth card in the row to the example below it will sit
          on the same row with the other cards and they will all scale
          accordingly, so there would be four cards of equal width in the row.
        </p>
        <div className="card-deck mb-3 mt-3">
          {this.state.cardItems.map(rows => (
            <CardItem
              key={rows.id}
              imageUrl={rows.imageUrl}
              imageAlt={rows.imageAlt}
              cardTitle={rows.cardTitle}
              cardText={rows.cardText}
              cardFooter={rows.cardFooter}
            />
          ))}
        </div>
        <h4>Using Card Decks</h4>
        <p>
          Below is how one uses the card deck to generate the cards from an
          array of data:
        </p>
        <p className="alert alert-secondary">
          &lt;div className="card-deck mb-3 mt-3"&gt;
          <br />
          &nbsp;&nbsp;&#123;this.state.cardItems.map(rows => (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;CardItem
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=&#123;rows.id&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl=&#123;rows.imageUrl&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageAlt=&#123;rows.imageAlt&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardTitle=&#123;rows.cardTitle&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardText=&#123;rows.cardText&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardFooter=&#123;rows.cardFooter&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
          <br />
          &nbsp;&nbsp;))&#125;
          <br />
          &lt;/div&gt;
        </p>
        <h4>Card Columns</h4>
        <p>
          Card colums are a lot more flexible than card decks, one can display
          them without an image, footer or title. The cards in card columns use
          a masonary-like layout and are handy for items which vary content-wise
          and that have different heights. One can also change the number of
          cards that get displayed in a column depending on the screensize using
          the css displayed below the cards in this example.
        </p>
        <div className="card-columns mb-3 mt-3">
          {this.state.cardColumnItems.map(rows => (
            <CardColItem
              key={rows.id}
              imageUrl={rows.imageUrl}
              imageAlt={rows.imageAlt}
              cardTitle={rows.cardTitle}
              cardText={rows.cardText}
              cardFooter={rows.cardFooter}
            />
          ))}
        </div>
        <h4>Using Card Columns</h4>
        <p>
          Below is how one uses the card columns to generate the cards from an
          array of data:
        </p>
        <p className="alert alert-secondary">
          &lt;div className="card-columns mb-3 mt-3"&gt;
          <br />
          &nbsp;&nbsp;&#123;this.state.cardColumnItems.map(rows => (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;CardColItem
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=&#123;rows.id&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl=&#123;rows.imageUrl&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageAlt=&#123;rows.imageAlt&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardTitle=&#123;rows.cardTitle&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardText=&#123;rows.cardText&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardFooter=&#123;rows.cardFooter&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
          <br />
          &nbsp;&nbsp;))&#125;
          <br />
          &lt;/div&gt;
        </p>
        <h4>Changing the Column Count</h4>
        <p>The css to change the number of columns for the card columns:</p>
        <p className="alert alert-secondary">
          .card-columns &#123;
          <br />
          &nbsp;&nbsp;@include media-breakpoint-only(lg) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;column-count: 4;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;@include media-breakpoint-only(xl) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;column-count: 5;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
        </p>
      </div>
    );
  }
}

export default Card;

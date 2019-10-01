// npm install scrollmagic

// import { ScrollMagic } from "react-scrollmagic";
// npm install scrollmagic
import React, { Component } from "react";
import * as ScrollMagic from "scrollmagic";
import { TimelineMax } from "gsap/all";

const listItemsArray = [
  {
    id: 1,
    text: "Item 01"
  },
  {
    id: 2,
    text: "Item 02"
  },
  {
    id: 3,
    text: "Item 03"
  },
  {
    id: 4,
    text: "Item 04"
  },
  {
    id: 5,
    text: "Item 05"
  }
];

class TweenScroll extends Component {
  constructor(props) {
    super(props);
    this.box = [];
    this.stage = null;
    this.tl = new TimelineMax();
    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene();
  }
  componentDidMount() {
    this.tl = new TimelineMax().staggerFrom(this.box, 1.25, {
      scale: 0,
      cycle: {
        y: [-50, 50]
      },
      ease: "Elastic.easeOut",
      stagger: {
        from: "center",
        amount: 0.25
      }
    });

    this.scene = new ScrollMagic.Scene({
      triggerElement: this.stage,
      triggerHook: 0
    })
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 5
      })
      .setTween(this.tl)
      .addTo(this.controller);
  }

  render() {
    return (
      <div>
        <div class="spacer" style={{ width: "100%", height: "100vh" }}>
          <h1>This section is just a spacer</h1>
        </div>

        <div id="stage" ref={div => (this.stage = div)}>
          {listItemsArray.map((listItem, index) => {
            const { text } = listItem;
            return (
              <div
                key={`icon-${index}`}
                ref={div => (this.box[index] = div)}
                style={{
                  height: "60px",
                  width: "60px",
                  alignItems: "center",
                  margin: "4px",
                  fontSize: "1.2em",
                  fontWeight: 700,
                  color: "white",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  backgroundColor: "#333"
                }}
                class="box box1"
              >
                {text}
              </div>
            );
          })}
        </div>

        <div class="spacer">
          <h1>This section is just a spacer</h1>
        </div>
      </div>
    );
  }
}

export default TweenScroll;

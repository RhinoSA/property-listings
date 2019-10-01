import React, { Component } from "react";
import { TweenLite, Draggable } from "gsap/all";

class TweenDraggableBounds extends Component {
  refCallback = element => {
    if (this.dragbox) {
      this.props.getSize(this.dragbox.getBoundingClientRect());
    }
  };

  refCallbackLock = element => {
    if (this.lockZone) {
      this.props.getSize(this.lockZone.getBoundingClientRect());
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.lockzone = null;
    this.container = null;
    this.dragbox = null;
  }

  componentDidMount() {
    /*Draggable.create(this.dragbox, {
      type: "x,y",
      liveSnap: {
        points: myModifier
      }
    });
    function myModifier(point) {
      TweenLite.set(this.target, {
        x: point.x,
        y: point.y,
        immediateRender: true
      });

      var targetBounds = this.refCallback(),
        avoidBounds = this.refCallbackLock(),
        x = point.x,
        y = point.y,
        horizontalOverlap =
          targetBounds.right > avoidBounds.left &&
          targetBounds.left < avoidBounds.right,
        verticalOverlap =
          targetBounds.bottom > avoidBounds.top &&
          targetBounds.top < avoidBounds.bottom,
        targetCenterX,
        targetCenterY,
        avoidCenterX,
        avoidCenterY,
        distanceToLeft,
        distanceToRight,
        distanceToTop,
        distanceToBottom;
      //only run this logic if there's overlap on both the vertical and horizontal axis...
      if (horizontalOverlap && verticalOverlap) {
        //figure out the center of the target as well as the element we're avoiding...
        targetCenterX = (targetBounds.left + targetBounds.right) / 2;
        targetCenterY = (targetBounds.top + targetBounds.bottom) / 2;
        avoidCenterX = (avoidBounds.left + avoidBounds.right) / 2;
        avoidCenterY = (avoidBounds.top + avoidBounds.bottom) / 2;

        //calculate the distance to each edge so that we can find the closest one to snap to
        distanceToLeft = Math.abs(targetCenterX - avoidBounds.left);
        distanceToRight = Math.abs(avoidBounds.right - targetCenterX);
        distanceToTop = Math.abs(targetCenterY - avoidBounds.top);
        distanceToBottom = Math.abs(avoidBounds.bottom - targetCenterY);

        //adjust for outer edges
        if (targetCenterX < avoidBounds.left) {
          distanceToTop += distanceToLeft;
          distanceToBottom += distanceToLeft;
        } else if (targetCenterX > avoidBounds.right) {
          distanceToTop += distanceToRight;
          distanceToBottom += distanceToRight;
        }
        if (targetCenterY < avoidBounds.top) {
          distanceToLeft += distanceToTop;
          distanceToRight += distanceToTop;
        } else if (targetCenterY > avoidBounds.bottom) {
          distanceToLeft += distanceToBottom;
          distanceToRight += distanceToBottom;
        }

        //snap to the appropriate side
        switch (
          Math.min(
            distanceToLeft,
            distanceToRight,
            distanceToTop,
            distanceToBottom
          )
        ) {
          case distanceToLeft:
            x -= targetBounds.right - avoidBounds.left;
            break;
          case distanceToRight:
            x += avoidBounds.right - targetBounds.left;
            break;
          case distanceToTop:
            y -= targetBounds.bottom - avoidBounds.top;
            break;
          case distanceToBottom:
            y += avoidBounds.bottom - targetBounds.top;
            break;
        }
      }
      TweenLite.set(this.target, { x: x, y: y });
      return { x: x, y: y };
    }*/
  }

  render() {
    const dragboxStyle = {
      position: "absolute",
      left: 100,
      width: 150,
      height: 50,
      background: "#F60",
      borderRadius: 10,
      color: "black"
    };
    const lockzoneStyle = {
      width: 300,
      height: 300,
      background: "#111",
      border: "1px solid red",
      position: "relative",
      margin: "auto"
    };
    return (
      <React.Fragment>
        <h2>Draggable Bounds</h2>
        <div ref={div => (this.container = div)}>
          <div style={dragboxStyle} ref={div => (this.dragbox = div)}></div>
          <div style={lockzoneStyle} ref={div => (this.lockzone = div)}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenDraggableBounds;

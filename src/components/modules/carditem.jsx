import React, { Component } from "react";

class CardItem extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.imageUrl}
          alt={this.props.imageAlt}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
        </div>
        <div className="card-footer text-right">
          <small className="text-muted">{this.props.cardFooter}</small>
        </div>
      </div>
    );
  }
}

export default CardItem;

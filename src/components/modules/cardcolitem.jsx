import React, { Component } from "react";

class CardColItem extends Component {
  render() {
    return (
      <div className="card">
        {this.props.imageUrl === "" ? null : (
          <img
            className="card-img-top"
            src={this.props.imageUrl}
            alt={this.props.imageAlt}
          />
        )}

        <div className="card-body">
          {this.props.cardTitle === "" ? null : (
            <h5 className="card-title">{this.props.cardTitle}</h5>
          )}
          {this.props.cardText === "" ? null : (
            <p className="card-text">{this.props.cardText}</p>
          )}
        </div>
        {this.props.cardFooter === "" ? null : (
          <div className="card-footer text-right">
            <small className="text-muted">{this.props.cardFooter}</small>
          </div>
        )}
      </div>
    );
  }
}

export default CardColItem;

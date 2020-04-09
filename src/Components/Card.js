import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="CardGrid">
        <div className="countryName">countryName</div>
        <div className="Card_CONFIRMED">Card_CONFIRMED</div>
        <div className="Card_RECOVERED">Card_RECOVERED</div>
        <div className="Card_DEATHS">Card_DEATHS</div>
      </div>
    );
  }
}

export default Card;

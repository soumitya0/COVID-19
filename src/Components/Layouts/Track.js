import React, { Component, Fragment } from "react";

class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DATA: {},
    };
  }

  render() {
    /*
    // console.log(this.props.test);
    // console.log("CONFIRMED");
    // console.log(this.props.test.confirmed);

    // console.log("DEATHS");
    // console.log(this.props.test.deaths);

    // console.log("RECOVERED");
    // console.log(this.props.test.recovered);
    */

    const confirmed = this.props.test.confirmed;
    console.log("i am confirmed " + confirmed);

    const deaths = this.props.test.deaths;
    console.log("i am confirmed " + deaths);

    const recovered = this.props.test.recovered;
    console.log("i am confirmed " + recovered);

    const WorldConfirmed = this.props.test.cases;

    return (
      <Fragment>
        <div className="CardGrid">
          <div className="countryName">
            <h3>{this.props.name}</h3>
          </div>

          <div className="Card_CONFIRMED">
            <h3 style={{ margin: "10px auto" }}> CONFIRMED</h3>
            <p style={{ margin: "15px auto", fontSize: "23px" }}>
              {" "}
              {this.props.name === " INDIA COVID-19 TRACKER "
                ? confirmed
                : WorldConfirmed}
            </p>
          </div>

          <div className="Card_RECOVERED">
            <h3 style={{ margin: "10px auto" }}> RECOVERED</h3>
            <p style={{ margin: "15px auto", fontSize: "23px" }}>
              {" "}
              {recovered}
            </p>
          </div>
          <div className="Card_DEATHS">
            <h3 style={{ margin: "10px auto" }}> DEATHS</h3>
            <p style={{ margin: "15px auto", fontSize: "23px" }}> {deaths}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Track;

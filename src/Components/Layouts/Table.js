import React, { Component } from "react";

import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DATA: [],

      TableHeaderData: ["STATE", "CONFIRMED", "RECOVERED", "DEATHS"],
    };
  }

  //API Call

  IndiaStateDistrictWise() {
    return axios
      .get("https://api.covid19india.org/data.json")
      .then((response) => {
        console.log("IndiaStateDistrictWise");
        console.log(response);
        console.log(response.data);

        this.setState({
          DATA: response.data.statewise,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: " Error retreiving data",
        });
      });
  }

  //COVID-19 Table;
  //header
  TableHeader() {
    return this.state.TableHeaderData.map((data) => (
      <th key={data.id}> {data}</th>
    ));
  }

  TableData() {
    return this.state.DATA.map((data, index) => {
      //console.log({ data });

      const { state, confirmed, recovered, deaths } = data;
      return (
        <tr>
          <td>{state}</td>
          <td>{confirmed}</td>
          <td>{recovered}</td>
          <td>{deaths}</td>
        </tr>
      );
    });
  }

  componentDidMount() {
    this.IndiaStateDistrictWise();
  }

  render() {
    console.log("TABLE DATA");
    console.log(this.state.DATA);

    this.state.DATA.map((data) => console.log({ data }));

    return (
      <div>
        <h1 className="title">INDIA COVID-19 TRACKER </h1>

        {/* COVID-19 */}

        <table className="TableState">
          <tr>{this.TableHeader()}</tr>
          <tbody>{this.TableData()}</tbody>
        </table>

        {/* {this.state.STATES.map((data) => (
          <h2 key={data.id}> {data}</h2>
        ))} */}
      </div>
    );
  }
}

export default Table;

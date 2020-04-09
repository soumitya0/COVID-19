import React, { Component } from "react";

import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DATA: [],
      STATES: [],
      DISTRICT: [],
      CONFIRMED: [],
      ACTIVE: [],
      RECOVERED: [],

      TableHead: ["Id", "Nmae", "Age", "Email"],

      TableHeaderData: ["STATE", "CONFIRMED", "RECOVERED", "DEATHS"],

      students: [
        { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      ],
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

  // NORMAL TABLE
  renderTableHeader() {
    return this.state.TableHead.map((data) => <th key={data.id}> {data}</th>);
  }

  //NORMAL TABLE
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
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
        <h1 id="title">React Dynamic Table</h1>

        {/* NORMAL TABLE */}
        <table id="students">
          <tr>{this.renderTableHeader()}</tr>

          <tbody>{this.renderTableData()}</tbody>
        </table>

        {/* COVID-19 */}

        <table>
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

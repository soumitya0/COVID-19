import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      STATES: [],
      DISTRICT: [],
      CONFIRMED: [],
      ACTIVE: [],
      RECOVERED: [],

      TableHead: ["Id", "Nmae", "Age", "Email"],

      TableTH: ["STATE", "CONFIRMED", "RECOVERED", "DEATHS"],

      students: [
        { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      ],
    };
  }

  renderTableHeader() {
    return this.state.TableHead.map((data) => <th key={data.id}> {data}</th>);
  }

  TableHeader() {
    return this.state.TableTH.map((data) => <th key={data.id}> {data}</th>);
  }

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

  render() {
    console.log("Table");
    console.log(this.props.data);

    console.log("i am data ");
    console.log(Object.keys(this.props.data));

    for (var i of Object.keys(this.props.data)) {
      console.log(i.districtData);

      this.state.STATES.push(i);
    }

    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tr>{this.renderTableHeader()}</tr>

          <tbody>{this.renderTableData()}</tbody>
        </table>

        <table>
          <tr>{this.TableHeader()}</tr>
        </table>

        {this.state.STATES.map((data) => (
          <h2 key={data.id}> {data}</h2>
        ))}
      </div>
    );
  }
}

export default Table;

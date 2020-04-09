import React, { Component } from "react";

import "./App.css";

import axios from "axios";
import Table from "./Components/Layouts/Table";
import Track from "./Components/Layouts/Track";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CDR: [],
      CDR_WORLD: {},
      IndiaData: [],
      worldData: [],
      errorMsg: "",
      name: "soumitya",
    };
  }

  IndiaStateDistrictWise() {
    return axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        console.log("IndiaStateDistrictWise");
        console.log(response);
        console.log(response.data);

        this.setState({
          IndiaData: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: " Error retreiving data",
        });
      });
  }

  CDR_Data_IND() {
    //CDR = CONFIRM DEATHS RECOVERS  of INDIA
    return axios
      .get("https://api.covid19india.org/data.json")
      .then((response) => {
        console.log("CDR");
        console.log(response.data.statewise);

        this.setState({
          CDR: response.data.statewise[0],
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: " Error retreiving data CDR_IND",
        });

        console.log(this.state.errorMsg);
      });
  }

  CDR_Data_World() {
    axios
      .get("https://corona.lmao.ninja/all")
      .then((response) => {
        console.log("i am world data ");
        console.log(response.data);
        this.setState({
          CDR_WORLD: response.data,
        });
      })

      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: " Error retreiving data CDR_WORLD",
        });

        console.log(this.state.errorMsg);
      });
  }

  componentDidMount() {
    this.IndiaStateDistrictWise();
    this.CDR_Data_IND();
    this.CDR_Data_World();
  }

  render() {
    return (
      <div>
        <div className="App_NavBar"> Nav Bar</div>

        <div className="AppGrid">
          <div className="App_india">
            <Track test={this.state.CDR} name=" INDIA COVID-19 TRACKER " />
          </div>

          <div className="App_world">
            <Track
              test={this.state.CDR_WORLD}
              name=" WORLD COVID-19 TRACKER "
            />
          </div>

          <div className="App_Table">
            <Table data={this.state.IndiaData} name={this.state.name} />
          </div>
          <div className="App_PieChart"> Pie_Chart</div>

          <div className="App_Footer"> Footer</div>
        </div>
      </div>
    );
  }
}

export default App;

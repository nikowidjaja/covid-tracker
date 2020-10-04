import React, { Component, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";
import $ from 'jquery';

var countries = [];

const toLower = (country) => {
  country = country.toLowerCase();
  
  return country;
};

const renderCountry = (fullData, filters) => {
  var country = Object.keys(fullData);

  filters = filters.toLowerCase();

  countries = country.filter((country) => toLower(country).includes(filters));
  for (var j = 0; j < countries.length; j++) {
    countries[j] = countries[j].charAt(0).toUpperCase() + countries[j].slice(1);
  }
  if (countries.length === 0) {
    countries[0] = "COUNTRY NOT FOUND";
  }
};

const renderFlag = (country) => {
  //NOT YET
};


const renderList = (countries, fullData) => {
  let List = countries.map((data, i) => (
    <tr key={i}>
      <td>
        {renderFlag(data)} {data}
      </td>
      <td>
        {" "}
        {fullData[data] && fullData[data][fullData[data].length - 1].confirmed}
        <br />
        <p className="lighten">
          {data === "COUNTRY NOT FOUND" ? "" : "+"}
          {fullData[data] &&
            fullData[data][fullData[data].length - 1].confirmed -
            fullData[data][fullData[data].length - 2].confirmed}
        </p>
      </td>
      <td>
        {fullData[data] && fullData[data][fullData[data].length - 1].deaths}
        <br />
        <p className="lighten">
          {data === "COUNTRY NOT FOUND" ? "" : "+"}
          {fullData[data] &&
            fullData[data][fullData[data].length - 1].deaths -
            fullData[data][fullData[data].length - 2].deaths}
        </p>
      </td>
      <td>
        {fullData[data] && fullData[data][fullData[data].length - 1].recovered}
        <br />
        <p className="lighten">
          {data === "COUNTRY NOT FOUND" ? "" : "+"}
          {fullData[data] &&
            fullData[data][fullData[data].length - 1].recovered -
            fullData[data][fullData[data].length - 2].recovered}
        </p>
      </td>
    </tr>
  ));

  return (
    <div className="table-content">
      <table id="countryTable">
        <tbody>
          {List}
        </tbody>
      </table>
    </div>
  );
};


const sortTable = (currState) => {
  var table, i, x, y;
  table = document.getElementById("countryTable");
  var switching = true;

  while (switching) {
    switching = false;
    var rows = table.rows;

    for (i = 0; i < rows.length - 1; i++) {

      var Switch = false;
      let whichColumn = 0;
      switch (currState) {
        case "country":
          whichColumn = 0;
          break;
        case "confirmed":
          whichColumn = 1;
          break;
        case "deaths":
          whichColumn = 2;
          break;
        case "recovered":
          whichColumn = 3;
          break;
        default:
          whichColumn = 0;

          break;
      }
      x = rows[i].getElementsByTagName("td")[whichColumn];
      y = rows[i + 1].getElementsByTagName("td")[whichColumn];

      let data_x = x.innerHTML;
      let data_y = y.innerHTML;

      if (whichColumn !== 0) {
        let new_x = $(x).contents()
          .filter(function () {
            return !!$.trim(this.innerHTML || this.data);
          })
          .first();

        let new_y = $(y).contents()
          .filter(function () {
            return !!$.trim(this.innerHTML || this.data);
          })
          .first();

        data_x = parseInt(new_x[0].data);
        data_y = parseInt(new_y[0].data);

        if (data_x < data_y) {

          Switch = true;
          break;
        }
      }
      else {
        if (data_x > data_y) {
          Switch = true;
          break;
        }
      }


    }
    if (Switch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}


const renderTableHeader = () => {
  return (
    <div className="table-header">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Death</th>
            <th>Recovered</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "country"
    }
  }

  handleChange = (event) => {
    event.persist();
    let data = event.target.value;
    this.props.actionsMain.put_data("filter", data);

  };

  handleSelect = (event) => {


    let option = event.target.value;
    this.setState({
      select: option
    });


    sortTable(option)

  }

  render() {
    var fullData = this.props.main.covid_data;
    var filters = this.props.main.filter;
console.log(fullData);
    renderCountry(fullData, filters);

    return (
      <React.Fragment>
        <div className="sortbar">
          <span>Sort By : </span>
          <select onChange={(e) => { this.handleSelect(e) }} value={this.state.select} className="sortbar__select">
            <option value="country">Country</option>
            <option value="confirmed">Confirmed</option>
            <option value="deaths">Deaths</option>
            <option value="recovered">Recovered</option>
          </select>
        </div>

        <div className="search-bar">
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Search..."
          />
          {/* <img src={require("../assets/images/magnify.png")} alt="/" /> */}
        </div>


        <div className="table-country">
          <div> {renderTableHeader()}</div>
          <Scrollbars className="scrollbar">
            <div>{fullData && renderList(countries, fullData)}</div>
          </Scrollbars>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { main: state.main };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsMain: bindActionCreators(mainActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

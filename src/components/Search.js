import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";

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
      <table id="countryTable">{List}</table>
    </div>
  );
};


const sortTable = () => {
  var table, i, x, y;
  table = document.getElementById("countryTable");
  console.log(table);

  var switching = true;

  // Run loop until no switching is needed 
  while (switching) {
    switching = false;
    var rows = table.rows;

    // Loop to go through all rows 
    for (i = 1; i < (rows.length - 1); i++) {
      var Switch = false;

      // Fetch 2 elements that need to be compared 
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];

      // Check if 2 rows need to be switched 
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

        // If yes, mark Switch as needed and break loop 
        Switch = true;
        break;
      }
    }
    if (Switch) {
      // Function to switch rows and mark switch as completed 
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

  handleChange = (event) => {
    event.persist();
    let data = event.target.value;
    this.props.actionsMain.put_data("filter", data);
  };
  render() {
    var fullData = this.props.main.covid_data;
    var filters = this.props.main.filter;

    renderCountry(fullData, filters);

    return (
      <React.Fragment>

    
        <div className="search-bar">
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Search..."
          />
          <img src={require("../assets/images/magnify.png")} alt="/" />
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

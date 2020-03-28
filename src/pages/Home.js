import React, { Component } from "react";
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";

var countries = [];

const toLower = country => {
  country = country.toLowerCase();

  return country;
};

const renderCountry = (fullData, filters) => {
  var country = Object.keys(fullData);

  filters = filters.toLowerCase();

  countries = country.filter(country => toLower(country).includes(filters));
  for (var j = 0; j < countries.length; j++) {
    countries[j] = countries[j].charAt(0).toUpperCase() + countries[j].slice(1);
  }
};

const renderList = (countries, fullData) => {
  let List = countries.map((data, i) => (
    <div key={i}>
      <h1>{data}</h1>

      <h3>
        DATE :{" "}
        {fullData[data] && fullData[data][fullData[data].length - 1].date}
      </h3>
      <h3>
        CONFIRMED :{" "}
        {fullData[data] && fullData[data][fullData[data].length - 1].confirmed}
      </h3>
      <h3>
        DEATH :{" "}
        {fullData[data] && fullData[data][fullData[data].length - 1].deaths}
      </h3>
      <h3>
        RECOVERED :{" "}
        {fullData[data] && fullData[data][fullData[data].length - 1].recovered}
      </h3>
    </div>
  ));

  return List;
};

class Home extends Component {
  handleChange = event => {
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
        <input type="text" onChange={e => this.handleChange(e)} />
        <div>{fullData && renderList(countries, fullData)}</div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { main: state.main };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsMain: bindActionCreators(mainActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

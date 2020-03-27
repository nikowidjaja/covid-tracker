import React, { Component } from "react";
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";

// const renderList = covid => {
//   console.log(covid);
//   let covid_map = covid.map((data, i) => (
//     <div key={i}>

// <h3>DATE : {covid && data.date}</h3>
// <h3>CONFIRMED : {covid && data.confirmed}</h3>
// <h3>DEATH : {covid && data.deaths}</h3>
// <h3>RECOVERED : {covid && data.recovered}</h3>
//       <br />
//     </div>
//   ));
//   return covid_map;
// };

const renderList = fullData => {
  // console.log(fullData);
  // console.log(Object.keys(fullData));
  let List = Object.keys(fullData).map((data, i) => (
    <div key={i}>
      <h1>COUNTRY NAME : {data}</h1>
      <h3>DATE : {fullData[data][fullData[data].length - 1].date}</h3>
      <h3>CONFIRMED : {fullData[data][fullData[data].length - 1].confirmed}</h3>
      <h3>DEATH : {fullData[data][fullData[data].length - 1].deaths}</h3>
      <h3>RECOVERED : {fullData[data][fullData[data].length - 1].recovered}</h3>
    </div>
  ));

  return List;
};

class Home extends Component {
  render() {
    // console.log(this.props.main.covid_data);
    var fullData = this.props.main.covid_data;

    return <div>{fullData && renderList(fullData)}</div>;
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

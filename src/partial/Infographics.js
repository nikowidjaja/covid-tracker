import React, { Component } from "react";
import Search from "../components/Search";
// import ChartViz from "../components/ChartViz";

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";

class Infographics extends Component {
  render() {
    let cases = this.props.main.total_infographics;
    let timeseries = this.props.main.global_timeseries;

    const CountDifference = (datas) => {
      return (
        <p>
          {" "}
       +
          {timeseries &&
            timeseries.data[timeseries.data.length - 1][
              Object.keys(timeseries.data[timeseries.data.length - 1])
            ][datas.props] -
              timeseries.data[timeseries.data.length - 2][
                Object.keys(timeseries.data[timeseries.data.length - 2])
              ][datas.props]}
        </p>
      );
    };

    const RenderItem = () => {
      const list = ["confirmed", "deaths", "recovered"];
      return list.map((datas, i) => {
        return ( 
          <div key={i} className="infographics__left__item">
            <div className="infographics__left__item__title">
              <h5> {datas} </h5>
              <CountDifference props={datas} />
              {/* <ChartViz/> */}
            </div>
            <div className="infographics__left__item__count">
              {cases &&
                cases.data[datas]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {/* TO MAKE THE NUMBER SEPARATED BY COMMA */}
            </div>
          </div>
        );
      });
    };

    return (
      <React.Fragment>
        <div id="infographics" className="infographics">
          <div className="infographics__left">
            <h1 className="infographics__left__header">Worldwide</h1>
            {cases && <RenderItem />}
          </div>
          <div className="infographics__right">
            <div className="infographics__right__header">
              <h1>Countries</h1>
              <Search />
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);

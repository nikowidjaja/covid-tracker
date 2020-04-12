import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";

const NoMatch = () => <div>404 Not Found</div>;

class Main extends Component {
  componentWillMount() {
    this.props.actionsMain.get_data();
    this.props.actionsMain.get_infographics();
    this.props.actionsMain.get_timeseries();
  }
  render() {
    return (
      <Router basename="/">
        <div id="Main" className="main-panel">
          <div className="content-container">
            {/* <ErrorBoundary> */}
            <Switch>
              <Route exact path="/" render={() => <Home {...this.props} />} />
              <Route component={NoMatch} />
            </Switch>
            {/* </ErrorBoundary> */}
          </div>
        </div>
      </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React, { Component } from 'react';
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";



 class Home extends Component {
    render() {
        return (
            <div className="asd">
                rusa
            </div>
        )
    }
}

function mapStateToProps(state) {
	return { main: state.main};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  actionsMain: bindActionCreators(mainActions, dispatch),
	};
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
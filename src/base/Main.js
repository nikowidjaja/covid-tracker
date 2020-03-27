import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../pages/Home';

const NoMatch = () => (
    <div>404 Not Found</div>
);

class Main extends Component {

    render() {
        return (
            <Router basename="/">
				<div id="Main" className="main-panel">
					<div className="content-container">
						{/* <ErrorBoundary> */}
							<Switch>
								<Route exact path="/" component={Home} />
								<Route component={NoMatch} />
							</Switch>
						{/* </ErrorBoundary> */}
					</div>
				</div>
			</Router>
        );
    }
}


export default Main;
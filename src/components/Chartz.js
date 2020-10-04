import React, { Component,useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../redux/actions/main";



class Chartz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
            }
        }
    }

    componentWillReceiveProps() {
        this.setChartData();
    }

    setChartData() {


        let countryData = this.props.main.covid_data["US"];
        let dateList = countryData && countryData.map((data) => {
            return data.date;
        });
        let confirmedList = countryData && countryData.map((data) => {
            return data.confirmed;
        });
        let deathList = countryData && countryData.map((data) => {
            return data.deaths;
        });
        let recoveredList = countryData && countryData.map((data) => {
            return data.recovered;
        });

        this.setState({
            data: {
                labels: dateList,
                datasets: [
                    {
                        label: 'Confirmed Case',
                        data: confirmedList,
                        borderColor: 'rgba(0, 0, 255, 1)',
                        fill: false,
                        pointHoverBorderColor:'yellow',
                        pointHoverBackgroundColor:"yellow",
                    },
                    {
                        label: 'Death Case',
                        data: deathList,
                        borderColor: 'rgba(255, 0, 0, 1)',
                       
                        fill: false,
                        pointHoverBorderColor:'yellow',
                        pointHoverBackgroundColor:"yellow",
                    },
                    {
                        label: 'Recovered Case',
                        data: recoveredList,
                        borderColor: 'rgba(0, 255, 0, 1)',
                        fill: false,
                        pointHoverBorderColor:'yellow',
                        pointHoverBackgroundColor:"yellow",
                    },
                ]
            }
        })
    }

    render() {

        return (
            <div className="chart">
                <Line data={this.state.data} />
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Chartz);

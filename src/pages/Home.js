import React, { Component } from "react";
import Carousel from "../partial/CarouselField";
import Navbar from "../partial/Navbar";
import Infographics from "../partial/Infographics";
import Footer from "../partial/Footer";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <Navbar />
          <Carousel />
          <Infographics/>
        </div>

        <Footer/>

      </React.Fragment>
    );
  }
}

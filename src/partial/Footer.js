import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <p>Contact</p> */}
        <div className="footer__image">
          <img
            src={require("../assets/images/github-logo.svg")}
            alt="Visit my Github"
            title="Visit my Github"
            onClick={()=>{
              window.location.href="https://github.com/nikowidjaja"
            }}
           
          />
          <img
            src={require("../assets/images/linkedin-logo.png")}
            alt="Visit my Linkedin"
            title="Visit my LinkedIn"
            onClick={()=>{
              window.location.href="https://www.linkedin.com/in/niko-pratama-wahjudi-widjaja-7698a3174/"
            }}
          />
        </div>
        <br/>
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/niko-pratama-wahjudi-widjaja-7698a3174/">
            Niko Pratama Wahjudi Widjaja
          </a>
        </p>
        <br/>
        <p>
          {" "}
          Data Source :{" "}
          <a href="https://systems.jhu.edu/">https://systems.jhu.edu/</a>
        </p>
      </div>
    );
  }
}

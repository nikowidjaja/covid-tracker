import Slider from "react-slick";
import React from "react";

const content = [
  {
    header: "Be Healthy and Productive",
    text:
      "Being healthy is important, and so is being productive. Know your tips and trick to stay sharp and productive to Work From Home successfully.",
    img: "ill-1.png",
    button: "See Tips",
    url:
      "https://www.forbes.com/sites/biancamillercole/2020/03/16/6-tips-to-work-from-home-successfully-during-lock-down/",
  },
  {
    header: "Stay Home Goddamnit!",
    text:
      "Stay aware of the latest information of the Covid-19 outbreak, available on WHO website and through your national public healthy authority.",
    img: "ill-2.png",
    button: "See Prevention",
    url:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
  },
  {
    header: "Statistics and Data Never Lie",
    text:
      "We let you aware of the Covid-19 outbreak, with latest data from respectable and trustworthy source.",
    img: "ill-3.png",
    button: "Check Statistics",
    url:"#infographics"
  },
];
export default class CarouselField extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      accessibility: true,
      autoplaySpeed: 5000,
      arrow: false,
    };

    return (
      <Slider {...settings}>
        {content.map((data, index) => {
          return (
            <div className="sliders">
              <div key={index} className="sliders__text">
                <h1>{data.header}</h1>
                <p>{data.text}</p>
                <div
                  className="sliders__text__button"
                  onClick={() => {
                    window.location.href = data.url;
                  }}
                >
                  {data.button}
                </div>
              </div>
              <div className="sliders__image">
                <img src={require("../assets/images/" + data.img)} alt="/" />
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}

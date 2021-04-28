import React from "react";
import Slider from "infinite-react-carousel";
export default function Home() {
  return (
    <>
      <div className="home">
        {" "}
        <div className="homepage-text">Believe In Fashion</div>
        <div className="img-holder">
          <Slider dots>
            <img
              src={"https://olleonew.sirv.com/1.jpeg"}
              className="sliderimg"
            />
            <img
              src={"https://olleonew.sirv.com/0.jpg"}
              className="sliderimg"
            />
            <img
              src={"https://olleonew.sirv.com/2.jpeg"}
              className="sliderimg"
            />
            <img
              src={"https://olleonew.sirv.com/3.jpeg"}
              className="sliderimg"
            />
            <img
              src={"https://olleonew.sirv.com/4.jpeg"}
              className="sliderimg"
            />
          </Slider>
        </div>
      </div>
    </>
  );
}

import React from "react";
import service1 from "../assets/img/service-img1.png";
import service2 from "../assets/img/service-img2.png";
import service3 from "../assets/img/service-img3.png";
import service4 from "../assets/img/service-img4.png";
import {Animated} from "react-animated-css";



export const Services = () => {
  
  return (
    <section className="services" id="services">
        <div className="container-fluid">
            <div className="services1">
                <div className="text">
                <Animated animationIn="zoomIn" animationInDuration="10000" animationOut="fadeIn" isVisible={true}>
                    <h2>Transform your brand</h2>
                    <p>We are full-service creative agency specialysing in helping brands grow fast. Engage your
                        clients through compelling visuals that do most if the market for you.
                    </p>
                  </Animated>
                    <a href="/">LEARN MORE</a>
                </div>
                <div className="image">
                    <img src={service1} alt=""></img>
                </div>
            </div>
            <div className="services1">
                <div className="image">
                    <img src={service2} alt=""></img>
                </div>
                <div className="text">
                <Animated animationIn="rotateIn" animationInDuration="10000" animationOut="fadeIn" isVisible={true}>
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designer, videographers and copywriters. We'll build
                        and extend your brand in digital places.
                    </p>
                  </Animated>
                    <a href="/">LEARN MORE</a>
                </div>
            </div>
            <div className="services2">
                <div className="services3 Graphic">
                    <div className="image2">
                        <img src={service3} alt=""></img>
                    </div>
                    <div className="text">
                    <Animated animationIn="rollIn" animationInDuration="10000" animationOut="fadeIn" isVisible={true}>
                        <h2>Graphic Design</h2>
                        <p>Great design makes you memorable.We deliver artwork that underscores your brand message
                            and captures potential's client attention.
                        </p>
                      </Animated>
                    </div>
                </div>
                <div className="services3 Photography">
                    <div className="image2">
                        <img src={service4} alt=""></img>
                    </div>
                    <div className="text">
                    <Animated animationIn="rollIn" animationInDuration="10000" animationOut="fadeIn" isVisible={true}>
                        <h2>Photography</h2>
                        <p>Increase your credibility by getting the mpst stunnig, high-quality photod that improve 
                            your business image.
                        </p>
                      </Animated>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

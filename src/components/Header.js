import React from "react";
import { Container, Row, } from "react-bootstrap";
import 'animate.css';
import {Animated} from "react-animated-css";



export const Header = () => {

  return (
    <section className="header" id="about">
      <Container>
        <Row className="aligh-items-center">
        <Animated animationIn="rotateIn" animationInDuration="10000" animationOut="fadeIn" isVisible={true}>
          <h1 class="text-center">WE ARE CREATIVES</h1>
        </Animated>
        <Animated animationIn="slideInDown" animationInDuration="5000" animationOut="fadeIn" isVisible={true}>
          <i class="fa-solid fa-arrow-down"></i>
        </Animated>
        </Row>
      </Container>
    </section>
  )
}

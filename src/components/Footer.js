import React from "react";
import { Container, } from "react-bootstrap";

export const Footer = () => { 
  return (
    <footer className="footer">
      <Container className="text-center">
      <h1>sunnyside</h1>
        <div class="link">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Projects</a>
        </div>
        <div id="contact" class="icon">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
        </div>
      </Container>
    </footer>
  )
}

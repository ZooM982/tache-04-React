import React from "react";
import 'animate.css';
import card1 from "../assets/img/card-1.png"
import card2 from "../assets/img/card-2.png"
import card3 from "../assets/img/card-3.png"
import card4 from "../assets/img/card-4.png"

export const Projects = () => {

  return (
    <section id="projects" class="d-flex">
            <div class="carde">
                <img src={card1} class="card-img-top" alt="..."></img>
            </div>
            <div class="carde">
                <img src={card2}class="card-img-top" alt="..."></img>
            </div>
            <div class="carde">
                <img src={card3} class="card-img-top" alt="..."></img>
            </div>
            <div class="carde">
                <img src={card4} class="card-img-top" alt="..."></img>
            </div>
        </section>
  )
}

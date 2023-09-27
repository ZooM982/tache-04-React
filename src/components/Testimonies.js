import React from "react";
import testi1 from "../assets/img/testi-1.jpg"
import testi2 from "../assets/img/test-2.jpg"
import testi3 from "../assets/img/test-3.jpg"


export const Testimonies = () => {

  return (
    <section id="testimonies" className="text-center">
            <h1 className="text0 text-muted">CLIENTS TESTIMONIALS</h1>
            <div className="testies mx-5">
                <div className="testimonies">
                    <img src={testi1}  alt=""></img>
                    <p className="text1 text-muted">We put our trust in Sunnyside and they delivered, making sure 
                        our needs were met and deadlines were always hit.
                    </p>
                    <p className="text2">Emily R.</p>
                    <p className="text3 text-muted">Marketing Director</p>
                </div>
                <div className="testimonies">
                    <img src={testi2} alt=""></img>
                    <p className="text1 text-muted">Sunnyside's enthusiasm coupled with their keen interest in our
                        brand's success made it a satisfying and enjoyable experience. 
                    </p>
                    <p className="text2">Thomas S.</p>
                    <p className="text3 text-muted">Chief operating Officer</p>
                </div>
                <div className="testimonies">
                    <img src={testi3}  alt=""></img>
                    <p className="text1 text-muted">Incredible end result! OUr sales increased over 400% when we worked with sunnyside.
                        Highly recommebded.
                    </p>
                    <p className="text2">Jennie F.</p>
                    <p className="text3 text-muted">Bussiness Owner</p>
                </div>
            </div>
        </section>
  )
}

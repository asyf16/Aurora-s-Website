import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import { Link } from "react-router-dom";

function Bark() {
  return (
    <>
      <div className="Carouselcontainer">
        <div className="Carouselimage">
          <Carousel indicators={false} className="Carousel-wrap" touch={true}>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/n88uGGO.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/BsGrHyt.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/aKmRJVX.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/4HVNFfz.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/r624KJL.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/5bYkILl.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/amQklZ6.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/qQ4cb32.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/NSFgLYv.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/xoV2ort.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/g5LzFjd.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/168jEcT.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/TNPUZ71.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/1zF3Rsu.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/z3S1Eqm.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.imgur.com/mTDWEyZ.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.imgur.com/gAxGkqw.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.imgur.com/2PvLUee.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.imgur.com/lsm5YDc.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.imgur.com/B5GJF8u.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.imgur.com/QcFKuTA.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.imgur.com/foiaPek.png"
                alt="About Me"
                className="Carouselimage"
              />
            </Carousel.Item>
          </Carousel>
          <Link className="bark-link" to="https://www.bnaibrith.ca/tags/a-bark-to-be-proud-of/"
              target="_blank">
            <h2 className="bark-title">A Bark to be Proud of</h2>
          </Link>
          <p className="bark-para">
            Authored and illustrated original storybook, winning $3000 in the
            Diverse Minds competition and officially published and distributed
            to elementary schools and libraries across Edmonton.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bark;

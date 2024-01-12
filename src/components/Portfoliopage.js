import React from "react";
import "./Portfoliopage.css";
import Bark from "./Bark";

function Portfoliopage() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <p>
          I love experimenting in all types of media such as oil painting,
          acrylic, sculpture, block printing, and mixed media.
        </p>
        <p>
          In addition, I enjoy graphic design, such as creating logos or
          packaging for companies and organizations.
        </p>
        <div className="portfolio-section">
          <table className="whole-portfolio">
            <center>
              <tr className="portfolio-wrap">
                <td className="cell">
                  <div className="img-wrap">
                    <img src="https://i.imgur.com/XrBEyeO.png" alt="About Me" />
                  </div>
                  <h2>Worst Enemy</h2>
                  <h3>Acrylic on canvas</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img className="img-effect" src="https://i.imgur.com/VRHZ15l.png" alt="About Me" />
                  </div>
                  <h2>Just a Little More</h2>
                  <h3>Oil pastel on paper</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img className="img-wrap" src="https://i.imgur.com/ulA3QKZ.jpg" alt="About Me" />
                  </div>
                  <h2>Light Addiction</h2>
                  <h3>Linocut print on paper</h3>
                </td>
              </tr>
            </center>
          </table>

          <table className="whole-portfolio">
            <center>
              <tr className="portfolio-wrap">
                <td className="cell">
                  <div className="img-wrap">
                    <img  src="https://i.imgur.com/RPasrbX.png" alt="About Me" />
                  </div>
                  <h2>Still Life Study</h2>
                  <h3>Graphite on Paper</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img src="https://i.imgur.com/msE51Ih.png" alt="About Me" />
                  </div>
                  <h2>Painting of a Man</h2>
                  <h3>Oil paint on canvas</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img  src="https://i.imgur.com/sD6sJdJ.png" alt="About Me" />
                  </div>
                  <h2>Portrait of a Man</h2>
                  <h3>Graphite on paper</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img  src="https://i.imgur.com/dmLoNkb.png" alt="About Me" />
                  </div>
                  <h2>Peruvian Lifestyle</h2>
                  <h3>Marker on paper</h3>
                </td>
              </tr>
            </center>
          </table>

          <Bark />

          <table className="whole-portfolio">
            <center>
              <tr className="portfolio-wrap">
                <td className="cell">
                  <div className="park-wrap">
                    <img className="park-image"src="https://i.imgur.com/LHAEOIo.png" alt="About Me" />
                  </div>
                  <h2>Park of the Future</h2>
                  <h3>Mixed media</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img className="img-effect" src="https://i.imgur.com/UkzYOhZ.png" alt="About Me" />
                  </div>
                  <h2>Judgement</h2>
                  <h3>Mixed media</h3>
                </td>
              </tr>
            </center>
          </table>

          <table className="whole-portfolio">
            <center>
              <tr className="portfolio-wrap">
                <td className="cell">
                  <div className="img-wrap">
                    <img src="https://i.imgur.com/eS5rNtK.png" alt="About Me" />
                  </div>
                  <h2>Gone Fishing</h2>
                  <h3>Yarn on cardboard</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img className="img-effect" src="https://i.imgur.com/Q8OoIZC.png" alt="About Me" />
                  </div>
                  <h2>Inner Beauty</h2>
                  <h3>Acrylic on canvas</h3>
                </td>
                <td className="cell">
                  <div className="img-wrap">
                    <img src="https://i.imgur.com/TBVx4iS.png" alt="About Me" />
                  </div>
                  <h2>Drone Brochure</h2>
                  <h3>Adobe illustrator</h3>
                </td>
              </tr>
            </center>
          </table>
        </div>
        <div className="scroll-text">
        <h2 className="scroll-text" onClick={handleScrollToTop}>
          Scroll to top
        </h2>
        </div>
      </div>
    </>
  );
}

export default Portfoliopage;

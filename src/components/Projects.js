import React from "react";
import "./Card.css";
import Item from "./Item";

function Projects() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="cards">
        <h1>Projects</h1>
        <p>Explore some projects that I am passionate about!</p>
        <div className="cards__container">
          <div className="cards__wrapper">
          <ul className="cards__items">
              <Item
                src="/Bin.gif"
                text="IntelliBin is an AI trashcan that handles your trash sorting for you! Simply place your trash onto our machine, and watch it be sorted automatically by IntelliBin's servo arm! Furthermore, track your stats and learn more about recycling on our React.js website connected to a MongoDB database.                !"
                label="IntelliBin"
                path="https://github.com/asyf16/Intellibin"
              />
            </ul>

            <ul className="cards__items">
              <Item
                src="/eyeDentify.gif"
                text="Never forget a face again! Made using Python's face recognition library, EyeDentify is a Raspberry Pi powered headset that allows you to see the world from your normal point of view, but inlaid with real-time facial recognition!"
                label="EyeDentify"
                path="https://github.com/asyf16/EyeDentify"
              />
            </ul>
            <ul className="cards__items">
              <Item
                src="/CalTrack.gif"
                text="Don't give up on your New Year's resolution just yet... Created using Google Cloud's Vision API, CalTrack is an intuitive application that allows you to detect and track the calories in every meal with AI from a simple photo of your food!"
                label="CalTrack"
                path="https://github.com/asyf16/CalTrack"
              />
            </ul>
            <ul className="cards__items">
              <Item
                src="/Calc.gif"
                text="Created for my high school, the Student Average Calculator increased the administration's efficiency by 240%, allowing instant calculation of every student's average based on specific requirements by simply uploading a spreadsheet of the student data. "
                label="Student Average Calculator"
                path="https://github.com/asyf16/Average-Calculator"
              />
            </ul>
          </div>
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

export default Projects;

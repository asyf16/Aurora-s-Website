import React , {useEffect} from "react";
import "./Aboutinfo.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'


function Aboutinfo() {
  useEffect(()=>{
    Aos.init({duration:1500});

  }, [])
  return (
    <section className="about">
      <div className="wrap">
        <div className="one">
          <center>
            {" "}
            <img data-aos="fade-in" src="https://i.imgur.com/f1RKanu.png" alt="About Me" />
          </center>
        </div>
        <div className="two">
            <div className="text-container">
          <h1 data-aos="fade-in">About Me</h1>
          <p data-aos="fade-in" data-aos-delay="300" className="about-text">
            Hi! I'm Aurora, a first year student at the University of Waterloo.
          </p>
          <p data-aos="fade-in" data-aos-delay="600" className="about-text">
            My hobbies include painting, creating new recipes in the kitchen,
            and fishing. I also enjoy going to the gym and fencing 🤺.
          </p>
          </div>
          <div data-aos="fade-in"data-aos-delay="800" className="socials">
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/aurorashi16/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link github"
              to="https://github.com/asyf16"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/aurora-shi-387656247/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              className="social-icon-link download"
              to="https://drive.google.com/drive/folders/1LxYEXHacO-xeabSRKWcw-p50hZqi-ae6?usp=drive_link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDownload} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutinfo;

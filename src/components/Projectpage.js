import React, {useEffect} from "react";
import "./Projectpage.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

function Projectpage() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      useEffect(()=>{
        Aos.init({duration:1500});
    
      }, [])
  return (
    <>
      <div className="project-container">
        <div className="p-contain-1">
          <div className="links-wrap">
            <Link to="https://github.com/asyf16/Intellibin" target="_blank">
              <img data-aos="fade-in" data-aos-delay="400" className= "demo-image" src="/Bin.gif" alt="Intellibin"></img>
            </Link>
            <center>
              <Link
                to="https://devpost.com/software/intellibin-4qu7co"
                target="_blank"
              >
                <button  data-aos="fade-in">Devpost</button>
              </Link>
              <Link
                to="https://www.youtube.com/watch?v=fziGIb2MTAk&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MjM4NTE&feature=emb_title"
                target="_blank"
              >
                <button  data-aos="fade-in">Demo</button>
              </Link>
            </center>
          </div>
        </div>
        <div className="p-contain-2">
          <h1  data-aos="fade-in">IntelliBin</h1>
          <p  data-aos="fade-in">
            IntelliBin is an AI trashcan that handles your trash sorting for
            you! Simply place your trash onto our machine, and watch it be
            sorted automatically by IntelliBin's servo arm!
          </p>
          <p  data-aos="fade-in">
            {" "}
            Furthermore, track your stats and learn more about recycling on our
            React.js website connected to Firebase. Second place
            overall winner at DeltaHacks X.
          </p>
          <div className="icon-wrap">
            <button  data-aos="fade-in"className="icon-house">
              <p>MongoDB</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>FireBase</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>React.js</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Javascript</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Python</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Arduino</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>C++</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Google Vision API</p>
            </button>
          </div>
        </div>
        <img  data-aos="fade-in"className="divider" src="https://i.imgur.com/UihZNpk.png" alt="divider"></img>
      </div>

      <div className="project-container">
        <div className="p-contain-2">
          <h1 data-aos="fade-in">EyeDentify</h1>
          <p data-aos="fade-in">
            Never forget a face again! Made using Python's face recognition
            library, EyeDentify is a Raspberry Pi powered headset that allows
            you to see the world from your normal point of view, but inlaid with
            real-time facial recognition!
          </p>
          <div className="icon-wrap">
            <button  data-aos="fade-in"className="icon-house">
              <p>MongoDB</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>React.js</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Javascript</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Python</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Raspberry PI</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>AWS</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>OpenCV</p>
            </button>
          </div>
        </div>
        <div className="p-contain-1">
          <div className="links-wrap">
            <Link to="https://github.com/asyf16/eyeDentify" target="_blank">
              <img data-aos-delay="400"  data-aos="fade-in"className= "demo-image" src="/eyeDentify.gif"  alt="eyeDentify"></img>
            </Link>
            <center>
              <Link to="https://github.com/asyf16/eyeDentify" target="_blank">
                <button data-aos="fade-in">Github</button>
              </Link>
              <Link to="https://youtu.be/KergMVdy5mk" target="_blank">
                <button data-aos="fade-in">Demo</button>
              </Link>
            </center>
          </div>
        </div>
        <img  data-aos="fade-in"className="divider" src="https://i.imgur.com/UihZNpk.png" alt="divider"></img>
      </div>

      <div className="project-container">
        <div className="p-contain-1">
          <div className="links-wrap">
            <Link to="https://github.com/asyf16/calTrack" target="_blank">
              <img data-aos-delay="400"  data-aos="fade-in"className= "demo-image" src="/CalTrack.gif"  alt="Caltrack"></img>
            </Link>
            <center>
              <Link to="https://github.com/asyf16/calTrack" target="_blank">
                <button data-aos="fade-in">Github</button>
              </Link>
              <Link
                to="https://devpost.com/software/caltrack-xjzb6k"
                target="_blank"
              >
                <button data-aos="fade-in">Devpost</button>
              </Link>
            </center>
          </div>
        </div>
        <div className="p-contain-2">
          <h1 data-aos="fade-in">CalTrack</h1>
          <p data-aos="fade-in">
            Don't give up on your New Year's resolution just yet... Created
            using Google Cloud's Vision API, CalTrack is an intuitive
            application that allows you to detect and track the calories in
            every meal with AI from a simple photo of your food!
          </p>
          <div className="icon-wrap">
            <button  data-aos="fade-in"className="icon-house">
              <p>Google Cloud Vision API</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Python</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>OpenCV</p>
            </button>
            <button data-aos="fade-in" className="icon-house">
              <p>Tkinter</p>
            </button>
          </div>
        </div>
        <img  data-aos="fade-in"className="divider" src="https://i.imgur.com/UihZNpk.png" alt="divider"></img>
      </div>

      <div className="project-container">
        <div className="p-contain-2">
          <h1 data-aos="fade-in">Average Calculator</h1>
          <p data-aos="fade-in">
            Created for my high school, the Student Average Calculator increased
            the administration's efficiency by 240%, allowing instant
            calculation of every student's average based on specific
            requirements by simply uploading a spreadsheet of the student data.
          </p>
          <div className="icon-wrap">
            <button  data-aos="fade-in"className="icon-house">
              <p>Python</p>
            </button>
            <button  data-aos="fade-in"className="icon-house">
              <p>Tkinter</p>
            </button>
            <button data-aos="fade-in" className="icon-house">
              <p>Python CSV Library</p>
            </button>
          </div>
        </div>
        <div className="p-contain-1">
          <div className="links-wrap">
            <Link to="https://github.com/asyf16/Average-Calculator" target="_blank">
              <img data-aos-delay="400" data-aos="fade-in" className= "demo-image" src="/Calc.gif"  alt="Calculator"></img>
            </Link>
            <center>
              <Link to="https://github.com/asyf16/Average-Calculator" target="_blank">
                <button data-aos="fade-in">Github</button>
              </Link>
            </center>
          </div>
        </div>
      </div>

      <div className="scroll-text">
        <h2 className="scroll-text" onClick={handleScrollToTop}>
          Scroll to top
        </h2>
        </div>
    </>
  );
}

export default Projectpage;

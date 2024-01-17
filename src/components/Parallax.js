import React, {useRef, Component} from 'react'
import './Parallax.css'

function Parallax () {



    window.addEventListener('scroll', () =>{
        let value = window.scrollY;
        document.getElementById('leaf').style.top= value * -1.3 + 'px';
        document.getElementById('leaf').style.left= value * 1.3 + 'px';
        document.getElementById('hill1').style.top= value * 1.1 + 'px';
        document.getElementById('hill2').style.left= value * -1.2 + 'px';
        document.getElementById('hill3').style.left= value * 0.8 + 'px';
        document.getElementById('hill4').style.left= value * 1.2 + 'px';

    });

  return (
    <div className="parallax-wrap">
    <section className="parallax">
        <img src="https://i.imgur.com/OJauhRm.png" alt="background" id="hill1"></img>
        <img src="https://i.imgur.com/xtLAOdY.png" alt="background" id="hill2"></img>
        <img src="https://i.imgur.com/59hKV3G.png" alt="background"id="hill3" ></img>
        <img src="https://i.imgur.com/evUj7ik.png" alt="background" id="hill4"></img>

        <img src="https://i.imgur.com/3J2Yqsk.png" alt="background" id="leaf"></img>
        <img src="https://i.imgur.com/tzTBnut.png" alt="background" ></img>
        <h1 className="parallaxproject">Projects</h1>


    </section>
    </div>
  )
}

export default Parallax
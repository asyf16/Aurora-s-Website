import "./Homesection.css";
import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Aboutinfo from "./Aboutinfo";

function Homesection() {
  const ref = useRef(null);
  const scrollAbout = () => {
    console.log("hi");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const words = [
    "Hello!",
    "您好!",
    "Bonjour!",
    "Hola!",
    "Guten Tag!",
    "Ciao!",
    "السلام عليكم!",
    "こんにちは!",
    "안녕하세요!",
    "नमस्ते!",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const type = () => {
    // Current word
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;
    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 70 : 80);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return (
    <>
      <div className="hero-container" id="home">
        <video src="/bg2.mp4" autoPlay loop muted />
        <div className="hero-content">
          <h2>{text} I'm</h2>
          <h1>Aurora Shi,</h1>
          <p>A Software Engineering student at the University of Waterloo</p>
          <div class="field">
            <div class="scroll" onClick={scrollAbout}></div>
          </div>
        </div>
      </div>
      <section ref={ref} id="about">
        <Aboutinfo />
      </section>
    </>
  );
}

export default Homesection;

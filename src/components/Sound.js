import React, {Component, useState} from 'react'
import "../App.css"
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

function Sound() {
    const bgMusic = new Audio('/bg.mp3')
    let isPlaying = false;
    const playMusic = () => {
        if (isPlaying){
            bgMusic.pause();
            isPlaying = false;
        }
        else{
            bgMusic.play();
            isPlaying = true;
        }
    }
  return (
    <>
    <section>
    <button className="soundbutton" onClick={playMusic}>{isPlaying? (<FontAwesomeIcon icon={faVolumeXmark} />) : (<FontAwesomeIcon icon={faVolumeHigh} />) } </button>
    </section>
    </>
  )
}

export default Sound
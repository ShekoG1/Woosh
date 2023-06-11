import React from 'react';
import { Button } from './button';
import "../App.css";
import "./styles/hero.css";

function Hero() {
  return (
    <div className='hero-container'>
        <video src='/videos/intro.mp4' autoPlay loop muted/>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle="btn-outline" buttonSize="btn-large">
                Book a Trip!
            </Button>
            <Button className="btns" buttonStyle="btn-primary" buttonSize="btn-large">
                View the tour <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default Hero
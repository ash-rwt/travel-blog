import React from 'react'
import Button from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div class="hero-btns">
                <Button className="btns" 
                        buttonStyle="btn--outline" 
                        buttonSize="btn--large">
                    Get Started
                </Button>
                <Button className="btns" 
                        buttonStyle="btn--primary" 
                        buttonSize="btn--large">
                    Watch Trailor <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

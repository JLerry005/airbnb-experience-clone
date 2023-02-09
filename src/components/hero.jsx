import React from 'react';
import PhotoGrid from '../assets/photo-grid.svg'

const Hero = () => {
    return (
        <section className='hero--container'>
            <img className='hero--photo' src={PhotoGrid} alt="" />
            <h1 className='hero--header'>Online experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero; 
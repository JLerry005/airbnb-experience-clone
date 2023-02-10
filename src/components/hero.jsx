import React from 'react';
import PhotoGrid from '../assets/photo-grid.svg'

const Hero = () => {
    // const date = new Date()
    // const hours = date.getHours() % 24;
    // let timeOfDay;

    // if (hours < 12) {
    //     timeOfDay = 'Morning'
    // } else if (hours >= 12 && hours < 17) {
    //     timeOfDay = 'Afternoon'
    // } else {
    //     timeOfDay = 'Evening'
    // };

    return (
        <section className='hero--container'>
            <img className='hero--photo' src={PhotoGrid} alt="" />
            <h1 className='hero--header'>Online experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            {/* <h1>Good {timeOfDay}!</h1> */}
        </section>


    )
}

export default Hero; 
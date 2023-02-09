import React from 'react';
import Photo from '../assets/katie-zaferes.png';
import Star from '../assets/star.png'

const card = () => {
    return (

        <div className='card'>
            <img src={Photo} alt="" />
            <div className='card--stats'>
                <img className='card--star' src={Star} alt="star" />
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>

    )
}

export default card;
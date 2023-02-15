import React from 'react';
import Photo from '../assets/katie-zaferes.png';
import Star from '../assets/star.png'

const card = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <img src={props.img} alt="card-img" className='card--image' />
            <div className='card--stats'>
                <img className='card--star' src={Star} alt="star" />
                <span>{props.rating}</span>
                <span className='gray'>({props.review}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>

    )
}


export default card;
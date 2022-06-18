import './Card.css';
import React from "react";
import personImage from '../../assets/images/katie-zaferes.png';
import starIcon from '../../assets/images/star-icon.png';
import ellipseIcon from '../../assets/images/ellipse-icon.png';

export default function Card () {
    return (
        <section className='card'>
            <img src={personImage} alt='Katie Zaferes' className='card--person-image' />
            <div className='card--experience-availabilty-text-container'></div>
            <p className='card--experience-availabilty-text'>SOLD OUT</p>
            <img src={starIcon} alt='Sta Icon' className='card--star-icon' />
            <img src={ellipseIcon} alt='Ellipse Icon' className='card--ellipse-icon' />
            <h6 className='card--average-star-rating'>5.0</h6>
            <h6 className='card--number-of-ratings'>(6)</h6>
            <h6 className='card--country-abbreviation'>USA</h6>
            <h6 className='card--experience-title'>Life lessons with Katie Zaferes</h6>
            <p className='card--experience-price'>From $136 / person</p>
        </section>
    )
}

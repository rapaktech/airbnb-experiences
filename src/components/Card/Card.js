import './Card.css';
import React from "react";

export default function Card (props) {
    return (
        <section className='card'>
            <img src={props.personImage} alt={props} className='card--person-image' />
            <div className='card--experience-availabilty-text-container'></div>
            <p className='card--experience-availabilty-text'>{props.availabilityStatusText}</p>
            <img src={props.starIcon} alt={props.starIconAltText} className='card--star-icon' />
            <img src={props.ellipseIcon} alt={props.ellipseIconAltText} className='card--ellipse-icon' />
            <h6 className='card--average-star-rating'>{props.averageStarRating}</h6>
            <h6 className='card--number-of-ratings'>({props.numberOfRatings})</h6>
            <h6 className='card--country-abbreviation'>{props.countryAbbreviation}</h6>
            <h6 className='card--experience-title'>{props.title}</h6>
            <p className='card--experience-price'>{props.price}</p>
        </section>
    )
}

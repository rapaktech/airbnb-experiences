import './Card.css';
import React from "react";

export default function Card (props) {
    return (
        <div className='card'>
            <img src={props.personImage} alt={props.personImageAltText} className='card--image' />
            <div className='card--stats'>
                <img src={props.starIcon} alt={props.starIconAltText} className='card--star' />
                <span>{props.averageStarRating}</span>
                <span className='grey'>({props.numberOfRatings}) • </span>
                <span className='grey'>{props.countryAbbreviation}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

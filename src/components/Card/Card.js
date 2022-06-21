import './Card.css';
import React from "react";
import starIcon from '../../assets/icons/star-icon.png';

export default function Card (props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }
    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.personImage} alt={props.personImageAltText} className='card--image' />
            <div className='card--stats'>
                <img src={starIcon} alt='Star Icon' className='card--star' />
                <span>{props.averageStarRating}</span>
                <span className='grey'>({props.numberOfRatings}) • </span>
                <span className='grey'>{props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

import './Hero.css';
import React from 'react';
import photoGrid from '../../assets/images/image-grid.png';

export default function Hero () {
    return (
        <section className='hero'>
            <img src={photoGrid} alt='Grid showing different people doing different actitvities' className='hero--photo' />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

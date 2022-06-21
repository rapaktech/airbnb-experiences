import './Home.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import cardData from '../../data/cardData';

export default function Home () {
  const cards = cardData.map(card => {
    return <Card {...card} />;
  });

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

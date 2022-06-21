import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import cardData from './data/cardData';

export default function App () {
  const cards = cardData.map(card => {
    return <Card {...card} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

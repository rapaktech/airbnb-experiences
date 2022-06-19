import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import personImage from './assets/images/katie-zaferes.png';
import starIcon from './assets/icons/star-icon.png';
import ellipseIcon from './assets/icons/ellipse-icon.png';

export default function App () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        personImage={personImage}
        personImageAltText='Katie Zaferes'
        availabilityStatusText='SOLD OUT'
        starIcon={starIcon}
        starIconAltText='Star Icon'
        ellipseIcon={ellipseIcon}
        ellipseIconAltText='Ellipse Icon'
        averageStarRating='5.0'
        numberOfRatings='6'
        countryAbbreviation='USA'
        title='Life lessons with Katie Zaferes'
        price='From $136 / person'
      />
    </div>
  );
}

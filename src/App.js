import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

export default function App () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

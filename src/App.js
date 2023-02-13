import './App.css';
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'

import Photo from './assets/katie-zaferes.png';

function App() {
  return (
    <div className="app--container">
      <Navbar />
      {/* <Hero /> */}
      <Card
        img={Photo}
        rating="5.0"
        review={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;

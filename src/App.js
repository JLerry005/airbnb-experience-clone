import './App.css';
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import data from './components/data'

import Photo from './assets/katie-zaferes.png';

function App() {

  const card = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <section className='card--container'>
        {card}
      </section>

    </div>
  );
}

export default App;

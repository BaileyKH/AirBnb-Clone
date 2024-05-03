import './App.css'
import { NavBar } from './Components/NavBar'
import { Hero } from './Components/Hero'
import { Card } from './Components/Card'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <div className="cards-block">
        <Card 
          img="/src/assets/card images/image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price="$136"
        />
        <Card
          img="/src/assets/card images/wedding-photography 1.png"
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price="From $125" 
        />
        <Card
          img="/src/assets/card images/mountain-bike 1.png"
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price="From $50" 
        />
      </div>
    </>
  )
}

export default App

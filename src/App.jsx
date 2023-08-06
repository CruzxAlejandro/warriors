import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/Users/cruzlopez/warriors/warriors/src/custom.scss'
import PlayerCard from './components/player-card/PlayerCard'
import Nav from './components/nav/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <PlayerCard/>
    </>
  )
}

export default App

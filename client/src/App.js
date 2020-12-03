import './App.css';
import React, { useState, useEffect } from 'react'



import Draw from './components/Draw'

const tarot = require('tarot-deck')

function App() { 

  const [deck, setDeck] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    let drawnDeck = []
    const drawSet = new Set([])
    let sanitizedDeck = []
    while (drawSet.size < 3) {
      const newCard = tarot.drawCard()
      if (newCard.suit === 'major') {
          drawSet.add(newCard)
        }
      }

    drawnDeck = [...drawSet]
    for (let i = 0; i < 3; i++) {
      const drawnCard = {
        name: drawnDeck[i].name,
        rank: drawnDeck[i].rank,
        reversed: drawnDeck[i].reversed,
        meaning: drawnDeck[i].reversed === false ? 
        drawnDeck[i].meanings.light[Math.floor(Math.random() * drawnDeck[i].meanings.light.length)] :
        drawnDeck[i].meanings.shadow[Math.floor(Math.random() * drawnDeck[i].meanings.shadow.length)]
      }

      sanitizedDeck.push(drawnCard)
      
    }
    setDeck(sanitizedDeck)
    console.log(sanitizedDeck)
  }


  return (
    <div className="App">
      <h1>Tarem Scarem</h1>
      <Draw handleSubmit={handleSubmit} deck={deck}/>
      
    </div>
  );
}

export default App;

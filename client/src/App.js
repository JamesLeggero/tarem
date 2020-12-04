import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'



import Draw from './components/Draw'
import AllReadings from './components/AllReadings'

const tarot = require('tarot-deck')

function App() { 

  const [deck, setDeck] = useState([])
  const [allReadings, setAllReadings] = useState([])

   useEffect (()=>{
    (async ()=>{
      try {
        const response = await axios.get('http://localhost:3001/api')
        console.log(response.data)
        await setAllReadings(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [deck])


  // useEffect(()=>{

  // }, [allReadings.length])

  // const handleChange = e => {

  // }

  const handleSubmit = async e => {
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
    // console.log(sanitizedDeck)
    // console.log(e.target.name.value)
    try {
      await axios.post('http://localhost:3001/api', {
        name:
          e.target.name.value === '' ? 'Unknown' : e.target.name.value,
        sanitizedDeck: sanitizedDeck
      })
    } catch (error) {
      console.error(error)
    }
    e.target.name.value = ''
  }


  return (
    <div className="App">
      <h1>Tarem Scarem</h1>
      <Draw handleSubmit={handleSubmit} deck={deck}/>
      <AllReadings allReadings={allReadings} />
      
    </div>
  );
}

export default App;

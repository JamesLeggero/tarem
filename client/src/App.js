

import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'



import Draw from './components/Draw'
import AllReadings from './components/AllReadings'

import chariot from './images/chariot.png'
import death from './images/death.png'
import devil from './images/devil.png'
import emperor from './images/emperor.png'
import empress from './images/empress.png'
import fool from './images/fool.png'
import hanged from './images/hanged.png'
import hermit from './images/hermit.png'
import hierophant from './images/hierophant.png'
import judgement from './images/judgement.png'
import justice from './images/justice.png'
import lovers from './images/lovers.png'
import magician from './images/magician.png'
import moon from './images/moon.png'
import priestess from './images/priestess.png'
import star from './images/star.png'
import strength from './images/strength.png'
import sun from './images/sun.png'
import temperance from './images/temperance.png'
import tower from './images/tower.png'
import wheel from './images/wheel.png'
import world from './images/world.png'

const StatsD = require('hot-shots')
const dogstatsd = new StatsD()

dogstatsd.increment('page-views')


const tarot = require('tarot-deck')

function App() { 

  const tarotPool = [
    fool,
    magician,
    priestess,
    empress,
    emperor,
    hierophant,
    lovers,
    chariot,
    strength,
    hermit,
    wheel,
    justice,
    hanged,
    death,
    temperance,
    devil,
    tower,
    star,
    moon,
    sun,
    judgement,
    world
]

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


  //another test line
  //second test line
  const handleSubmit = async e => {
    e.preventDefault()
    setDeck([])
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
    await setDeck(sanitizedDeck)
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
      <div className='fullContainer'>
      <Draw handleSubmit={handleSubmit} deck={deck} tarotPool={tarotPool}/>
      <AllReadings className='allReadingsAppLevel' allReadings={allReadings} tarotPool={tarotPool}/>
      </div>
      
    </div>
  );
}

export default App;

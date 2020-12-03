import React, { useState, useEffect } from 'react'
import './App.css';
import Draw from './components/Draw'

function App() {

  const [card, setCard] = useState({
    name: '',
    reversed: '',
    reading: '',
    img: ''
  })

  const [deck, setDeck] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    console.log('clicked')
  }


  return (
    <div className="App">
      <Draw handleSubmit={handleSubmit} deck={deck}/>
      
    </div>
  );
}

export default App;

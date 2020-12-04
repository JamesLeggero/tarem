import React from 'react'

export default function AllReadings(props) {
    const tarotPool = props.tarotPool
    
    
    return (
        
                <div className='allReadingsContainer'>
            {
                props.allReadings.map(reading =>{
                    return (
                        <div key={reading._id}>
                            <h6>{reading.name}</h6>
                        
                        <div className='smallDrawnContainer' >
                        {
                            reading.sanitizedDeck.map(card => {
                                return (
                                    <div className='smallCardContainer' key={card.rank}>
                                       {
                                           card.reversed === false ?
                                           <img className='smallCard' src={tarotPool[card.rank]} alt={`${tarotPool[card.rank]}`} /> :
                                           <img className='smallCard' src={tarotPool[card.rank]} alt={`${tarotPool[card.rank]}`} style={{transform: 'rotate(0.5turn)'}}/>
                                       }
                                        </div>
                                )
                            })
                        }
                        </div>
                        
                        </div>
                    )
                })
            }
        </div>
    )
}

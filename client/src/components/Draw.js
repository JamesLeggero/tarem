import React from 'react'
import chariot from '../images/chariot.png'
import death from '../images/death.png'
import devil from '../images/devil.png'
import emperor from '../images/emperor.png'
import empress from '../images/empress.png'
import fool from '../images/fool.png'
import hanged from '../images/hanged.png'
import hermit from '../images/hermit.png'
import hierophant from '../images/hierophant.png'
import judgement from '../images/judgement.png'
import justice from '../images/justice.png'
import lovers from '../images/lovers.png'
import magician from '../images/magician.png'
import moon from '../images/moon.png'
import priestess from '../images/priestess.png'
import star from '../images/star.png'
import strength from '../images/strength.png'
import sun from '../images/sun.png'
import temperance from '../images/temperance.png'
import tower from '../images/tower.png'
import wheel from '../images/wheel.png'
import world from '../images/world.png'

export default function Draw(props) {
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

    return (
        <>
        <form onSubmit={props.handleSubmit}>
            <input type='text' className='name' name='name' placeholder='Name' />
            <input type='submit' className='btn' value='New Draw' />
        </form>
        <div className='drawContainer'>
        {
            props.deck.map((card, i) => {
                return (
                    <div className='cardContainer' key={i}>
                        {
                            card.reversed === false ?
                            <img className='drawnCard'  src={tarotPool[card.rank]} alt={`${tarotPool[card.rank]}`} /> :
                            <img className='drawnCard' style={{
                                transform: 'rotate(0.5turn)'
                            }} src={tarotPool[card.rank]} alt={`${tarotPool[card.rank]}`} />
                        }
                        <h4>{card.meaning}</h4>
                    </div>
                )

            })
        }

        </div>
        </>
    )
}
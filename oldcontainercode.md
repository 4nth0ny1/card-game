import Card from "./Card"
import { useState } from 'react'

const CardContainer = (props) => {

    const [ playerOneCards , setPlayerOneCards ] = useState([])

    const cardArray = props.cards.map(card => {
        return <Card key={card.id} card={card} />
    })

    const handleRandomCard = () => {
        setPlayerOneCards(cardArray[Math.floor(Math.random() * cardArray.length)])
    }

    return(
      
            <>
                <button onClick={handleRandomCard}>draw card</button>
                {playerOneCards}
            </>
       
    )
}

export default CardContainer;

------------------------------------
------------------------------------

import Character from "./Character"
import { useState } from 'react'

const CharacterContainer = (props) => {
    
    const [ showCharacters , setShowCharacters ] = useState([])


    const characterArray = props.characters.map(character => {
        if (character.type === 'leader') {
            return <Character key={character.id} src={character.image} character={character} />
        }
    })


    //this should be .filter 'ing out leader then iterating.
    const addToCharacterArray = props.characters.map(character => {
        if (character.type !== 'leader') {
            return <Character key={character.id} character={character} />
        }
    })

    const handleAddCharacter = () => {
        setShowCharacters(addToCharacterArray[Math.floor(Math.random() * addToCharacterArray.length)])
    }

    return(
        <>
            <button onClick={handleAddCharacter}>add character</button>
            {characterArray}
            {showCharacters}
        </>
    )
}

export default CharacterContainer;

// make an image all the player sees instead of the information. if they hover over the image then it will show the character's current stats. 

------------------------------------
------------------------------------

import Character from "./Character"

const OpponentContainer = (props) => {


    const opponentArray = props.characters.map(character => {
        if (character.type === 'leader') {
            return <Character key={character.id} character={character} />
        }
    })

    return(
        <>
            <button>add character</button>
            {opponentArray}
        </>
    )
}

export default OpponentContainer;
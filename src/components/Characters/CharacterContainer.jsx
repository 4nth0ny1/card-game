import Character from "./Character"
import { useState } from 'react'

const CharacterContainer = (props) => {
    
    const [ showCharacters , setShowCharacters ] = useState([])


    const characterArray = props.characters.map(character => {
        if (character.type === 'leader') {
            return <Character key={character.id} character={character} />
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
            <hr></hr>
            <button onClick={handleAddCharacter}>add character</button>
            {characterArray}
            {showCharacters}
        </>
    )
}

export default CharacterContainer;

// make an image all the player sees instead of the information. if they hover over the image then it will show the character's current stats. 
import Character from "./Character"

const CharacterContainer = (props) => {


    const characterArray = props.characters.map(character => {
        if (character.type === 'leader') {
            return <Character key={character.id} character={character} />
        }
    })

    return(
        <>
            <button>add character</button>
            {characterArray}
        </>
    )
}

export default CharacterContainer;
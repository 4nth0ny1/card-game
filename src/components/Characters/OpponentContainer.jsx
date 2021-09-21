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
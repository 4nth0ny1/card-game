import Character from "./Character"

const OpponentContainer = (props) => {


    const opponentArray = props.characters.map(character => {
        if (character.type === 'leader') {
            return <Character key={character.id} character={character} />
        }
    })

    return(
        <>
            <hr></hr>
            <button>add character</button>
            {opponentArray}
        </>
    )
}

export default OpponentContainer;
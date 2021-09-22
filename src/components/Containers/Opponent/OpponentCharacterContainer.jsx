import Character from '../../Singles/Character'

const OpponentCharacterContainer = (props) => {

    const cardArray = props.characters.map(character => {
            return <Character key={character.id} src={character.image} character={character} />
    })

    return (
        <>
            {cardArray}
        </>
    )
}

export default OpponentCharacterContainer
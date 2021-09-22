import Character from '../../Singles/Character'

const OpponentCharacterContainer = (props) => {

    const findLeader = props.characters.map(character => {
        if (character.type === 'leader') {
            return <Character key={character.id} src={character.image} character={character} />
        }
    })

    return (
        <>
            {findLeader}
        </>
    )
}

export default OpponentCharacterContainer
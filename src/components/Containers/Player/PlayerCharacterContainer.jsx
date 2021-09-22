import Character from '../../Singles/Character'

const PlayerCharacterContainer = (props) => {

    const playerArray = props.characters.map(character => {
       
            return <Character key={character.id} src={character.image} character={character} />
        
    })

    return (
        <>
            {playerArray}
        </>
    )
}

export default PlayerCharacterContainer
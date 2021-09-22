import Card from '../../Singles/Card'

const PlayerHandContainer = (props) => {

    const PlayerCardArray = props.cards.map(card => {    
        return <Card key={card.id} card={card} />
    })

    return (
        <>
            {PlayerCardArray}
        </>
    )
}

export default PlayerHandContainer
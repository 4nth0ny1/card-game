import Card from '../../Singles/Card'

const PlayerBoardContainer = (props) => {

    const cardArray = props.cards.map(card => {
            return <Card key={card.id} src={card.image} card={card} />
    })

    return (
        <>
            {cardArray}
        </>
    )
}

export default PlayerBoardContainer
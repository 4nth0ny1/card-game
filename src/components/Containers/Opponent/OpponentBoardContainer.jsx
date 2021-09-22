import Card from '../../Singles/Card'

const OpponentBoardContainer = (props) => {

    const cardArray = props.cards.map(card => {
            return <Card key={card.id} src={card.image} card={card} />
    })

    return (
        <>
            {cardArray}
        </>
    )
}

export default OpponentBoardContainer
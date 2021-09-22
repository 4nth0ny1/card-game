import Card from '../../Singles/Card'

const OpponentHandContainer = (props) => {

    const OpponentCardArray = props.cards.map(card => {    
        return <Card key={card.id} card={card} />
    })

    return (
        <>
            {OpponentCardArray}
        </>
    )
}

export default OpponentHandContainer
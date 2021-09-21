import Card from "./Card"
import { useState } from 'react'

const CardContainer = (props) => {

    const [ playerOneCards , setPlayerOneCards ] = useState([])

    const cardArray = props.cards.map(card => {
        return <Card key={card.id} card={card} />
    })

    const handleRandomCard = () => {
        setPlayerOneCards(cardArray[Math.floor(Math.random() * cardArray.length)])
    }

    return(
      
            <>
                <button onClick={handleRandomCard}>draw card</button>
                {playerOneCards}
            </>
       
    )
}

export default CardContainer;
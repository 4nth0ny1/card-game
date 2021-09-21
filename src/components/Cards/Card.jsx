const Card = (props) => {

    return (
        <>  
        
            <p>id: {props.card.id}</p>      
            <p>name: {props.card.name}</p>      
            <p>rarity: {props.card.rarity}</p>      
            <p>attack: {props.card.attack}</p>      
            <p>defense: {props.card.defense}</p>    
            <hr></hr>  
        </>
    ) 
}

export default Card;
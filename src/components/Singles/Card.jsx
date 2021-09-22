const Card = (props) => {

    return (
        <>  
            <div className="card"> 
                <p>{props.card.name}</p>      
                <p>{props.card.rarity}</p>      
                <p><span className="swords">⚔</span> {props.card.attack} <span className="defense">⚓</span> {props.card.defense}</p>      
                <p></p> 
            </div>   
        
        </>
    ) 
}

export default Card;
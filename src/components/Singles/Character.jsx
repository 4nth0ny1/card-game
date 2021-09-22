const Character = (props) => {

    return (
        <>    
            <div className="card"> 
            
                <p>{props.character.name}, {props.character.type}</p>  
                <p><span className="swords">⚔</span> {props.character.attack} <span className="heart">❤</span> {props.character.life}</p>    
                <p>{props.character.primary_skill} & {props.character.secondary_skill}</p>  
            </div>
        </>
    ) 
}

export default Character;
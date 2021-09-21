const Character = (props) => {

    return (
        <>  
        
            <p>id: {props.character.id}</p>      
            <p>name: {props.character.name}</p>   
            <img alt="character thumbnail" className="character-thumbnail" href={props.character.image}></img>    
            <p>type: {props.character.type}</p>  
            <p>attack: {props.character.attack}</p>      
            <p>life: {props.character.life}</p>    
            <p>primary skill: {props.character.primary_skill}</p>  
            <p>secondary skill: {props.character.secondary_skill}</p>  
            
        </>
    ) 
}

export default Character;
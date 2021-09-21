const Character = (props) => {

    return (
        <>  
        
            <p>id: {props.character.id}</p>      
            <p>name: {props.character.name}</p>      
            <p>type: {props.character.type}</p>  
            <p>attack: {props.character.attack}</p>      
            <p>defense: {props.character.defense}</p>    
            <p>primary skill: {props.character.primary_skill}</p>  
            <p>secondary skill: {props.character.secondary_skill}</p>  
            <hr></hr>  
        </>
    ) 
}

export default Character;
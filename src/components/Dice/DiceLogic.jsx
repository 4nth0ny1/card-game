import React, { Component } from 'react'
import { useState } from 'react'

const DiceLogic = () => {

    const [ playerOneDi , setPlayerOneDice ] = useState(0)
    const [ playerTwoDi , setPlayerTwoDice ] = useState(0)


    const handleClick = (e) => {
        setPlayerOneDice(Math.floor(Math.random() * (6) + 1))
        setPlayerTwoDice(Math.floor(Math.random() * (6) + 1))
    }

    return(
        <>
            <p>{playerTwoDi}</p>
            <p>{playerOneDi}</p>
            <button onClick={handleClick}>fight</button>          
        </>
    )

}
export default DiceLogic;

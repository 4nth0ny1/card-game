import './App.css';
import React from 'react'

// import DiceLogic from './Components/Dice/DiceLogic'

import OpponentHandContainer from './Components/Containers/Opponent/OpponentHandContainer'
import OpponentCharacterContainer from './Components/Containers/Opponent/OpponentCharacterContainer'
import OpponentBoardContainer from './Components/Containers/Opponent/OpponentBoardContainer'
import PlayerBoardContainer from './Components/Containers/Player/PlayerBoardContainer'
import PlayerCharacterContainer from './Components/Containers/Player/PlayerCharacterContainer'
import PlayerHandContainer from './Components/Containers/Player/PlayerHandContainer'


function App(props) {
  
    const characters = [
        {
        id: 1, 
        name: "O'Neil",
        image: './images/warrior.png',
        type: 'leader',
        attack: 10, 
        life: 100, 
        primary_skill: 'leadership',
        secondary_skill: 'coerce'
        }, 
        {
        id: 2, 
        name: 'Carter',
        image: './images/carter.png',
        type: 'engineer',
        attack: 10, 
        life: 100, 
        primary_skill: '',
        secondary_skill: ''
        }, 
        {
        id: 3, 
        name: "Teal'c",
        image: './images/carter.png',
        type: 'assault',
        attack: 20, 
        life: 100, 
        primary_skill: '',
        secondary_skill: ''
        }
    ]

    const cards = [
        {
        id: 1,
        image: './images/carter.png',
        name: 'p90',
        rarity: 'rare', //rare, uncommon, common
        attack: Math.floor(Math.random() * (12) + 7),
        defense: Math.floor(Math.random() * (12) + 7)
        },
        {
        id: 2,
        image: './images/carter.png',
        name: 'ak47',
        rarity: 'uncommon', //rare, uncommon, common
        attack: Math.floor(Math.random() * (7) + 3),
        defense: Math.floor(Math.random() * (7) + 3)
        },
        {
        id: 3,
        image: './images/carter.png',
        name: 'glock',
        rarity: 'common', //rare, uncommon, common
        attack: Math.floor(Math.random() * (3) + 1),
        defense: Math.floor(Math.random() * (3) + 1)
        },
        {
        id: 4,
        image: './images/carter.png',
        name: 'barrett 50cal',
        rarity: 'rare', //rare, uncommon, common
        attack: Math.floor(Math.random() * (15) + 8),
        defense: Math.floor(Math.random() * (15) + 8)
        },
        {
        id: 5,
        image: './images/carter.png',
        name: 'm4',
        rarity: 'uncommon', //rare, uncommon, common
        attack: Math.floor(Math.random() * (7) + 3),
        defense: Math.floor(Math.random() * (7) + 3)
        },
        {
        id: 6,
        image: './images/carter.png',
        name: 'silenced pp7',
        rarity: 'common', //rare, uncommon, common
        attack: Math.floor(Math.random() * (4) + 2),
        defense: Math.floor(Math.random() * (4) + 2)
        },
    ]





  return (
    <>
      <div className="App">
          <div className="opponent-hand-container"><OpponentHandContainer cards={cards}/></div>
          <div className="opponent-character-container"><OpponentCharacterContainer  characters={characters} /></div>
          <div className="board-container">
            <div className="opponent-board-container"><OpponentBoardContainer cards={cards}/></div>
            <hr></hr>
            <div className="player-board-container"><PlayerBoardContainer cards={cards}/></div>
          </div>
          <div className="player-dash-container">
            <div className="player-character-container"><PlayerCharacterContainer characters={characters}/></div>
            <div className="player-hand-container"><PlayerHandContainer cards={cards}/></div>
          </div>
          {/* <div className="dice-logic-container"><DiceLogic /></div> */}
      </div>
    </>


  )
        
}

export default App;




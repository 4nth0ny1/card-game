import './App.css';
import React from 'react'
import DiceLogic from './components/Dice/DiceLogic';
import CardContainer from './components/Cards/CardContainer';
import CharacterContainer from './components/Characters/CharacterContainer';
import OpponentContainer from './components/Characters/OpponentContainer';


function App(props) {

    // types of cards 

    // develop a few cards and then make random values. the user gets to keep those cards for future games. the player can choose to get random cards or save those cards. meaning that you can have your own deck or choose a random type of card instead. 

    //neverending deck. kind of like how in diablo you can. you only keep the upgrades in your deck. as they show up you can elect to keep them or discard them 


    // magic has mana cards, 
    // whites 
    //     base upgrades
    //     card upgrades - upgrade other cards 
    //     dice upgrades - 
    // speciality cards (anyone can use these but not as well)
    //     revive
    //     sniper
    //     engineer
    //     assault
    //     coerce

    //when someone other than the specialty player plays the card then it's .50-.75 effectiveness

    const characters = [
      {
        id: 1, 
        name: 'ajax',
        image: './images/warrior.png',
        type: 'leader',
        attack: 10, 
        life: 100, 
        primary_skill: 'leadership',
        secondary_skill: 'coerce'
      }, 
      {
        id: 2, 
        name: 'carter',
        image: './images/carter.png',
        type: 'engineer',
        attack: 10, 
        life: 100, 
        primary_skill: '',
        secondary_skill: ''
      }, 
      {
        id: 3, 
        name: 'tealc',
        image: './images/carter.png',
        type: 'assault',
        attack: 20, 
        life: 100, 
        primary_skill: '',
        secondary_skill: ''
      }, 
      {
        id: 4, 
        name: 'legend',
        image: '',
        type: 'sniper',
        attack: 10, 
        life: 100, 
        primary_skill: '',
        secondary_skill: ''
      }, 
      {
        id: 4, 
        name: 'maverick',
        image: '',
        type: 'medic',
        attack: 10, 
        life: 100, 
        primary_skill: '',
        secondary_skill: ''
      }, 
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
      <OpponentContainer characters={characters}/>
      <CardContainer cards={cards} />
      <div className="player-dashboard"> 
        <CharacterContainer characters={characters} />
        <DiceLogic />
      </div>
    </div>
    </>

    {/* <>
    <div className="App">
      <OpponentHandContainer />
      <OpponentPlayerContainer />
      <OpponentBoardContainer />
      <hr></hr>
      <PlayerBoardContainer />
      <PlayerPlayerContainer />
      <PlayerHandContainer />
    </div>
    </>
   */}
  );
}

export default App;

import React from 'react'
import players from './Players'
import Player from './Player'

const Playerlist = () => {
  return (
    <div>
        {players.map(e=><Player info={e}></Player>)}
      
    </div>
  )
}

export default Playerlist

import React from 'react';

const PlayerCard = ({player, icon}) => {
  return (
    <div className="player-holder">
      <h1>{player}</h1>
      <img src={icon} alt="Player Icon"/>
    </div>
  )
}

export default PlayerCard;
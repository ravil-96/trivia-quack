import React from 'react';

const PlayerCard = ({player, icon, ready, me}) => {
  return (
    <div className="player-holder">
      <div class="row align-items-center">
        <div class="col-2">
          <img style={{borderRadius: '50px', border : me ? 'solid 4px green' : null}} src={icon} alt="Player Icon"/>
        </div>
        <div class="col-8">
          <h5>Guest-{player} {me && '(you)'}</h5>
        </div>
        <div class="col-2 d-none d-sm-block">
          <span class={ready ? "marker-ready" : "marker-not"}></span>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard;
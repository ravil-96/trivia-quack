import React from 'react';

const ScoreView = ({players}) => {
  return (
    <div className="scoreview">
      <div class="row">
        { players[1] ?
          <div class="second-place col-sm-4">
            <img src={players[1].icon} alt="Player Icon" />
            <span>2nd</span>
            <h5>{players[1].player}</h5>
            <p>{players[1].score}</p>
          </div>
          :
          <></>
        }
        { players[0] ?
          <div class="first-place col-sm-4">
            <img src={players[0].icon} alt="Player Icon" />
            <span>1st</span>
            <h5>{players[0].player}</h5>
            <p>{players[0].score}</p>
          </div>
          :
          <></>
        }
        { players[2] ?
          <div class="first-place col-sm-4">
            <img src={players[2].icon} alt="Player Icon" />
            <span>3st</span>
            <h5>{players[2].player}</h5>
            <p>{players[2].score}</p>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default ScoreView;
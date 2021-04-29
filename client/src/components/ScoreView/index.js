import React from 'react';

const ScoreView = ({players}) => {

  const generateTable = players.map((player, index) => {
    if (index >= 3) {
      return (
        <div className="table-place">
          <img src={player.icon} alt="Player Icon" />
          <span>{index + 1}</span>
          <h5>Guest-{player.player}</h5>
          <p>{player.score}</p>
        </div>
      );
    }
  });

  return (
    <div className="scoreview text-center">
      <div className="row">
        { players[1] ?
          <div className="second-place col-sm-4">
            <img src={players[1].icon} alt="Player Icon" />
            <span>2</span>
            <h5>Guest-{players[1].player}</h5>
            <p>{players[1].score}</p>
          </div>
          :
          <></>
        }
        { players[0] ?
          <div className="first-place col-sm-4">
            <img src={players[0].icon} alt="Player Icon" />
            <span>1</span>
            <h5>Guest-{players[0].player}</h5>
            <p>{players[0].score}</p>
          </div>
          :
          <></>
        }
        { players[2] ?
          <div className="third-place col-sm-4">
            <img src={players[2].icon} alt="Player Icon" />
            <span>3</span>
            <h5>Guest-{players[2].player}</h5>
            <p>{players[2].score}</p>
          </div>
          :
          <></>
        }
      </div>
      { generateTable }
    </div>
  )
}

export default ScoreView;
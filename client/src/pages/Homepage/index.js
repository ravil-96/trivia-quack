import React from 'react';

import { NewGame, JoinGame } from '../../layout';

const Homepage = () => {
  return (
    <main id="homepage" className="container">
      <img className="logo-img" src="../../images/logo.png" alt="Trivia Duck" />
      <img className="planet-left" src="../../images/planet-1.png" alt="Blue Planet" />
      <img className="planet-right" src="../../images/planet-2.png" alt="Orange Planet" />
      <div className="text-center">
      <NewGame />
      <JoinGame />
      </div>
    </main>
  );
};

export default Homepage;
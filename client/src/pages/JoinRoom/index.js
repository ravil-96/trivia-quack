import React from 'react';
import axios from 'axios';

const JoinRoom = () => {

    return (
    <>
       <form>
           <h3>Type URL here to Join Game</h3>
           <p><label for="url">Shared Link</label><input id='url' type='text' name="url" placeholder='Type url here'/>
           </p></form>
           <input type="button" onclick='handleRedirect' value="Join Game"></input>
    </>)

}

export default JoinRoom;
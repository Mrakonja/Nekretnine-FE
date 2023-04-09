import React, { useContext } from 'react';
import { MainContext } from '../Context/MainContext';

const Test = () => {
    const { state, updateUsername } = useContext(MainContext);
    const { username } = state;

const switchName = () => {
 const newName = username === 'Miladin' ? 'Pera' : 'Miladin';
 updateUsername(newName);
};

  return (
    <>
    <div style={{color: 'red'}}>
          {username}
      </div>
      <button onClick={switchName}>
              Promeni ime u {username === 'Miladin' ? 'Pera' : 'Miladin'}
      </button>
    </>
  )
}

export default Test;
import React, { useContext } from 'react';
import { MainContext } from '../Context/MainContext';
import Button from './Button/Button';
import style from './Button/Button.module.scss';

const TestContext = () => {
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
      <Button classes={{color: style.blueWBButton, 
        size: style.defaultButton, 
        text: `Promeni ime u ${username === 'Miladin' ? 'Pera' : 'Miladin'}`}}
         onClick={switchName} >Text</Button>
      
    </>
  )
}

export default TestContext;
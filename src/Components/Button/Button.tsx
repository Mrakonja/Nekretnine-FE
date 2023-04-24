import React from 'react'
import classes from './Button.module.scss';

const Button: React.FC<{ classes: {
    color: string,
    size: string,
    text: string}, onClick: () => void }> = (props) => {
  return (
    <>
    <button className={`${props.classes.color} ${props.classes.size}`} onClick={props.onClick}>{props.classes.text}</button>
    
    
    </>
  )
}

export default Button;
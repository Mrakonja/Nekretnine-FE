import React from "react";

interface Buttonstyle {
  color: string;
  size: string;
  text: string;
}

const Button: React.FC<{
  children: {};
  classes: Buttonstyle;
  onClick: () => void;
}> = ({ classes, onClick }) => {
  return (
    <>
      <button className={`${classes.color} ${classes.size}`} onClick={onClick}>
        {classes.text}
      </button>
    </>
  );
};

export default Button;

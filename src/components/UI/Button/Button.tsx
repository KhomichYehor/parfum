import React from 'react';
import s from './Button.module.scss';

interface Button {
  buttonText: string;
}

const Button: React.FC<Button> = ({buttonText}) => {

  return (
    <button
      className={s.custom__button}
    >
      {buttonText}
      <div className={s.custom__button_counter}>2</div>
    </button>
  );
};

export default Button;

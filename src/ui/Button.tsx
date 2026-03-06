import React from 'react';

interface ButtonProps {
  children: React;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
   button onClick={onClick} aria-label="button">
      {children}
    </button>
  );
};

export default Button;
import React, { HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** 버튼의 children */
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

/** 버튼컴포넌트입니다. */
export const Button = ({ children, ...props }: Props) => {
  const { variant = 'primary' } = props;

  const buttonStyle: React.CSSProperties = {
    backgroundColor: variant === 'primary' ? 'blue' : 'gray',
    color: 'white',
    border: 'none',
    borderRadius: 100,
    padding: 10,
    cursor: 'pointer',
  };

  return (
    <button {...props} style={{ ...buttonStyle }}>
      {children}
    </button>
  );
};

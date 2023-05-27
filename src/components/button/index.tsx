import React from 'react';
import Icon from '../../icons';

export const Button = ({
  style,
  children,
  onClick,
}: {
  style?: any;
  children?: any;
  onClick?: any;
}) => {
  return (
    <span
      className="flex cursor-pointer select-none flex-row items-center justify-center p-1 text-black"
      style={{
        background: 'rgb(202, 198, 203)',
        boxShadow:
          'rgb(70, 65, 71) -1px -1px 0px 0px inset, white 1px 1px 0px 0px inset, rgb(160, 153, 161) -2px -2px 0px 0px inset, rgb(222, 220, 222) 2px 2px 0px 0px inset',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

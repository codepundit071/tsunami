import React from 'react';

export const WebAddress = ({
  address,
  icon,
}: {
  address: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-row gap-2 overflow-clip font-po text-sm font-normal">
      <p className="pl-2 font-bold text-black/50">Address:</p>
      <span
        className="flex flex-1 flex-row items-center gap-2 bg-white px-1 text-sm text-black "
        style={{
          boxShadow:
            'inset -1px -1px 0 #fff, inset 1px 1px 0 0 #808088, inset -2px -2px 0 #bbc3c4, inset 2px 2px 0 0 #0c0c0c',
        }}
      >
        <img src={icon} className="h-4 w-4" />
        {address}
      </span>
    </div>
  );
};

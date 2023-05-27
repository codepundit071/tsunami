import React from 'react';

export const BoxSection = ({
  title,
  children,
}: {
  title: string;
  children?: any;
}) => {
  return (
    <div
      className="relative my-4 w-full self-center border border-white p-[10px] outline outline-1 outline-[#808088]"
      style={{
        boxShadow:
          '-1px -1px 0 #a099a1, -1px 0 0 #a099a1, 0 -1px 0 0 #a099a1, 1px 0 0 #fff, 1px 1px 0 #fff, 0 1px 0 #fff',
      }}
    >
      <div className="absolute top-[-14px] w-min bg-[#cac6cb]">
        <span className="select-none px-1 font-po text-sm font-bold">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

import React, { PropsWithChildren } from 'react';

export interface Props {
  value: boolean;
  setValue: (v: boolean) => void;
}

export const Modal = ({
  value,
  setValue,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`fixed inset-0 z-40${value ? '' : 'pointer-events-none'}`}>
      <div
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className={` absolute inset-0 bg-white bg-opacity-80 transition-opacity duration-500 ease-out${
          value ? 'opacity-75' : 'opacity-0'
        }`}
        onClick={() => setValue(false)}
      />
      <div
        className="absolute inset-x-0 bottom-0 border-t border-gray-200 bg-white transition-all duration-200 ease-out"
        style={value ? {} : { transform: 'translateY(100%)' }}
      >
        {children}
      </div>
    </div>
  );
};

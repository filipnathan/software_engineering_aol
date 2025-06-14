import React from 'react';
import classNames from 'classnames';

export function Input({ className, ...props }) {
  return (
    <input
      className={classNames(
        'w-full rounded-lg border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
        className
      )}
      {...props}
    />
  );
}

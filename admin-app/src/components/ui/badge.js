import React from 'react';
import classNames from 'classnames';

export function Badge({ children, status = 'default', className }) {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <span
      className={classNames(
        'px-2 py-1 text-xs rounded-md font-medium',
        variants[status],
        className
      )}
    >
      {children}
    </span>
  );
}

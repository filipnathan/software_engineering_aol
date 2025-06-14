import React from 'react';
import classNames from 'classnames';

export function Button({ className, children, variant = 'default', ...props }) {
  const baseStyle = 'rounded-2xl px-4 py-2 text-white font-medium shadow';
  const variants = {
    default: 'bg-blue-600 hover:bg-blue-700',
    outline: 'bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 hover:bg-red-700',
    success: 'bg-green-600 hover:bg-green-700',
  };

  return (
    <button
      className={classNames(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

import React from 'react';
import { IconProps } from './types';

export function IconBase({
  size = 24,
  color = 'currentColor',
  children,
  ...rest
}: React.PropsWithChildren<IconProps>) {
  const resolvedSize = typeof size === 'number' ? `${size}` : size;
  return (
    <svg
      width={resolvedSize}
      height={resolvedSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
}

export default IconBase;



import type React from 'react';

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string;
  color?: string;
};



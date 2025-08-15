import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const Lightbulb = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 1.25c-4.54 0-8.25 3.604-8.25 8.085 0 2.745 1.124 5.125 3.781 7.25A.75.75 0 0 0 8 16.75h8a.75.75 0 0 0 .468-.164c2.658-2.126 3.782-4.506 3.782-7.251 0-4.481-3.71-8.085-8.25-8.085" opacity=".4"/><path fill="currentColor" fill-rule="evenodd" d="M10.03 9.47a.75.75 0 1 0-1.06 1.06l2.28 2.28v3.94H8a.75.75 0 0 1-.469-.164L7.5 16.56v.94c0 .631.293 1.194.75 1.56a3.75 3.75 0 0 0 7.5 0c.457-.366.75-.929.75-1.56v-.94l-.032.025a.75.75 0 0 1-.468.164h-3.25v-3.94l2.28-2.28a.75.75 0 1 0-1.06-1.06L12 11.44zM12 21.25a2.25 2.25 0 0 1-2.122-1.5h4.244A2.25 2.25 0 0 1 12 21.25" clip-rule="evenodd"/>
  </IconBase>
);

export default Lightbulb;

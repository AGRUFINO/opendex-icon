import React from 'react';
import IconBase from '../../../../IconBase';
import { IconProps } from '../../../../types';

const MicrophoneCircle = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M9 8a3 3 0 1 1 6 0v3.5a3 3 0 1 1-6 0zm-2 3.25a.75.75 0 0 1 .75.75c0 .981.494 1.912 1.304 2.616.812.705 1.89 1.134 2.946 1.134s2.134-.43 2.946-1.134c.81-.704 1.304-1.635 1.304-2.616a.75.75 0 0 1 1.5 0c0 1.504-.756 2.823-1.82 3.748a6.2 6.2 0 0 1-3.18 1.45V18.5a.75.75 0 0 1-1.5 0v-1.301a6.2 6.2 0 0 1-3.18-1.45C7.007 14.822 6.25 13.503 6.25 12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
  </IconBase>
);

export default MicrophoneCircle;

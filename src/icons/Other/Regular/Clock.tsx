import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const Clock = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <g fill="currentColor" clip-path="url(#a)"><path d="M12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .352.636l4 2.5a.75.75 0 1 0 .796-1.272l-3.648-2.28z"/><path fill-rule="evenodd" d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
  </IconBase>
);

export default Clock;

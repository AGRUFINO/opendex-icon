import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const PollCircle = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <g fill="currentColor" clip-path="url(#a)"><path d="M11.5 16a.5.5 0 0 0 1 0V8a.5.5 0 0 0-1 0zm-3.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5m7.5-.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-1 0z"/><path fill-rule="evenodd" d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
  </IconBase>
);

export default PollCircle;

import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const Stopwatch = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 3.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.75 12 3.75" opacity=".4"/><path fill="currentColor" d="M9 .75a.75.75 0 0 0 0 1.5h2.25V4.5a.75.75 0 0 0 1.5 0V2.25H15a.75.75 0 0 0 0-1.5zm8.72 6.53a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 1 1 1.06 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0M12.75 9a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"/>
  </IconBase>
);

export default Stopwatch;

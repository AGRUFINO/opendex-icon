import React from 'react';
import IconBase from '../IconBase';
import { IconProps } from '../types';

const X = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <path d="M18 6 6 18M6 6l12 12"/>
  </IconBase>
);

export default X;

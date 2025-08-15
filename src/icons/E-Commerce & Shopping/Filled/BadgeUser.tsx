import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const BadgeUser = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M15.466 2.095c-1.656-2.46-5.276-2.46-6.932 0l-.394.586-.693-.136c-2.91-.569-5.47 1.992-4.902 4.902l.136.693-.586.394c-2.46 1.656-2.46 5.276 0 6.932l.586.394-.136.693c-.569 2.91 1.992 5.47 4.902 4.902l.693-.136.394.586c1.656 2.46 5.276 2.46 6.932 0l.394-.586.693.136c2.91.569 5.47-1.992 4.902-4.902l-.136-.693.586-.394c2.46-1.656 2.46-5.276 0-6.932l-.586-.394.136-.693c.569-2.91-1.992-5.47-4.902-4.902l-.693.136zM12 7.5a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6m-3.684 8.375C8.73 14.262 10.294 13.1 12 13.1s3.269 1.162 3.684 2.775a.5.5 0 0 1-.484.625H8.8a.5.5 0 0 1-.484-.625" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
  </IconBase>
);

export default BadgeUser;

import React from 'react';
import IconBase from '../../../../IconBase';
import { IconProps } from '../../../../types';

const Book = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <path fill="currentColor" d="M3 5.5v14A2.5 2.5 0 0 1 5.5 17h14a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 19.5 2h-13A3.5 3.5 0 0 0 3 5.5" opacity=".4"/><path fill="currentColor" fill-rule="evenodd" d="M6.5 1.5a4 4 0 0 0-4 4v14a3 3 0 0 0 3 3H21a.5.5 0 0 0 0-1h-1.5v-4a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2zm0 1a3 3 0 0 0-3 3v11.764a3 3 0 0 1 2-.764h2v-14zm2 0v14h11a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1zm-3 15a2 2 0 1 0 0 4h13v-4z" clip-rule="evenodd"/>
  </IconBase>
);

export default Book;

import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const PuzzlePiece = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M13 4.25a3 3 0 1 0-6 0v1.5H4A2.75 2.75 0 0 0 1.25 8.5v2.75c0 .414.336.75.75.75h2.25a1.5 1.5 0 0 1 0 3H2a.75.75 0 0 0-.75.75V20A2.75 2.75 0 0 0 4 22.75h3.75A.75.75 0 0 0 8.5 22v-2.25a1.5 1.5 0 0 1 3 0V22c0 .414.336.75.75.75h3.25A2.75 2.75 0 0 0 18.25 20v-3.5h1.5a3 3 0 1 0 0-6h-1.5v-2a2.75 2.75 0 0 0-2.75-2.75H13zm-3-1.5a1.5 1.5 0 0 1 1.5 1.5V6.5c0 .414.336.75.75.75h3.25c.69 0 1.25.56 1.25 1.25v2.75c0 .414.336.75.75.75h2.25a1.5 1.5 0 0 1 0 3H17.5a.75.75 0 0 0-.75.75V20c0 .69-.56 1.25-1.25 1.25H13v-1.5a3 3 0 1 0-6 0v1.5H4c-.69 0-1.25-.56-1.25-1.25v-3.5h1.5a3 3 0 1 0 0-6h-1.5v-2c0-.69.56-1.25 1.25-1.25h3.75a.75.75 0 0 0 .75-.75V4.25a1.5 1.5 0 0 1 1.5-1.5" clip-rule="evenodd"/>
  </IconBase>
);

export default PuzzlePiece;

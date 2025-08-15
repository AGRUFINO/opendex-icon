import React from 'react';
import IconBase from '../../../IconBase';
import { IconProps } from '../../../types';

const Heart = (props: IconProps) => (
  <IconBase {...props} viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M1.5 9.474C1.5 5.791 4.027 2.5 7.893 2.5c1.908 0 3.249.893 4.107 1.76.858-.867 2.199-1.76 4.107-1.76 3.866 0 6.393 3.29 6.393 6.974 0 3.722-2.249 6.729-4.604 8.833-2.357 2.105-4.915 3.393-5.738 3.667l-.158.053-.158-.053c-.823-.274-3.381-1.562-5.738-3.667C3.75 16.203 1.5 13.197 1.5 9.474M15.21 5.5a.75.75 0 0 0 0 1.5c1.61 0 2.786 1.364 2.786 3.135a.75.75 0 0 0 1.5 0c0-2.4-1.662-4.635-4.286-4.635" clip-rule="evenodd"/>
  </IconBase>
);

export default Heart;

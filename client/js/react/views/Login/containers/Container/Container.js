import React from 'react';

import { Wrapper } from '~g/';
import { Box } from './components';
import Controllers from '../Controllers';
import Form from '../Form';

export default function Container() {
  return (
    <Box>
      <Controllers />
      <Form />
    </Box>
  );
}

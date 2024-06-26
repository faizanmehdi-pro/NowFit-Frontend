import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader({colorProp}) {
  return (
    <Box sx={{ display: 'flex', margin: '10px 0 0 20px' }}>
      <CircularProgress sx={{ color: colorProp }} />
    </Box>
  );
}

// #F78852
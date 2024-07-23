import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        aria-label="button to toggle theme"
        sx={{ 
          minWidth: '32px', 
          height: '32px', 
          p: '4px',
          backgroundColor:'rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          },
          '&:hover .MuiSvgIcon-root': {
            color: mode === 'dark' ? 'yellow' : 'white', 
          },
        }}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" sx={{ color: 'white' }} /> 
        ) : (
          <ModeNightRoundedIcon fontSize="small" sx={{ color: 'white' }} />
        )}
      </Button>
    </Box>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;

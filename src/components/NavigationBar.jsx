import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { Link } from '@mui/material';
import { useLanguage } from './LanguageContext';
import LoginModal from './LoginModal'; 

function NavigationBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <AppBar
        position="absolute"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              maxHeight: 40,
              color: 'white', 
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
                color: 'white',
              }}
            >
              <Link href="/" underline='none' sx={{ color: 'white' }}>
              </Link>
              <Box sx={{ display: 'flex', color: 'white' }}>
                <MenuItem sx={{ py: '6px', px: '6px', color: 'white' }}>
                  <Button 
                    variant={language === 'ru' ? 'outlined' : 'text'} 
                    onClick={() => handleLanguageChange('ru')} 
                    sx={{ color: 'white', borderColor: 'white', mx: 1 }}
                  >
                    Ru
                  </Button>
                  <Button 
                    variant={language === 'uzb' ? 'outlined' : 'text'} 
                    onClick={() => handleLanguageChange('uzb')} 
                    sx={{ color: 'white', borderColor: 'white', mx: 1 }}
                  >
                    Uzb
                  </Button>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('about')}
                  sx={{ py: '6px', px: '12px'}}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
                color: 'white',
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                // size="small"
                component="a"
                href="/"
                sx={{ color: 'white', borderColor: 'white' }} 
              >
                {language === 'ru' ? 'Главная' : 'Bosh sahifa'}
              </Button>
              <Button
                color="primary"
                variant="text"
                // size="small"
                onClick={handleOpenModal} // Open the modal on click
                sx={{ color: 'white' }}  // Set text color to white
              >
                {language === 'ru' ? 'Войти' : 'Kirish'}
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px', color: 'white' }}  // Set text color to white
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('hero')}>
                    {language === 'ru' ? 'Главная' : 'Bosh sahifa'}
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                  <Button
                color="primary"
                variant="outlined"
                // size="small"
                onClick={handleOpenModal}
              >
                {language === 'ru' ? 'Войти' : 'Kirish'}
              </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <LoginModal open={modalOpen} onClose={handleCloseModal} /> {/* Render the modal */}
    </div>
  );
}

NavigationBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default NavigationBar;

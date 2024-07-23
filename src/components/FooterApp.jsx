import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, styled } from '@mui/material';
import { useTheme } from '@emotion/react';
import logo from '../assets/logo.svg';
import { LocationOn } from '@mui/icons-material';
import { useLanguage } from './LanguageContext';
import LoginModal from './LoginModal'; // Import the modal component

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
}));

const FooterSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

const Logo = styled('img')({
    maxHeight: '70px',
    marginRight: '20px',
});

const ButtonGroup = styled(Box)({
    display: 'flex',
    gap: '10px',
});

const FooterApp = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    const [modalOpen, setModalOpen] = useState(false); // State to control the modal

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <FooterContainer>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FooterSection
                        sx={{
                            justifyContent:{ xs: 'center', sm: 'flex-start' }
                        }}
                        >
                            <Logo src={logo} alt="Logo" />
                            <Typography variant="h5">
                                <a href="mailto:teplica@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    teplica@gmail.com
                                </a>
                            </Typography>
                        </FooterSection>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FooterSection
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'column', 
                                alignItems: { xs: 'center', sm: 'flex-end' } , 
                                justifyContent: { xs: 'center', sm: 'flex-end' } 
                            }}
                        >
                            <ButtonGroup>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    component="a"
                                    href="/"
                                    sx={{ color: 'white', borderColor: 'white' }}
                                >
                                    {language === 'ru' ? 'Главная' : 'Bosh sahifa'}
                                </Button>
                                <Button
                                    color="primary"
                                    variant="text"
                                    component="button"
                                    onClick={handleOpenModal} // Open the modal on click
                                    sx={{ color: 'white' }}
                                >
                                    {language === 'ru' ? 'Войти' : 'Kirish'}
                                </Button>
                            </ButtonGroup>
                            <Typography variant="h6" mt={2}>
                                <a href="tel:+998991234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +998 90 276 21 43
                                </a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="tel:+998991234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +998 90 276 21 43
                                </a>
                            </Typography>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOn sx={{ mr: 1 }} />
                                {language === 'ru' ?'г.Самарканд, ул. Садриддин Айний 21, дом 6':`Samarqand, Sadriddin Ayniy ko'chasi 21, 6-bino`}
                            </Typography>
                        </FooterSection>
                    </Grid>
                </Grid>
            </Container>
            <LoginModal open={modalOpen} onClose={handleCloseModal} /> {/* Render the modal */}
        </FooterContainer>
    );
};

export default FooterApp;

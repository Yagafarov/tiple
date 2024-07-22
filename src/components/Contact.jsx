import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  maxWidth: '100%',
}));

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container >
            <Box textAlign={'center'}>
                <Typography
                    variant={isMobile ? 'h4' : 'h3'}
                    sx={{ mb: 4, color: theme.palette.primary.main }}
                >
                   Контакты и адреса
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" mb={5}>
                {/* Map Section */}
                <Grid item xs={12} sm={6}>
                    <StyledCard>
                        <CardContent>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6145.110924478609!2d66.96040583935911!3d39.6372120173155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1f30ce354339%3A0xd0baa05fd27e3b2f!2z0J3QsNC80L7Qt9Cz0L7Ss9C4INCh0LDQvNCw0YDSm9Cw0L3QtCAoTmFtb3pnb2ggam9tZSBtYXNqaWRpKQ!5e0!3m2!1suz!2s!4v1721622313103!5m2!1suz!2s" 
                                width="100%" 
                                height="350" 
                                style={{ border: 0 }} 
                                allowFullScreen
                                loading="lazy"
                                title="SamDU"
                            ></iframe>
                        </CardContent>
                    </StyledCard>
                </Grid>
                
                {/* Information Section */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{ px: 5, height: '350px' }}>
                        <Typography variant='h5' sx={{ color: theme.palette.primary.main }}>
                            Адрес:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            г.Самарканд, ул. Кобил Ашурова 21, дом 6
                        </Typography>
                        <Typography variant='h5' sx={{ color: theme.palette.primary.main }}>
                            Телефон:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Typography variant="body1" paragraph sx={{ color: 'text.primary' }}>
                                <a href="tel:+998991234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +998 90 276 21 43
                                </a>
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: 'text.primary' }}>
                                <a href="tel:+998991234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +998 90 276 21 43
                                </a>
                            </Typography>
                        </Box>
                        <Typography variant='h5' sx={{ color: theme.palette.primary.main }}>
                            Электронная почта:
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'text.primary' }}>
                            <a href="mailto:teplica@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                teplica@gmail.com
                            </a>
                        </Typography>
                        {/* <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        Наш умный система для управления теплицами обеспечивает надежный контроль и оптимизацию всех аспектов 
                            работы теплицы. Если у вас возникли вопросы или вам нужна поддержка, пожалуйста, свяжитесь с нами по указанным 
                            контактам. Мы всегда готовы помочь вам улучшить ваши тепличные условия!
                        </Typography> */}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;

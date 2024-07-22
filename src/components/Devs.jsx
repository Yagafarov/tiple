import { Box, Container, Typography, useTheme, useMediaQuery, Card, CardMedia, CardContent, Grid, styled } from '@mui/material';
import React from 'react';
import devbg from '../assets/devCardBg.png';

const developers = [
    {
        name: 'Манзура Хакимова',
        image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944',
        description: 'Особенности работы садовника Вряд ли Вы когда-нибудь всерьез задумывались над тем, какой он - хороший садовник, пока не столкнулись с поиском подходящей кандидатуры. Вам может казаться, что эта профессия не требует особой квалификации - подстричь кусты, посадить цветы - и все.'
    },
    {
        name: 'Мурад Давронов',
        image: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
        description: 'Главная функция садовника - ухаживать за растениями. Но задуматься только - сколько разных растений существует, и каждому ведь нужны определенные условия и определенный уход. При этом часто сложно спрогнозировать, как они будут себя вести.'
    },
    {
        name: 'Орзубек Насимов',
        image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        description: 'Вообще садовника можно сравнить с врачом, а растения, за которыми он ухаживает, - это его пациенты. Если участок большой - садовнику нужна команда рабочих. В таком случае он не только занимается растениями, но еще и организацией команды, распределением обязанностей.'
    },
];

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
}));

const CircleImageContainer = styled(Box)(({ theme }) => ({
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

const Devs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container>
            <Box textAlign="center" py={10}>
                <Typography
                    variant={isMobile ? 'h4' : 'h3'}
                    sx={{ mb: 4, color: theme.palette.primary.main }}
                >
                    О разработчиках
                </Typography>
                
                <Grid container spacing={5}>
                    {developers.map((dev, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledCard>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '200px',
                                        display:'flex',
                                        alignItems:'end',
                                        justifyContent:'center',
                                        backgroundImage: `url(${devbg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center bottom',
                                        
                                    }}
                                >
                                    <CircleImageContainer>
                                        <CardMedia
                                            component="img"
                                            image={dev.image}
                                            alt={dev.name}
                                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </CircleImageContainer>
                                </Box>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {dev.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        {dev.description}
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Devs;

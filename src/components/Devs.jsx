import { Box, Container, Typography, useTheme, useMediaQuery, Card, CardMedia, CardContent, Grid, styled } from '@mui/material';
import React from 'react';
import devbg from '../assets/devCardBg.png';
import { useLanguage } from './LanguageContext'; 

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[5],
    },
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
    const { language } = useLanguage();

    return (
        <Container>
            <Box textAlign="center" py={10}>
                <Typography
                    variant={isMobile ? "h5" : "h3"}
                    sx={{ mb: 4, color: theme.palette.primary.main }}
                >
                    {language === 'ru' ? 'О разработчиках' : 'Dasturchilar haqida'}
                </Typography>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'end',
                                    justifyContent: 'center',
                                    backgroundImage: `url(${devbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center bottom',
                                }}
                            >
                                <CircleImageContainer>
                                    <CardMedia
                                        component="img"
                                        image={'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944'}
                                        alt={language === 'ru' ? 'Манзура Хакимова' : 'Manzura Xakimova'}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </CircleImageContainer>
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {language === 'ru' ? 'Манзура Хакимова' : 'Manzura Xakimova'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    {language === 'ru' 
                                        ? 'Особенности работы садовника Вряд ли Вы когда-нибудь всерьез задумывались над тем, какой он - хороший садовник, пока не столкнулись с поиском подходящей кандидатуры. Вам может казаться, что эта профессия не требует особой квалификации - подстричь кусты, посадить цветы - и все.' 
                                        : 'Bog\'bonning ish xususiyatlari Siz, ehtimol, yaxshi bog\'bonning qanday bo\'lishi haqida jiddiy o\'ylamagansiz, to\'g\'ri nomzodni qidirish paytida. Bu kasb maxsus malaka talab qilmaydi deb o\'ylashingiz mumkin - butalarni kesish, gullarni ekish - va xolos.'}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'end',
                                    justifyContent: 'center',
                                    backgroundImage: `url(${devbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center bottom',
                                }}
                            >
                                <CircleImageContainer>
                                    <CardMedia
                                        component="img"
                                        image={'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'}
                                        alt={language === 'ru' ? 'Мурад Давронов' : 'Murad Davronov'}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </CircleImageContainer>
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {language === 'ru' ? 'Мурад Давронов' : 'Murad Davronov'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    {language === 'ru'
                                        ? 'Главная функция садовника - ухаживать за растениями. Но задуматься только - сколько разных растений существует, и каждому ведь нужны определенные условия и определенный уход. При этом часто сложно спрогнозировать, как они будут себя вести.'
                                        : 'Bog\'bonning asosiy vazifasi o\'simliklarga g\'amxo\'rlik qilishdir. Ammo o\'ylab ko\'ring - qancha turli o\'simliklar mavjud, va har biri maxsus sharoitlar va parvarish talab qiladi. Shuningdek, ularning qanday harakat qilishini oldindan bilish qiyin bo\'lishi mumkin.'}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'end',
                                    justifyContent: 'center',
                                    backgroundImage: `url(${devbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center bottom',
                                }}
                            >
                                <CircleImageContainer>
                                    <CardMedia
                                        component="img"
                                        image={'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}
                                        alt={language === 'ru' ? 'Орзубек Насимов' : 'Orzubek Nasimov'}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </CircleImageContainer>
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {language === 'ru' ? 'Орзубек Насимов' : 'Orzubek Nasimov'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    {language === 'ru'
                                        ? 'Вообще садовника можно сравнить с врачом, а растения, за которыми он ухаживает, - это его пациенты. Если участок большой - садовнику нужна команда рабочих. В таком случае он не только занимается растениями, но еще и организацией команды, распределением обязанностей.'
                                        : 'Bog\'bonni shifokor bilan taqqoslash mumkin, va u g\'amxo\'rlik qilayotgan o\'simliklar uning bemorlaridir. Agar maydon katta bo\'lsa - bog\'bonga ishchilar jamoasi kerak bo\'ladi. Bunday holda, u faqat o\'simliklar bilan shug\'ullanmaydi, balki jamoani tashkil qilish va vazifalarni taqsimlash bilan ham shug\'ullanadi.'}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Devs;

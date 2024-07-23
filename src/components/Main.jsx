import React from 'react';
import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import main3 from '../assets/main3.png';
import main4 from '../assets/main4.png';
import { useLanguage } from './LanguageContext'; 

const Main = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { language } = useLanguage();
    return (
        <Box py={4} sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
            <Container>
                <Box textAlign={'center'} mb={4}>
                    <Typography
                        variant={isMobile ? "h5" : "h3"}
                        sx={{ mb: 2 }}
                    >
                        {language === 'ru' ? 'Основные функционалы' : `Asosiy funksiyalar`}
                    </Typography>
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                    >
                        {language === 'ru' ? 'теплицы' : `issiqxonaning`}
                    </Typography>
                </Box>

                <Grid container alignItems="center" px={isMobile ? 2 : 9}>
                    {/* item 1 */}
                    <Grid item xs={12} md={6} display="flex" mb={{
                        xs: 3,
                        sm: 10
                    }}
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'start'
                            }
                        }} >
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 3,
                                maxWidth: '250px',
                                width: '100%',
                            }}
                        >
                            <img
                                src={main1}
                                alt="Описание изображения"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} mb={10}>
                        <Box px={isMobile ? 2 : 0} sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'start'
                            }
                        }} >
                            <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 2 }}>
                                {language === 'ru' ? 'Температура' : `Harorat`}
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                {language === 'ru' ? 'Температура для хорошего роста и развития должна быть оптимальной. Т.е. для растений, нуждающихся в умеренной температуре - 15-18°С, теплолюбивым - 18-24°С. Следует особо сказать о пагубном действии слишком высоких температур в сочетании с сухим воздухом и недостатком света.' : `Yaxshi o'sish va rivojlanish uchun harorat optimal bo'lishi kerak. O'rtacha haroratga muhtoj o'simliklar uchun - 15-18°S, issiqsevarlar uchun - 18-24°S. Juda yuqori haroratning quruq havo va yorug'lik yetishmasligi bilan birgalikda zararli ta'siri haqida alohida aytish kerak.`}
                            </Typography>
                        </Box>
                    </Grid>
                    {/* item 2 */}
                    <Grid item xs={12} md={6} display="flex" alignItems="center" order={{ xs: 2, md: 1 }} mb={10}>
                        <Box px={isMobile ? 2 : 0} sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'right'
                            }
                        }}>
                            <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 2 }}>
                                {language === 'ru' ? 'Влажность' : `Namlik`}
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                {language === 'ru' ? 'Относительная влажность воздуха – это соотношение массовой доли водяного пара в воздухе к максимально возможной, измеряется в %. Оптимальная влажность для большинства растений 50-70%, для тропических и субтропических 70-100%.' : `Havoning nisbiy namligi - bu havoda suv bug'ining massa ulushi maksimal mumkin bo'lgan nisbati, foizda o'lchanadi. Ko'pgina o'simliklar uchun optimal namlik 50-70%, tropik va subtropiklar uchun 70-100%.`}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" order={{ xs: 1, md: 2 }} mb={{
                        xs: 3,
                        sm: 10
                    }} sx={{
                        justifyContent: {
                            xs: 'center',
                            sm: 'end'
                        }
                    }} >
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 3,
                                maxWidth: '250px',
                                width: '100%',
                            }}
                        >
                            <img
                                src={main2}
                                alt="Описание изображения"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" px={isMobile ? 2 : 9}>
                    
                    {/* item 3 */}
                    <Grid item xs={12} md={6} display="flex" mb={{
                        xs: 3,
                        sm: 10
                    }}
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'start'
                            }
                        }} >
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 3,
                                maxWidth: '250px',
                                width: '100%',
                            }}
                        >
                            <img
                                src={main3}
                                alt="Описание изображения"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} mb={10}>
                        <Box px={isMobile ? 2 : 0} sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'start'
                            }
                        }} >
                            <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 2 }}>
                                {language === 'ru' ? 'Камера' : `Kamera`}
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                {language === 'ru' ? 'Климатическая камера — камера, позволяющая точно воспроизводить агрессивное воздействие внешней среды и применяемая в научно-исследовательских учреждениях, позволяет с высокой точностью контролировать влажность и температуру воздуха.' : `Iqlim kamerasi - tashqi muhitning tajovuzkor ta'sirini aniq takrorlash imkonini beruvchi va ilmiy-tadqiqot muassasalarida qo'llaniladigan kamera, havo namligi va haroratini yuqori aniqlikda nazorat qilish imkonini beradi.`}
                            </Typography>
                        </Box>
                    </Grid>
                    {/* item 4 */}
                    <Grid item xs={12} md={6} display="flex" alignItems="center" order={{ xs: 2, md: 1 }} mb={10}>
                        <Box px={isMobile ? 2 : 0} sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'right'
                            }
                        }}>
                            <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 2 }}>
                                {language === 'ru' ? 'Управление' : `Boshqarish`}
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                {language === 'ru' ? 'Если гроубокс находится в помещении с отоплением, в квартире или доме, не имеет особого значения в какой именно период года вы занимаетесь выращиванием. Важно будет делать небольшие поправки в температурном режиме и влажности воздуха в период отопительного сезона.' : `Agar growbox isitish tizimiga ega xonada, kvartirada yoki uyda joylashgan bo'lsa, yilning qaysi faslida ekish bilan shug'ullanishingiz muhim emas. Isitish mavsumida harorat rejimi va havo namligiga kichik tuzatishlar kiritish muhim bo'ladi.`}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" order={{ xs: 1, md: 2 }} mb={{
                        xs: 3,
                        sm: 10
                    }} sx={{
                        justifyContent: {
                            xs: 'center',
                            sm: 'end'
                        }
                    }} >
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 3,
                                maxWidth: '250px',
                                width: '100%',
                            }}
                        >
                            <img
                                src={main4}
                                alt="Описание изображения"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Main;

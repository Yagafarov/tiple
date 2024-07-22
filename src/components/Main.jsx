import React from 'react';
import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png'
import main3 from '../assets/main3.png'
import main4 from '../assets/main4.png'

const Main = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box py={4} sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
            <Container>
                <Box textAlign={'center'} mb={4}>
                    <Typography
                        variant={isMobile ? "h5" : "h3"}
                        sx={{ mb: 2 }}
                    >
                        Основные функционалы
                    </Typography>
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                    >
                        теплицы
                    </Typography>
                </Box>

                <Grid container alignItems="center" px={isMobile?2:9} >
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
                                Температура
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                Температура для хорошего роста и развития должна быть оптимальной. Т.е. для растений, нуждающихся в умеренной температуре - 15-18°С, теплолюбивым - 18-24°С. Следует особо сказать о пагубном действии слишком высоких температур в сочетании с сухим воздухом и недостатком света.
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
                                Влажность
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                Относительная влажность воздуха – это соотношение массовой доли водяного пара в воздухе к максимально возможной, измеряется в %. Оптимальная влажность для большинства растений 50-70%, для тропических и субтропических 70-100%.
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
                <Grid container alignItems="center" px={isMobile?2:9}>
                    
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
                                Камера
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                Климатическая камера — камера, позволяющая точно воспроизводить агрессивное воздействие внешней среды и применяемая в научно-исследовательских учреждениях, позволяет с высокой точностью контролировать влажность и температуру воздуха.
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
                                Управление
                            </Typography>
                            <Typography variant={isMobile ? "body1" : "h6"}>
                                Если гроубокс находится в помещении с отоплением, в квартире или доме, не имеет особого значения в какой именно период года вы занимаетесь выращиванием. Важно будет делать небольшие поправки в температурном режиме и влажности воздуха в период отопительного сезона.
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

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import bgImage from '../assets/mainbg.jpg';
import { useLanguage } from './LanguageContext'; 


export default function Hero() {
    const { language } = useLanguage();

    return (
        <Box
            id="hero"
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    textAlign: 'right',
                    px: { xs: 2, sm: 4 },
                }}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        fontWeight: 'bold',
                        mb: 2,
                    }}
                >
                    {language === 'ru' ? 'Чистое выращивание' : 'Sof yetishtirish'}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1.2rem', md: '1.5rem' }
                    }}
                >
                    {language === 'ru' ? (
                        <>
                            Мы расскажем, как участники нашего<br/>портала делают умные теплицы.
                        </>
                    ) : (
                        <>
                            Portalimiz ishtirokchilari aqlli issiqxonalarni<br/>qanday qilayotganini aytib beramiz.
                        </>
                    )}
                </Typography>
            </Container>
        </Box>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import bgImage from '../assets/mainbg.jpg';


export default function Hero() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',  // Ensures the image covers the entire area
                backgroundPosition: 'center',  // Centers the image
                display:'flex'

            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    // pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: '12%' },
                }}
            >
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            textAlign: 'right',
                            color:'#fff'
                        }}
                    >
                        Чистое выращивание
                    </Typography>
                    <Typography variant="h4" textAlign="right" sx={{color:'#fff'}}> {/* color="text.secondary" */}
                    Мы расскажем, как участники<br/>нашего портала делают<br/>умные теплицы.
                    </Typography>
            </Container>
        </Box>
    );
}

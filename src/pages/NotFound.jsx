import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import not404 from '../assets/not404.json'
import { Replay } from '@mui/icons-material';
import { useLanguage } from '../components/LanguageContext'; 


const NotFound = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="md" style={{ textAlign: 'center', marginTop: '10%' }}>
      <Box>
        <Box  >
         <Lottie style={{width: '100%', 
              maxWidth: '350px', 
              height: 'auto', 
              margin: '0 auto'  }}  animationData={not404} />
        </Box>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          {language === 'ru' ? 'Страница не найдена' : 'Sahifa topilmadi'}
        </Typography>
        <Typography variant="body1" color="textSecondary">
        {language === 'ru' ? 'Страница, которую вы ищете, не существует или была перемещена.' : `Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.`}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleBackHome} 
          style={{ marginTop: '20px' }}
          startIcon={<Replay/>}
        >
          {language === 'ru' ? 'Вернуться на главную' : 'Asosiy sahifaga qayting'}
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;

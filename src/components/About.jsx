import { Box, Card, CardContent, Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import pland from '../assets/pland.json';
import security from '../assets/security.json';
import ventilation from '../assets/vintelation.json';
import Lottie from "lottie-react";

import { useLanguage } from './LanguageContext'; 

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { language } = useLanguage();

  return (
    <Container>
      <Box py={4}>
        <Box textAlign={'center'} px={isMobile ? 2 : 12}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{ color: theme.palette.primary.main }}
          >
            {language === 'ru' ? 'Основная информация' : `Asosiy ma'lumotlar`}
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h5"}
            sx={{ textAlign: 'center', py: 2 }}
          >
            {language === 'ru' ? 'Теплица — ваш маленький жаркий уголок на участке, вмещающий буйные зеленые заросли теплолюбивых цветов или богатый урожай овощей.' : `Issiqxona — sizning uchastkangizdagi kichik issiq joyingiz, u issiqlikni sevuvchi gullar va boy hosilni o'z ichiga oladi.`}
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '& .hover-text': {
                    color: theme.palette.primary.contrastText,
                  }
                },
              }}
            >
              <Lottie animationData={pland} style={{ width: '150px', height: '150px', margin: '0 auto' }} />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                >
                  {language === 'ru' ? 'Бережное хранение' : `Ehtiyotkor saqlash`}
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  {language === 'ru' ? 'Сделайте её достойной внимания. Не знаете, с чего начать? Вам помогут наши идеи для теплицы — фото и комментарии прилагаются.' : `Uni e'tiborga loyiq qiling. Qayerdan boshlashni bilmaysizmi? Issiqxona uchun bizning g'oyalarimiz yordam beradi - fotosuratlar va sharhlar ilova qilinadi.`}
                </Typography>
                <Box py={3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    {language === 'ru' ? '525 видов' : `525 tur`}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    {language === 'ru' ? 'растений' : `o'simliklar`}
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  {language === 'ru' ? 'Благоприятные условия 20 000 плодов' : `20 000 mevalar uchun qulay sharoitlar`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '& .hover-text': {
                    color: theme.palette.primary.contrastText,
                  }
                },
              }}
            >
              <Lottie animationData={ventilation} style={{ width: '150px', height: '150px', margin: '0 auto' }} />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                >
                  {language === 'ru' ? 'Всесторонняя вентиляция' : `Har tomonlama shamollatish`}
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  {language === 'ru' ? 'В продаже есть масса готовых, сугубо функциональных моделей, и, конечно, самый простой вариант — приобрести такую теплицу.' : `Sotuvda ko'plab tayyor, faqat funksional modellar mavjud va, albatta, eng oddiy variant - bunday issiqxonani sotib olish.`}
                </Typography>
                <Box py={3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    {language === 'ru' ? 'работа 24/7' : `24/7 ish`}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    {language === 'ru' ? 'без остановки' : `to'xtamasdan`}
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  {language === 'ru' ? 'Высокая работоспособность с длительным сроком службы' : `Uzun muddatli xizmat muddati bilan yuqori ish samaradorligi`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '& .hover-text': {
                    color: theme.palette.primary.contrastText,
                  }
                },
              }}
            >
              <Lottie animationData={security} style={{ width: '150px', height: '150px', margin: '0 auto' }} />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                >
                  {language === 'ru' ? 'Защита от вредителей' : `Zararkunandalardan himoya`}
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  {language === 'ru' ? 'Металл позволяет создать визуально легкую, прочную и долговечную форму, одновременно используя многообразные варианты.' : `Metall vizual jihatdan engil, mustahkam va bardoshli shakl yaratishga imkon beradi, shu bilan birga ko'plab variantlardan foydalanadi.`}
                </Typography>
                <Box py={3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    {language === 'ru' ? '100% защита' : `100% himoya`}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    {language === 'ru' ? 'от насекомых' : `hasharotlardan`}
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  {language === 'ru' ? 'Без химических добавок в почву. Чистая земля' : `Tuproqqa kimyoviy qo'shimchalarsiz. Toza tuproq`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
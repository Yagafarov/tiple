import { Box, Card, CardContent, Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import pland from '../assets/pland.json';
import secority from '../assets/security.json';
import vintelation from '../assets/vintelation.json';
import Lottie from "lottie-react";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box py={4}>
        <Box textAlign={'center'} px={isMobile?2:12}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{  color: theme.palette.primary.main }}
          >
            Основная информация
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h5"}
            sx={{ textAlign: 'center', py: 2 }}
          >
            Теплица — ваш маленький жаркий уголок на участке, вмещающий буйные зеленые заросли теплолюбивых цветов или богатый урожай овощей.
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
                  Бережное хранение
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  Сделайте ее достойной внимания. Не знаете, с чего начать? Вам помогут наши идеи для теплицы — фото и комментарии прилагаются.
                </Typography>
                <Box py={3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    525 видов
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    растений
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  Благоприятные условия 20 000 плодов
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
              <Lottie animationData={vintelation} style={{ width: '150px', height: '150px', margin: '0 auto' }} />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                >
                  Всестороняя вентиляция
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  В продаже есть масса готовых, сугубо функциональных моделей, и, конечно, самый простой вариант — приобрести такую теплицу.
                </Typography>
                <Box py={3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    работа 24/7
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    без остановки
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  Высокая работоспособность с длительным сроком службы
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
              <Lottie animationData={secority} style={{ width: '150px', height: '150px', margin: '0 auto' }} />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                >
                  Защита от вредителей
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  Металл позволяет создать визуально легкую, прочную и долговечную форму, одновременно используя многообразные варианты.
                </Typography>
                <Box py={3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    100% защита
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: theme.palette.primary.main }}
                    className="hover-text"
                  >
                    от насекомых
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                >
                  Без химических добавок в почву. Чистая земля
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

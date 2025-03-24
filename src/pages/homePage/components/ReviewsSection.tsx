import { StarHalf, StarBorder, NavigateNext, Star } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ReviewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Sample data - you would replace this with actual data from your Google Maps reviews
  const googleReviews = {
    rating: 4.9,
    reviews: [
      {
        author: "Alex Alexx",
        rating: 5,
        comment: `Foarte multumit, recomand!
  Mi-au efectuat instalatia electrică completă a unei hale pe structură metalică. Am cerut ca in sine cablajul să fie cat se poate de mult ascuns si asa au si făcut✌️. Cum ne-am pus de accord cu termenii, fix asa s-a si făcut🤝.`,
        avatar: "/api/placeholder/40/40",
      },
      {
        author: "PELTECH",
        rating: 5,
        comment:
          "Am apelat la DIELECTRIC CUBE pentru lucrări de instalații electrice și sunt extrem de mulțumit de serviciile oferite. Echipa a fost profesionistă, punctuală și foarte bine pregătită. În timpul lucrărilor, au respectat toate standardele de siguranță și au lucrat cu multă atenție la detalii.\n\nMi-au explicat clar ce presupun intervențiile și au oferit recomandări utile pentru a îmbunătăți eficiența energetică a locuinței. De asemenea, au finalizat lucrarea la timp și fără a crea neplăceri, iar prețurile au fost corecte, raportate la calitatea serviciilor oferite.\n\nRecomand cu încredere DIELECTRIC CUBE oricărei persoane care are nevoie de instalații electrice de calitate!",
        avatar: "/api/placeholder/40/40",
      },
      {
        author: "Robert Rus",
        rating: 5,
        comment:
          "Avand in vedere ca am cunostiinte in domeniul instalatiilor electrice, pot spune ca DIELECTRIC CUBE ofera performanta, calitate, si cel mai important, seriozitate. " +
          "Asculta foarte bine nevoile clientului, are viziune, si vine cu sugestii de ultima moda. Recomand cu toata increderea!",
        avatar: "/api/placeholder/40/40",
      },
      {
        author: "Teodor Octavian Voicencu",
        rating: 5,
        comment:
          "Recent am avut plăcerea de a beneficia de serviciile Dielectric. Am avut de schimbat un panou de curent și de adăugat niște circuite adiționale în bucătărie. " +
          "Pentru ca nu cunosc piața din Timișoara și nu am avut o recomandare anume, am cerut ofertă de preț pentru lucrări de la mai multe firme, inclusiv Dielectric Cube de care am rămas plăcut impresionat. Încă de la început au dat dovadă de seriozitate, promptitudine și profesionalism. Au cerut toate detaliile în avans, inclusiv poze, s-au deplasat la fața locului pentru a constata complexitatea lucrărilor, și au întocmit o ofertă estimativă. " +
          "Lucrările s-au desfășurat foarte rapid tinundu-se cont inclusiv de orele de liniște din bloc iar la final au strâns inclusiv molozul în saci, gata pentru a fi dus la Retim. Au etichetat toate siguranțele și au avut răbdare în a explica componentele și circuitele aferente. " +
          "Recomand cu mult drag și cu siguranță voi mai apela la serviciile lor!",
        avatar: "/api/placeholder/40/40",
      },
    ],
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} sx={{ color: "#FFC107", fontSize: 20 }} />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <StarHalf key={i} sx={{ color: "#FFC107", fontSize: 20 }} />
        );
      } else {
        stars.push(
          <StarBorder key={i} sx={{ color: "#FFC107", fontSize: 20 }} />
        );
      }
    }
    return stars;
  };

  return (
    <Box
      sx={{
        pt: 6,
        pb: 6,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Card
          elevation={3}
          sx={{
            p: isMobile ? 0 : 3,
            borderRadius: 2,
            background: `linear-gradient(to right, ${theme.palette.colors.cream}, white)`,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                mb: 1,
                p: isMobile ? 3 : 0,
                color: theme.palette.colors.darkBlue,
                fontWeight: 600,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: `linear-gradient(to right, ${theme.palette.colors.darkBlue}, ${theme.palette.colors.dielectricRed})`,
                  borderRadius: "2px",
                },
              }}
            >
              Recenzii de la Clienți
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                mb: 5,
                p: isMobile ? 3 : 0,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                mt: 3,
              }}
            >
              Vedeți ce spun clienții noștri despre serviciile DIELECTRIC CUBE
              SRL. Recenzii verificate de pe Google Maps.
            </Typography>

            {/* Google Rating Summary */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: isMobile ? 2 : 0,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Google Maps
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Recenzii verificate
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "center" : "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.colors.darkBlue,
                    }}
                  >
                    {googleReviews.rating}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    {renderStars(googleReviews.rating)}
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Reviews */}
            <Grid container spacing={3}>
              {googleReviews.reviews.map((review, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    elevation={1}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Avatar
                          src={review.avatar}
                          alt={review.author}
                          sx={{ mr: 2 }}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
                            {review.author}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ display: "flex", mr: 1 }}>
                              {renderStars(review.rating)}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {review.comment}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* CTA Button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<NavigateNext />}
                component="a"
                href="https://www.google.com/maps/place/DIELECTRIC+CUBE+SRL/@45.7265588,21.2100934,17z/data=!4m8!3m7!1s0x47455d89b6fdcf57:0xccd7d81ff7dc158a!8m2!3d45.7265588!4d21.2126737!9m1!1b1!16s%2Fg%2F11fskpfmhp?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  py: 1.5,
                  px: 4,
                  bgcolor: theme.palette.colors.darkBlue,
                  color: "white",
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "white",
                    color: theme.palette.colors.darkBlue,
                    boxShadow: `0 6px 15px rgba(0,0,0,0.2), 0 0 0 2px ${theme.palette.colors.darkBlue}`,
                  },
                }}
              >
                Vezi toate recenziile pe Google Maps
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ReviewsSection;

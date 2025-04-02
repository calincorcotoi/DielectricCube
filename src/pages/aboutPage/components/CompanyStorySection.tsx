import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Business } from "@mui/icons-material";

const flex = "/despre/flex.jpg";

const CompanyStorySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Box sx={{ pt: 6, pb: 3 }}>
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
              Povestea Noastră
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
              Aflați mai multe despre parcursul nostru și valorile care ne
              ghidează în oferirea unor servicii electrice de calitate.
            </Typography>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", textAlign: "center" }}>
                  {!imageLoaded && (
                    <Box
                      sx={{ display: "flex", justifyContent: "center", my: 10 }}
                    >
                      <CircularProgress
                        sx={{ color: theme.palette.colors.darkBlue }}
                      />
                    </Box>
                  )}
                  <Box
                    component="img"
                    src={flex}
                    alt="Dielectric Cube"
                    onLoad={handleImageLoad}
                    sx={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      display: imageLoaded ? "block" : "none",
                      mx: "auto",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: theme.palette.colors.darkBlue,
                    fontWeight: 600,
                  }}
                >
                  <Business
                    sx={{ mr: 1, verticalAlign: "middle", fontSize: 30 }}
                  />
                  Începutul
                </Typography>
                <Typography paragraph>
                  DIELECTRIC CUBE a fost fondată din pasiunea pentru instalații
                  electrice sigure și de calitate. Cu o experiență vastă în
                  domeniul instalațiilor electrice, am decis să punem bazele
                  unei companii care să ofere servicii complete pentru clienții
                  din Timișoara și împrejurimi.
                </Typography>
                <Typography paragraph>
                  Misiunea noastră este să asigurăm soluții electrice
                  profesionale, sigure și de încredere pentru fiecare client. Ne
                  dedicăm fiecărui proiect cu atenție la detalii și respectăm
                  cele mai înalte standarde de calitate și siguranță.
                </Typography>
                <Typography paragraph>
                  De la începuturile noastre modeste, am crescut constant
                  datorită recomandărilor clienților mulțumiți și a
                  angajamentului nostru față de excelență. Astăzi, suntem
                  recunoscuți ca unul dintre cei mai de încredere furnizori de
                  servicii electrice din Timișoara.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CompanyStorySection;

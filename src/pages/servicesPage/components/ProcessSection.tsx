import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
const tablou4 = "/servicii/panou.jpg";

const ProcessSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Box sx={{ py: 3 }}>
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
              Cum Lucrăm
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
              Procesul nostru de lucru este structurat pentru a vă oferi
              servicii de calitate cu transparență maximă
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
                    src={tablou4}
                    alt="Lucrări electrice profesionale"
                    onLoad={handleImageLoad}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: imageLoaded ? "block" : "none",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      mb: 2,
                      borderLeft: `4px solid ${theme.palette.colors.darkBlue}`,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      1. Evaluare și consultanță
                    </Typography>
                    <Typography variant="body2">
                      Evaluăm nevoile dvs. specifice și oferim soluții
                      personalizate, cu o estimare clară a costurilor și
                      timpului de execuție.
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      mb: 2,
                      borderLeft: `4px solid ${theme.palette.colors.dielectricRed}`,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      2. Proiectare și planificare
                    </Typography>
                    <Typography variant="body2">
                      Elaborăm un plan detaliat de execuție, respectând toate
                      normele și standardele în vigoare pentru instalații
                      electrice.
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      mb: 2,
                      borderLeft: `4px solid ${theme.palette.colors.darkBlue}`,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      3. Execuție și monitorizare
                    </Typography>
                    <Typography variant="body2">
                      Realizăm lucrările conform planului, cu materiale de
                      calitate și tehnici moderne, informându-vă constant despre
                      progres.
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      borderLeft: `4px solid ${theme.palette.colors.dielectricRed}`,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      4. Verificare și garanție
                    </Typography>
                    <Typography variant="body2">
                      Testăm riguros toate instalațiile realizate și oferim
                      garanție pentru manoperă și materiale, asigurând
                      funcționarea optimă.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ProcessSection;

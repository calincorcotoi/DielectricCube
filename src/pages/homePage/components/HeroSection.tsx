import { Call, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
const dielectricLogo = "/logo/dielectric-logo.png";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        background: `linear-gradient(120deg, ${theme.palette.colors.veryDarkBlue} 10%,
          ${theme.palette.colors.darkBlue} 30%, 
          ${theme.palette.colors.lightBlue} 55%, 
          ${theme.palette.colors.teal} 100%)`,
        color: "white",
        py: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={3}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ textAlign: isMobile ? "center" : "left" }}
          >
            <Fade in timeout={800}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Ai nevoie de un Electrician Autorizat în Timișoara?
              </Typography>
            </Fade>
            <Slide direction="right" in timeout={900}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 3,
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Call />}
                  sx={{
                    bgcolor: theme.palette.colors.dielectricRed,
                    "&:hover": { bgcolor: "#cc2a00", transform: "scale(1.03)" },
                    transition: "transform 0.7s",
                    animation: "gentlePulse 2s infinite",
                  }}
                  component="a"
                  href="tel:+40770739248"
                >
                  Sună 0770739248
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsApp />}
                  sx={{
                    bgcolor: "#25D366",
                    "&:hover": { bgcolor: "#1da851", transform: "scale(1.03)" },
                    transition: "transform 0.7s",
                    animation: "gentlePulse 2s infinite",
                  }}
                  component="a"
                  href="https://wa.me/40770739248"
                  target="_blank"
                >
                  Mesaj WhatsApp
                </Button>
                <style>
                  {`
                  @keyframes gentlePulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.015); }
                    100% { transform: scale(1); }
                  }
                  `}
                </style>
              </Box>
            </Slide>
          </Grid>
          {!isMobile && (
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Fade in timeout={1200}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: 300,
                    margin: "0 auto",
                    bgcolor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    border: `8px solid ${theme.palette.colors.dielectricRed}`,
                  }}
                >
                  <Box
                    component="img"
                    src={dielectricLogo}
                    alt="Dielectric Cube"
                    sx={{
                      width: "70%",
                      maxHeight: "70%",
                      objectFit: "contain",
                      ml: 3,
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

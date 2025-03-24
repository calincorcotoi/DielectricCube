import {
  Assessment,
  Description,
  Handshake,
  LocalOffer,
  Payments,
  PriceCheck,
  Receipt,
  Verified,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  // Icon components to use in the pricing cards
  const pricingCards = [
    {
      title: "Evaluare Gratuită",
      icon: <Assessment sx={{ fontSize: 40 }} />,
      description:
        "Evaluăm nevoile tale și îți oferim o consultare inițială gratuită pentru a înțelege exact ce lucrări sunt necesare.",
      highlight: "Fără costuri inițiale",
      color: theme.palette.colors.darkBlue,
    },
    {
      title: "Ofertă Detaliată",
      icon: <Description sx={{ fontSize: 40 }} />,
      description:
        "Primești o ofertă clară cu toate costurile defalcate pe materiale și manoperă înainte de a începe orice lucrare.",
      highlight: "Transparență totală",
      color: theme.palette.colors.dielectricRed,
    },
    {
      title: "Lucrare Fără Surprize",
      icon: <Handshake sx={{ fontSize: 40 }} />,
      description:
        "Ne angajăm să respectăm oferta inițială. Orice modificare trebuie aprobată de tine înainte de implementare.",
      highlight: "Zero costuri ascunse",
      color: theme.palette.colors.darkBlue,
    },
  ];

  // Features that highlight transparent pricing
  const transparencyFeatures = [
    {
      title: "Prețuri Fixe",
      description:
        "Pentru lucrări standard, oferim prețuri fixe care nu se schimbă pe parcurs.",
      icon: <PriceCheck />,
    },
    {
      title: "Factură Detaliată",
      description:
        "Primești factură fiscală cu toate serviciile și materialele detaliate.",
      icon: <Receipt />,
    },
    {
      title: "Garanție Inclusă",
      description:
        "Toate prețurile includ garanția pentru manoperă și materialele folosite.",
      icon: <Verified />,
    },
    {
      title: "Fără Avans Obligatoriu",
      description:
        "Pentru lucrări mici și medii, nu solicităm avans pentru începerea lucrărilor.",
      icon: <Payments />,
    },
  ];

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
              Prețuri Transparente
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
              Politica noastră este simplă! Să nu te trezești cu costuri
              suplimentare. Prima dată primești oferta, apoi se începe lucrarea.
              Fără costuri ascunse!
            </Typography>

            {/* Pricing Process Cards */}
            <Grid container spacing={3} sx={{ mb: 5 }}>
              {pricingCards.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s",
                      border: `2px solid ${card.color}`,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: card.color,
                        color: "white",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      {card.icon}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ mt: 1, textAlign: "center", fontWeight: 600 }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {card.description}
                      </Typography>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 1,
                          mt: "auto",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            textAlign: "center",
                            color: card.color,
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {card.highlight}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* Transparency Features */}
            <Typography
              variant="h5"
              component="h3"
              align="center"
              sx={{
                mb: 4,
                color: theme.palette.colors.darkBlue,
                fontWeight: 600,
              }}
            >
              Avantajele Politicii Noastre de Prețuri
            </Typography>

            <Grid container spacing={3}>
              {transparencyFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: "white",
                        bgcolor:
                          index % 2 === 0
                            ? theme.palette.colors.darkBlue
                            : theme.palette.colors.dielectricRed,
                        p: 1,
                        borderRadius: "50%",
                        display: "flex",
                        mr: 2,
                        mt: 0.5,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ mb: 0.5, fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Call to Action */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                mt: 4,
                borderRadius: 2,
                bgcolor: "rgba(245, 245, 245, 0.9)",
                border: `1px solid ${theme.palette.colors.darkBlue}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ mb: isMobile ? 2 : 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.colors.darkBlue,
                    }}
                  >
                    Încă nu ești convins? Verifică prețurile noastre
                    transparente.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Contactează-ne pentru o evaluare și o ofertă detaliată fără
                    niciun angajament.
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<LocalOffer />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    bgcolor: theme.palette.colors.dielectricRed,
                    color: "white",
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "white",
                      color: theme.palette.colors.dielectricRed,
                      boxShadow: `0 6px 15px rgba(0,0,0,0.2), 0 0 0 2px ${theme.palette.colors.dielectricRed}`,
                    },
                  }}
                  onClick={() => {
                    navigate("/preturi");
                  }}
                >
                  Prețuri
                </Button>
              </Box>
            </Paper>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PricingSection;

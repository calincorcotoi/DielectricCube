import { SetStateAction, useCallback, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slide,
  Fade,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
  CardMedia,
  useTheme,
  Link,
  Modal,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import {
  ArrowBack,
  ArrowForward,
  Close as CloseIcon,
} from "@mui/icons-material";

// Instead of importing images as modules, use the static paths
const atestatAnre = "/atestate/anre.png";
const after1 = "/interventiiRapide/after1.jpg";
const after2 = "/interventiiRapide/after2.jpg";
const ars = "/interventiiRapide/ars.jpg";
const before1 = "/interventiiRapide/before1.jpg";
const before2 = "/interventiiRapide/before2.jpg";
const circuitPrizaAscuns = "/interventiiRapide/circuitPrizaAscuns.jpg";
const defecteSapa = "/interventiiRapide/defecteSapa.jpg";
const priza = "/interventiiRapide/priza.jpg";
const aparatMasura = "/lucrariComplexe/aparatMasura.jpg";
const tablou4 = "/lucrariComplexe/tablou4.jpg";
const tablou7 = "/lucrariComplexe/tablou7.jpg";
const traseuCopex1 = "/lucrariComplexe/traseuCopex1.jpg";
const traseuPerete = "/lucrariComplexe/traseuPerete.jpg";
const dielectricLogo = "/logo/dielectric-logo.jpg";
const dielectricLogoText = "/logo/dielectric-logo-text.png";

// Extend the Palette interface to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      lightBlue: string;
      teal: string;
      darkBlue: string;
      yellow: string;
      orange: string;
      dielectricRed: string;
      cream: string;
    };
  }
  interface PaletteOptions {
    colors?: {
      lightBlue?: string;
      teal?: string;
      darkBlue?: string;
      yellow?: string;
      orange?: string;
      dielectricRed?: string;
      cream?: string;
    };
  }
}

// Updated theme with palette from the image and improved readability
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F3826",
      light: "#1c95b4",
      dark: "#000000",
    },
    secondary: {
      main: "#FF3500",
      light: "#F2F3D9",
    },
    background: {
      default: "#ffffff",
    },
    colors: {
      lightBlue: "#87caeb",
      teal: "#1c95b4",
      darkBlue: "#0a3954",
      yellow: "#ffca00",
      orange: "#FF3500",
      dielectricRed: "#c41e3a",
      cream: "#F2F3D9",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.1rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.9375rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s, box-shadow 0.2s",
        },
        contained: {
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
});

const ColorStripe = () => (
  <Box
    sx={{
      height: 3,
      background: `linear-gradient(10deg, ${theme.palette.colors.darkBlue} 0%, ${theme.palette.colors.teal} 25%, ${theme.palette.colors.lightBlue} 50%, ${theme.palette.colors.teal} 75%, ${theme.palette.colors.darkBlue} 100%)`,
      boxShadow: `0 4px 8px rgba(0, 0, 0, 0.6)`,
    }}
  />
);

interface HeaderProps {
  navItems: string[];
  isMobile: boolean;
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMobile,
  handleDrawerToggle,
}) => (
  <AppBar
    position="sticky"
    sx={{ bgcolor: "#fff", color: theme.palette.colors.darkBlue }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: isMobile ? "space-between" : "center",
        alignItems: "center",
        padding: isMobile ? "0 16px" : "0 32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mr: isMobile ? 0 : 16,
        }}
      >
        <Box
          component="img"
          src={dielectricLogo}
          alt="Dielectric Cube"
          sx={isMobile ? { height: 50 } : { height: 60 }}
        />
        <Box
          component="img"
          src={dielectricLogoText}
          alt="Dielectric Cube"
          sx={isMobile ? { height: 25, maxWidth: "70%" } : { height: 25 }}
        />
      </Box>
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Box sx={{ display: "flex" }}>
          {navItems.map((item, index) => {
            const colors = [
              theme.palette.colors.lightBlue,
              theme.palette.colors.teal,
              theme.palette.colors.dielectricRed,
              theme.palette.colors.orange,
            ];
            return (
              <Button
                key={item}
                sx={{
                  mx: 1.5,
                  px: 2,
                  color: theme.palette.colors.darkBlue,
                  borderBottom: "3px solid transparent",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: `3px solid ${colors[index]}`,
                    backgroundColor: "transparent",
                  },
                  fontSize: "1rem",
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      )}
    </Toolbar>
  </AppBar>
);

interface DrawerMenuProps {
  navItems: string[];
  handleDrawerToggle: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  navItems,
  handleDrawerToggle,
}) => (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
      }}
    >
      <Box
        component="img"
        src={dielectricLogo}
        alt="Dielectric Cube"
        sx={{
          height: 40,
          mr: -1,
          width: "70%",
          maxHeight: "70%",
        }}
      />
    </Box>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemText
            primary={item}
            sx={{
              textAlign: "center",
              py: 1.5,
              "& .MuiTypography-root": { fontWeight: 500, fontSize: "1rem" },
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

interface HeroSectionProps {
  isMobile: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => (
  <Box
    sx={{
      background: `linear-gradient(120deg, ${theme.palette.colors.darkBlue} 0%, ${theme.palette.colors.teal} 65%, ${theme.palette.colors.darkBlue} 100%)`,
      color: "white",
      py: { xs: 6, md: 10 },
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={7}>
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
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<CallIcon />}
                sx={{
                  bgcolor: theme.palette.colors.dielectricRed,
                  "&:hover": { bgcolor: "#cc2a00", transform: "scale(1.03)" },
                  transition: "transform 0.2s",
                  animation: "gentlePulse 3s infinite",
                }}
                component="a"
                href="tel:+40770739248"
              >
                Sună 0770739248
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{
                  bgcolor: "#25D366",
                  "&:hover": { bgcolor: "#1da851", transform: "scale(1.03)" },
                  transition: "transform 0.2s",
                  animation: "gentlePulse 3s infinite",
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

const imagesWithDescriptions = {
  emergencies: [
    { src: before1, desc: "AAAAAAAAAAAAAAAAAAAAAA" },
    { src: before2, desc: "BBBBBBBBBBBBBBBBBBBBBB" },
    { src: after1, desc: "CCCCCCCCCCCCCC" },
    { src: after2, desc: "vvvvvvvvvvvvvvvv" },
    { src: ars, desc: "bbbbbbbbbbbbbbbbbbbbbb" },
    { src: circuitPrizaAscuns, desc: "Complex Work 6 Description" },
    { src: defecteSapa, desc: "Complex Work 7 Description" },
    { src: priza, desc: "Complex Work 8 Description" },
  ],
  complexWorks: [
    { src: aparatMasura, desc: "AAAAAAAAAAAAAAAAAAAAAA" },
    { src: tablou4, desc: "CCCCCCCCCCCCCC" },
    { src: tablou7, desc: "Emergency Case 3" },
    { src: tablou7, desc: "Emergency Case 3" },
    { src: traseuCopex1, desc: "Emergency Case 4" },
    { src: traseuPerete, desc: "Emergency Case 5" },
  ],
};

interface SlideShowProps {
  title: string;
  images: { src: string; desc: string }[];
  bgColor: string;
}

const SlideShow: React.FC<SlideShowProps> = ({ title, images, bgColor }) => {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, images.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <Card
      sx={{
        backgroundColor: bgColor,
        color: "white",
        textAlign: "center",
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
      </CardContent>
      <Box
        sx={{ position: "relative", flexGrow: 1, overflow: "hidden", my: 2 }}
      >
        <Box
          sx={{
            position: "relative",
            height: 300,
            width: "100%",
            transform: isAnimating
              ? `translateX(${slideDirection === "left" ? "-3%" : "3%"})`
              : "translateX(0)",
            opacity: isAnimating ? 0.7 : 1,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={images[index].src}
            alt={images[index].desc}
            sx={{
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>
      </Box>
      <CardContent sx={{ pt: 0 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "medium",
            minHeight: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {images[index].desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
            px: 1,
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={handlePrev}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            Înapoi
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={handleNext}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            Înainte
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const CarouselSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 6,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          mixBlendMode: "overlay",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SlideShow
              title="Lucrări complexe"
              images={imagesWithDescriptions.complexWorks}
              bgColor={theme.palette.colors.teal}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SlideShow
              title="Intervenții/Urgente"
              images={imagesWithDescriptions.emergencies}
              bgColor={theme.palette.colors.dielectricRed}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const CertificationsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{
    name: string;
    color: string;
    image: string;
    description: string;
  } | null>(null);

  const certifications = [
    {
      name: "Atestat 1",
      color: theme.palette.colors.teal,
      image: atestatAnre,
      description: "Certificare ANRE pentru instalații electrice",
    },
    {
      name: "Atestat 2",
      color: theme.palette.colors.darkBlue,
      image: atestatAnre,
      description: "Certificare IGPR pentru sisteme de securitate",
    },
    {
      name: "Atestat 3",
      color: theme.palette.colors.dielectricRed,
      image: atestatAnre,
      description: "Autorizație pentru lucrări de înaltă tensiune",
    },
  ];

  const handleOpen = (
    cert: SetStateAction<{
      name: string;
      color: string;
      image: string;
      description: string;
    } | null>
  ) => {
    setSelectedCert(cert);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        pt: 6,
        pb: 6,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 1.05,
          mixBlendMode: "overlay",
        },
      }}
    >
      <Container maxWidth="lg">
        <Card
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 4, color: theme.palette.colors.darkBlue }}
            >
              Atestat ANRE și IGPR
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {certifications.map((cert, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleOpen(cert)}
                    sx={{
                      py: 3,
                      bgcolor: cert.color,
                      border: "2px solid transparent",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "scale(1.03)",
                        bgcolor: "#fff",
                        color: cert.color,
                        borderColor: cert.color,
                      },
                    }}
                  >
                    {cert.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>

      {/* Certificate Modal */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="certificate-modal"
        aria-describedby="certificate-details"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            p: 4,
            outline: "none",
            borderRadius: 2,
            overflow: "auto",
            boxShadow: 24,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "grey.500",
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedCert && (
            <>
              <Typography
                id="certificate-modal"
                variant="h5"
                component="h2"
                sx={{
                  mb: 2,
                  color: selectedCert.color,
                  textAlign: "center",
                }}
              >
                {selectedCert.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box
                  component="img"
                  src={selectedCert.image}
                  alt={`${selectedCert.name} certificate`}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    borderRadius: 1,
                  }}
                />

                <Typography variant="body1" id="certificate-details">
                  {selectedCert.description}
                </Typography>
              </Box>
            </>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

const PricingSection = () => (
  <Box
    sx={{
      pb: 6,
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.05,
        mixBlendMode: "overlay",
      },
    }}
  >
    <Container maxWidth="lg">
      <Card
        sx={{
          p: 0,
          overflow: "hidden",
          border: `1px solid ${theme.palette.colors.dielectricRed}`,
          boxShadow: `0 15px 30px rgba(0,0,0,0.2), 0 0 15px ${theme.palette.colors.dielectricRed}20`,
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.colors.dielectricRed,
            p: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Transparență în costuri
          </Typography>
        </Box>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" align="center" sx={{ mb: 3 }}>
            Să nu te trezești cu costuri suplimentare. Prima dată primești
            oferta, apoi se începe lucrarea. Fără costuri ascunse!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              startIcon={<PriceCheckIcon />}
              sx={{
                bgcolor: theme.palette.colors.teal,
                "&:hover": { bgcolor: "#cc2a00" },
              }}
            >
              Tarife
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: "#05202f",
      color: "white",
      py: 4,
      textAlign: { xs: "center", md: "left" },
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient(to right, ${theme.palette.colors.darkBlue}50 1px, transparent 1px)`,
        backgroundSize: "50px 100%",
        opacity: 0.05,
      },
    }}
  >
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: theme.palette.colors.cream }}
          >
            Date de Contact
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <PhoneIcon
              sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
            />
            <Link
              href="tel:+40770739248"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": { color: theme.palette.colors.cream },
              }}
            >
              0770 739 248
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <EmailIcon
              sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
            />
            <Link
              href="mailto:contact@dielectric.ro"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": { color: theme.palette.colors.cream },
              }}
            >
              contact@dielectric.ro
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <LocationOnIcon
              sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
            />
            <Typography variant="body2">Timișoara, România</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: theme.palette.colors.cream }}
          >
            Linkuri Rapide
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Link
              href="#"
              sx={{
                color: "white",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: theme.palette.colors.cream },
              }}
            >
              Despre noi
            </Link>
            <Link
              href="#"
              sx={{
                color: "white",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: theme.palette.colors.cream },
              }}
            >
              Servicii
            </Link>
            <Link
              href="#"
              sx={{
                color: "white",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: theme.palette.colors.cream },
              }}
            >
              Calculator preț
            </Link>
            <Link
              href="#"
              sx={{
                color: "white",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: theme.palette.colors.cream },
              }}
            >
              Portofoliu
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: theme.palette.colors.cream }}
          >
            Program de Lucru
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Luni - Vineri: 08:00 - 20:00
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Sâmbătă: 09:00 - 16:00
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Duminică: Urgențe
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<CallIcon />}
              sx={{
                color: theme.palette.colors.cream,
                borderColor: theme.palette.colors.cream,
                "&:hover": {
                  borderColor: theme.palette.colors.dielectricRed,
                  backgroundColor: "rgba(255, 53, 0, 0.1)",
                },
              }}
              component="a"
              href="tel:+40770739248"
            >
              Sună pentru urgențe
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ mt: 3, borderTop: "1px solid rgba(255,255,255,0.1)", pt: 2 }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Dielectric Cube - Make Light in
            Darkness. Toate drepturile rezervate.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = ["Despre", "Servicii", "Calculator", "Portofoliu"];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        navItems={navItems}
        isMobile={isMobile}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerMenu
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Drawer>
      <main>
        {/* Content goes here */}
        <HeroSection isMobile={isMobile} />
        <Box
          style={{
            background: `linear-gradient(120deg, ${theme.palette.colors.teal} 10%, ${theme.palette.colors.lightBlue} 50%, ${theme.palette.colors.teal} 100%)`,
          }}
        >
          <ColorStripe />
          <CertificationsSection />
          <CarouselSection />
          <PricingSection />
        </Box>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

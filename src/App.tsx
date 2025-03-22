import { useCallback, useEffect, useState } from "react";
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
  Avatar,
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
  Verified as VerifiedIcon,
  ElectricalServices as ElectricalServicesIcon,
  Security as SecurityIcon,
  Power as PowerIcon,
  Collections as CollectionsIcon,
  Star as StarIcon,
  FlashOn as FlashOnIcon,
  Engineering as EngineeringIcon,
  Payments as PaymentsIcon,
  Assessment as AssessmentIcon,
  Receipt as ReceiptIcon,
  Description as DescriptionIcon,
  Handshake as HandshakeIcon,
  LocalOffer,
  StarBorder,
  StarHalf,
  NavigateNext,
} from "@mui/icons-material";

// Instead of importing images as modules, use the static paths
// const atestatAnre = "/atestate/anre.png";
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
      veryDarkBlue: string;
      cream: string;
      lightGray: string;
      electricYellow: string;
      dielectricRed: string;
    };
  }
  interface PaletteOptions {
    colors?: {
      lightBlue?: string;
      teal?: string;
      darkBlue?: string;
      veryDarkBlue?: string;
      cream?: string;
      lightGray?: string;
      electricYellow?: string;
      dielectricRed?: string;
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
      lightBlue: "#134074",
      darkBlue: "#13315c",
      veryDarkBlue: "#0b2545",
      teal: "#8da9c4",
      cream: "#eef4ed",
      lightGray: "#f9f9f9",
      electricYellow: "#ffc107",
      dielectricRed: "#c41e3a",
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
      height: 2,
      boxShadow: `0 0px 16px rgba(0, 0, 0, 0.6)`,
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
          sx={isMobile ? { height: 27, maxWidth: "70%" } : { height: 27 }}
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
              theme.palette.colors.darkBlue,
              theme.palette.colors.darkBlue,
              theme.palette.colors.darkBlue,
              theme.palette.colors.darkBlue,
            ];
            return (
              <Button
                key={item}
                sx={{
                  mx: 1.5,
                  px: 1,
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
                  startIcon={<CallIcon />}
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
                  startIcon={<WhatsAppIcon />}
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

const imagesWithDescriptions = {
  emergencies: [
    {
      src: before1,
      desc: "Intervenție rapidă înainte de reparație - Avarie majoră la instalația electrică.",
    },
    {
      src: before2,
      desc: "Intervenție rapidă înainte de reparație - Defecțiune la cablaj.",
    },
    {
      src: after1,
      desc: "Intervenție rapidă după reparație - Sistem electric restaurat.",
    },
    {
      src: after2,
      desc: "Intervenție rapidă după reparație - Funcționalitate completă.",
    },
    { src: ars, desc: "Intervenție rapidă - Reparație după incendiu." },
    {
      src: circuitPrizaAscuns,
      desc: "Intervenție rapidă - Circuit priză ascuns reparat.",
    },
    {
      src: defecteSapa,
      desc: "Intervenție rapidă - Defecte în șapă corectate.",
    },
    { src: priza, desc: "Intervenție rapidă - Priză reparată." },
  ],
  complexWorks: [
    {
      src: aparatMasura,
      desc: "Lucrări complexe - Utilizare aparat de măsură pentru verificări.",
    },
    { src: tablou4, desc: "Lucrări complexe - Tablou electric modernizat." },
    {
      src: tablou7,
      desc: "Lucrări complexe - Tablou electric complet echipat.",
    },
    { src: traseuCopex1, desc: "Lucrări complexe - Traseu copex instalat." },
    { src: traseuPerete, desc: "Lucrări complexe - Traseu perete finalizat." },
  ],
};

interface SlideShowProps {
  title: string;
  images: { src: string; desc: string }[];
  bgColor: string;
  icon: React.ReactNode;
}

const SlideShow: React.FC<SlideShowProps> = ({
  title,
  images,
  bgColor,
  icon,
}) => {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        p: isMobile ? 0 : 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          pb: isMobile ? 0 : 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            ml: 2,
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <Box
        sx={{ position: "relative", flexGrow: 1, overflow: "hidden", my: 2 }}
      >
        <Box
          sx={{
            position: "relative",
            height: 350,
            width: "100%",
            transform: isAnimating
              ? `translateX(${slideDirection === "left" ? "-1%" : "1%"})`
              : "translateX(0)",
            opacity: isAnimating ? 0.6 : 1,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          <CardMedia
            component="img"
            height="350"
            image={images[index].src}
            alt={images[index].desc}
            sx={{
              objectFit: "cover",
              borderRadius: 2,
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
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={handlePrev}
            sx={{
              mr: 1,
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
              ml: 1,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const slideShowData = [
    {
      icon: <FlashOnIcon sx={{ fontSize: 30 }} />,
      title: "Lucrări complexe",
      images: imagesWithDescriptions.complexWorks,
      color: theme.palette.colors.darkBlue,
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 30 }} />,
      title: "Intervenții Urgente",
      images: imagesWithDescriptions.emergencies,
      color: theme.palette.colors.dielectricRed,
    },
  ];

  return (
    <Box
      sx={{
        pt: 6,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Card
          elevation={3}
          sx={{
            p: isMobile? 0 : 3,
            mb: 4,
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
                p: isMobile? 3 : 0,
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
              Galerie Lucrări
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                mb: 5,
                p: isMobile? 3 : 0,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                mt: 3,
              }}
            >
              Explorați portofoliul nostru de lucrări complexe și intervenții de
              urgență, realizate cu profesionalism și respectând cele mai înalte
              standarde de siguranță.
            </Typography>

            <Grid container spacing={3}>
              {slideShowData.map((slideShow, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <CardContent
                    sx={{
                      p: 0,
                      "&:last-child": {
                        pb: 0,
                      },
                    }}
                  >
                    <SlideShow
                      icon={slideShow.icon}
                      title={slideShow.title}
                      images={slideShow.images}
                      bgColor={slideShow.color}
                    />
                  </CardContent>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                mt: 5,
                gap: 3,
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<CollectionsIcon />}
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
                Vezi toate lucrările
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

const CertificationsSection = () => {
  // State for controlling modals
  const [openANRE, setOpenANRE] = useState(false);
  const [openIGPR, setOpenIGPR] = useState(false);

  // Modal handlers
  const handleOpenANRE = () => setOpenANRE(true);
  const handleCloseANRE = () => setOpenANRE(false);
  const handleOpenIGPR = () => setOpenIGPR(true);
  const handleCloseIGPR = () => setOpenIGPR(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Serviciile electricianului
  const services = [
    {
      title: "Instalații Electrice Rezidențiale",
      icon: <ElectricalServicesIcon />,
      description:
        "Servicii complete de instalare, reparare și modernizare a instalațiilor electrice în locuințe.",
    },
    {
      title: "Sisteme de Securitate",
      icon: <SecurityIcon />,
      description:
        "Instalare sisteme de alarmă, supraveghere video și control acces cu certificare IGPR.",
    },
    {
      title: "Lucrări de Înaltă Tensiune",
      icon: <PowerIcon />,
      description:
        "Intervenții specializate la rețele de medie și înaltă tensiune cu autorizație specifică.",
    },
  ];

  return (
    <Box
      sx={{
        pt: 6,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Secțiunea de Servicii */}
        <Card
          elevation={3}
          sx={{
            p: 3,
            mb: 4,
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
              Servicii Profesionale de Electrician
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                mb: 5,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                mt: 3,
              }}
            >
              Toate serviciile noastre sunt susținute de certificări
              profesionale recunoscute la nivel național. Suntem autorizați ANRE
              și IGPR pentru a vă oferi garanția calității și siguranței.
            </Typography>

            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={2}
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
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 3,
                      }}
                    >
                      <Box
                        sx={{
                          color: "white",
                          bgcolor:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                          p: 1.5,
                          borderRadius: "50%",
                          display: "flex",
                          mb: 2,
                          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        align="center"
                        sx={{
                          mb: 1.5,
                          fontWeight: 600,
                          color:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        color="text.secondary"
                      >
                        {service.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        onClick={() => console.log("Servicii Text Clicked")}
                        sx={{
                          mt: 2,
                          color: theme.palette.colors.darkBlue,
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Vezi mai mult
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Butoane pentru certificate */}
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                mt: 5,
                gap: 3,
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleOpenANRE}
                startIcon={<VerifiedIcon />}
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
                Certificat ANRE
              </Button>

              <Button
                variant="contained"
                size="large"
                onClick={handleOpenIGPR}
                startIcon={<VerifiedIcon />}
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
              >
                Certificat IGPR
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Modal pentru Certificat ANRE */}
      <Modal
        open={openANRE}
        onClose={handleCloseANRE}
        aria-labelledby="modal-anre"
        aria-describedby="modal-certificat-anre"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            maxHeight: "90vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: "none",
            overflow: "auto",
          }}
        >
          <Typography
            id="modal-anre"
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              color: theme.palette.colors.darkBlue,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Certificat ANRE
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/api/placeholder/600/800"
              alt="Certificat ANRE"
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={handleCloseANRE}
              variant="contained"
              sx={{
                bgcolor: theme.palette.colors.darkBlue,
                color: "white",
                "&:hover": {
                  bgcolor: theme.palette.colors.darkBlue,
                  opacity: 0.9,
                },
              }}
            >
              Închide
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal pentru Certificat IGPR */}
      <Modal
        open={openIGPR}
        onClose={handleCloseIGPR}
        aria-labelledby="modal-igpr"
        aria-describedby="modal-certificat-igpr"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            maxHeight: "90vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: "none",
            overflow: "auto",
          }}
        >
          <Typography
            id="modal-igpr"
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              color: theme.palette.colors.dielectricRed,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Certificat IGPR
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/api/placeholder/600/800"
              alt="Certificat IGPR"
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={handleCloseIGPR}
              variant="contained"
              sx={{
                bgcolor: theme.palette.colors.dielectricRed,
                color: "white",
                "&:hover": {
                  bgcolor: theme.palette.colors.dielectricRed,
                  opacity: 0.9,
                },
              }}
            >
              Închide
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

const PricingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Icon components to use in the pricing cards
  const pricingCards = [
    {
      title: "Evaluare Gratuită",
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
      description:
        "Evaluăm nevoile tale și îți oferim o consultare inițială gratuită pentru a înțelege exact ce lucrări sunt necesare.",
      highlight: "Fără costuri inițiale",
      color: theme.palette.colors.darkBlue,
    },
    {
      title: "Ofertă Detaliată",
      icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
      description:
        "Primești o ofertă clară cu toate costurile defalcate pe materiale și manoperă înainte de a începe orice lucrare.",
      highlight: "Transparență totală",
      color: theme.palette.colors.dielectricRed,
    },
    {
      title: "Lucrare Fără Surprize",
      icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
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
      icon: <PriceCheckIcon />,
    },
    {
      title: "Factură Detaliată",
      description:
        "Primești factură fiscală cu toate serviciile și materialele detaliate.",
      icon: <ReceiptIcon />,
    },
    {
      title: "Garanție Inclusă",
      description:
        "Toate prețurile includ garanția pentru manoperă și materialele folosite.",
      icon: <VerifiedIcon />,
    },
    {
      title: "Fără Avans Obligatoriu",
      description:
        "Pentru lucrări mici și medii, nu solicităm avans pentru începerea lucrărilor.",
      icon: <PaymentsIcon />,
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
            p: 3,
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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <StarIcon key={i} sx={{ color: "#FFC107", fontSize: 20 }} />
        );
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
            p: 3,
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
        <HeroSection />
        <Box
          style={{
            background: `linear-gradient(180deg, ${theme.palette.colors.teal} 0%, ${theme.palette.colors.lightBlue} 100%)`,
          }}
        >
          <ColorStripe />
          <CertificationsSection />
          <CarouselSection />
          <PricingSection />
          <ReviewsSection />
        </Box>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

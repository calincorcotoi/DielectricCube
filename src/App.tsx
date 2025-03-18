import { useEffect, useState } from "react";
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
  TextField,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
  CardMedia,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalculateIcon from "@mui/icons-material/Calculate";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import after1 from "../public/interventiiRapide/after1.jpg";
import after2 from "../public/interventiiRapide/after2.jpg";
import ars from "../public/interventiiRapide/ars.jpg";
import before1 from "../public/interventiiRapide/before1.jpg";
import before2 from "../public/interventiiRapide/before2.jpg";
import circuitPrizaAscuns from "../public/interventiiRapide/circuitPrizaAscuns.jpg";
import defecteSapa from "../public/interventiiRapide/defecteSapa.jpg";
import priza from "../public/interventiiRapide/priza.jpg";
import aparatMasura from "../public/lucrariComplexe/aparatMasura.jpg";
import tablou4 from "../public/lucrariComplexe/tablou4.jpg";
import tablou7 from "../public/lucrariComplexe/tablou7.jpg";
import traseuCopex1 from "../public/lucrariComplexe/traseuCopex1.jpg";
import traseuPerete from "../public/lucrariComplexe/traseuPerete.jpg";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
// Extend the Palette interface to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      lightBlue: string;
      teal: string;
      darkBlue: string;
      yellow: string;
      orange: string;
    };
  }
  interface PaletteOptions {
    colors?: {
      lightBlue?: string;
      teal?: string;
      darkBlue?: string;
      yellow?: string;
      orange?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3954", // Dark blue from palette
      light: "#1c95b4", // Teal from palette
      dark: "#072638", // Darker shade of dark blue
    },
    secondary: {
      main: "#ff9100", // Orange from palette
      light: "#ffca00", // Yellow from palette
    },
    background: {
      default: "#ffffff",
    },
    colors: {
      lightBlue: "#87caeb",
      teal: "#1c95b4",
      darkBlue: "#0a3954",
      yellow: "#ffca00",
      orange: "#ff9100",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
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
        root: { backgroundImage: "none" },
      },
    },
  },
});

const ColorStripe = () => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      height: 3,
      overflow: "hidden",
      bgcolor: theme.palette.colors.lightBlue,
    }}
  >
    <Box sx={{ flexGrow: 1, bgcolor: theme.palette.colors.orange }} />
  </Box>
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
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
      >
        LOGO
      </Typography>
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
              theme.palette.colors.yellow,
              theme.palette.colors.orange,
            ];
            return (
              <Button
                key={item}
                sx={{
                  mx: 1,
                  color: theme.palette.colors.darkBlue,
                  borderBottom: "3px solid transparent",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: `3px solid ${colors[index]}`,
                    backgroundColor: "transparent",
                  },
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
    <Typography variant="h6" sx={{ my: 2 }}>
      LOGO
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemText
            primary={item}
            sx={{
              textAlign: "center",
              py: 1,
              "& .MuiTypography-root": { fontWeight: 500 },
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

const HeroSection = () => (
  <Box
    sx={{
      background: `linear-gradient(120deg, ${theme.palette.colors.darkBlue} 0%, ${theme.palette.colors.teal} 50%, ${theme.palette.colors.darkBlue} 100%)`,
      color: "white",
      py: { xs: 6, md: 10 },
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative circles */}
    <Box
      sx={{
        position: "absolute",
        bottom: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: "50%",
        backgroundColor: theme.palette.colors.yellow,
        opacity: 0.1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: -50,
        left: -50,
        width: 200,
        height: 200,
        borderRadius: "50%",
        backgroundColor: theme.palette.colors.orange,
        opacity: 0.1,
      }}
    />
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={7}>
          <Fade in timeout={1000}>
            <Typography variant="h2" component="h1" gutterBottom>
              Ai nevoie de un Electrician Autorizat IN Timisoara?
            </Typography>
          </Fade>
          <Slide direction="right" in timeout={1200}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 3,
                bgcolor: theme.palette.colors.orange,
                "&:hover": { bgcolor: theme.palette.colors.yellow },
              }}
            >
              Contactează-ne
            </Button>
          </Slide>
        </Grid>
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Fade in timeout={1500}>
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
                border: `8px solid ${theme.palette.colors.lightBlue}`,
              }}
            >
              <Typography variant="h3" color={theme.palette.colors.darkBlue}>
                LOGO
              </Typography>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

///////////////CarouselSection////////////////////
const imagesWithDescriptions = {
  emergencies: [
    { src: before1, desc: "Complex Work 1 Description" },
    { src: before2, desc: "Complex Work 2 Description" },
    { src: after1, desc: "Complex Work 3 Description" },
    { src: after2, desc: "Complex Work 4 Description" },
    { src: ars, desc: "Complex Work 5 Description" },
    { src: circuitPrizaAscuns, desc: "Complex Work 6 Description" },
    { src: defecteSapa, desc: "Complex Work 7 Description" },
    { src: priza, desc: "Complex Work 8 Description" },
  ],
  complexWorks: [
    { src: aparatMasura, desc: "Emergency Case 1" },
    { src: tablou4, desc: "Emergency Case 2" },
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

  const handleNext = () => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [index, isAnimating]);

  // Indicator dots
  const renderIndicators = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => {
              if (isAnimating) return;
              setSlideDirection(i > index ? "left" : "right");
              setIsAnimating(true);
              setTimeout(() => {
                setIndex(i);
                setIsAnimating(false);
              }, 300);
            }}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                i === index ? "white" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    );
  };

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

        {/* Combined navigation row */}
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
            Previous
          </Button>

          {renderIndicators()}

          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={handleNext}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const CarouselSection = () => {
  const theme = useTheme();

  return (
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
            bgColor={theme.palette.colors.orange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const CertificationsSection = () => (
  <Box sx={{ bgcolor: theme.palette.colors.lightBlue, py: 6 }}>
    <Container maxWidth="lg">
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
        {["Atestat 1", "Atestat 2", "Atestat 3"].map((atestat, index) => {
          const colors = [
            theme.palette.colors.teal,
            theme.palette.colors.darkBlue,
            theme.palette.colors.orange,
          ];
          return (
            <Grid item xs={12} sm={4} key={index}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  py: 3,
                  bgcolor: colors[index],
                  border: "2px solid transparent",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: "#fff",
                    color: colors[index],
                    borderColor: colors[index],
                  },
                }}
              >
                {atestat}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

const PricingSection = () => (
  <Container maxWidth="lg" sx={{ my: 6 }}>
    <Card
      sx={{
        p: 0,
        overflow: "hidden",
        border: `1px solid ${theme.palette.colors.yellow}`,
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.colors.yellow,
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{ color: theme.palette.colors.darkBlue, fontWeight: "bold" }}
        >
          Transparență în costuri
        </Typography>
      </Box>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" align="center" sx={{ mb: 3 }}>
          Să nu te trezești cu costuri suplimentare. Prima dată primești oferta,
          apoi se începe lucrarea. Fără costuri ascunse!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<CalculateIcon />}
            sx={{
              bgcolor: theme.palette.colors.teal,
              "&:hover": { bgcolor: theme.palette.colors.darkBlue },
            }}
          >
            Calculator
          </Button>
          <Button
            variant="contained"
            startIcon={<PriceCheckIcon />}
            sx={{
              bgcolor: theme.palette.colors.orange,
              "&:hover": {
                bgcolor: theme.palette.colors.yellow,
                color: theme.palette.colors.darkBlue,
              },
            }}
          >
            Tarife
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Container>
);

const MissionSection = () => (
  <Box
    sx={{
      background: `linear-gradient(to right, ${theme.palette.colors.teal}, ${theme.palette.colors.darkBlue})`,
      py: 6,
      color: "white",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: -30,
        right: "10%",
        width: 120,
        height: 120,
        borderRadius: "50%",
        backgroundColor: theme.palette.colors.orange,
        opacity: 0.1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: -40,
        left: "20%",
        width: 150,
        height: 150,
        borderRadius: "50%",
        backgroundColor: theme.palette.colors.lightBlue,
        opacity: 0.1,
      }}
    />
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 3 }}
      >
        Misiunea noastră
      </Typography>
      <Card
        sx={{
          maxWidth: 800,
          mx: "auto",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <CardContent>
          <Typography variant="body1" align="center" paragraph>
            Ne dedicăm furnizării de servicii electrice de cea mai înaltă
            calitate, asigurând siguranța și satisfacția clienților noștri. Cu o
            echipă de profesioniști autorizați, suntem pregătiți să răspundem
            prompt la toate nevoile dvs. electrice, de la instalații simple până
            la proiecte complexe.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

const ContactSection = () => (
  <Box sx={{ bgcolor: theme.palette.colors.darkBlue, color: "white", py: 6 }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Date de contact
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: `1px solid ${theme.palette.colors.teal}`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon
                  sx={{ mr: 2, color: theme.palette.colors.lightBlue }}
                />
                <Typography variant="body1">+40 700 000 000</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ mr: 2, color: theme.palette.colors.yellow }} />
                <Typography variant="body1">contact@electrician.ro</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon
                  sx={{ mr: 2, color: theme.palette.colors.orange }}
                />
                <Typography variant="body1">Timișoara, România</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              background: `linear-gradient(135deg, white 0%, ${theme.palette.colors.lightBlue}15 100%)`,
              color: "black",
              border: `1px solid ${theme.palette.colors.lightBlue}`,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                color={theme.palette.colors.darkBlue}
              >
                Trimite-ne un mesaj
              </Typography>
              <TextField
                label="Nume"
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
              />
              <TextField
                label="Mesaj"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={3}
              />
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: theme.palette.colors.orange,
                  "&:hover": {
                    bgcolor: theme.palette.colors.yellow,
                    color: theme.palette.colors.darkBlue,
                  },
                }}
                fullWidth
              >
                Trimite
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{ bgcolor: "#05202f", color: "white", py: 3, textAlign: "center" }}
  >
    <Container>
      <Typography variant="body2">
        © {new Date().getFullYear()} Electrician Autorizat Timișoara. Toate
        drepturile rezervate.
      </Typography>
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
        <ColorStripe />
        <CarouselSection />
        <CertificationsSection />
        <PricingSection />
        <MissionSection />
        <ContactSection />
      </main>
      <ColorStripe />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

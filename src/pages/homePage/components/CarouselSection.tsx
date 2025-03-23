import { ArrowBack, ArrowForward, Collections, Engineering, FlashOn } from "@mui/icons-material";
import {
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Button,
  Container,
  Grid,
  useTheme,
} from "@mui/material";
import { useState, useCallback, useEffect } from "react";

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
      icon: <FlashOn sx={{ fontSize: 30 }} />,
      title: "Lucrări complexe",
      images: imagesWithDescriptions.complexWorks,
      color: theme.palette.colors.darkBlue,
    },
    {
      icon: <Engineering sx={{ fontSize: 30 }} />,
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
            p: isMobile ? 0 : 3,
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
              Galerie Lucrări
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
                startIcon={<Collections />}
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

export default CarouselSection;

import { House, Business, Security, FlashOn } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const MainServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Main service categories
  const serviceCategories = [
    {
      title: "Instalații Electrice Rezidențiale",
      icon: <House sx={{ fontSize: 40 }} />,
      description:
        "Instalări și reparații complete de rețele electrice pentru locuințe și apartamente, conform normelor în vigoare.",
      color: theme.palette.colors.darkBlue,
      details: [
        "Instalații electrice complete pentru case și apartamente",
        "Modernizarea instalațiilor vechi",
        "Măsurători și verificări periodice",
        "Măsurători de priză de pământ",
        "Emitere declarație de conformitate",
        "Întocmire dosar prosumator",
        "Montare tablouri electrice modulare",
        "Instalare circuite dedicate pentru electrocasnice",
        "Soluții de iluminat economic și decorativ",
      ],
    },
    {
      title: "Instalații Electrice Industriale",
      icon: <Business sx={{ fontSize: 40 }} />,
      description:
        "Proiectare și execuție de instalații electrice complexe pentru spații comerciale, birouri și hale industriale.",
      color: theme.palette.colors.dielectricRed,
      details: [
        "Tablouri electrice industriale și distribuție",
        "Instalații de forță pentru utilaje și echipamente",
        "Rețele structurate și prize de date",
        "Instalații de iluminat industrial",
        "Măsurători împământări anuale industriale",
        "Intocmire dosar tehnic utilizare",
        "Sisteme de monitorizare a consumului electric",
      ],
    },
    {
      title: "Sisteme de Securitate",
      icon: <Security sx={{ fontSize: 40 }} />,
      description:
        "Instalare și configurare sisteme complete de securitate cu certificare IGPR pentru protecția locuinței sau afacerii dvs.",
      color: theme.palette.colors.darkBlue,
      details: [
        "Sisteme de alarmă antiefracție",
        "Camere de supraveghere IP și CCTV",
        "Sisteme de control acces",
        "Interfoane și videointerfoane",
        "Senzori de mișcare și detecție incendiu",
      ],
    },
    {
      title: "Intervenții de Urgență",
      icon: <FlashOn sx={{ fontSize: 40 }} />,
      description:
        "Echipa noastră este disponibilă pentru rezolvarea rapidă a avariilor și problemelor electrice urgente.",
      color: theme.palette.colors.dielectricRed,
      details: [
        "Disponibilitate 24/7 pentru urgențe electrice",
        "Identificare și remediere defecte",
        "Reparații panouri electrice",
        "Înlocuire siguranțe și dispozitive de protecție",
        "Remedierea rapidă a defectelor neprevăzute",
      ],
    },
  ];
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
              Serviciile Noastre
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
              DIELECTRIC CUBE oferă o gamă completă de servicii electrice, de la
              instalații rezidențiale la proiecte industriale complexe, toate
              realizate la cele mai înalte standarde.
            </Typography>

            <Grid container spacing={4}>
              {serviceCategories.map((category, index) => (
                <Grid item xs={12} md={6} key={index}>
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
                      border: `2px solid ${category.color}`,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: category.color,
                        color: "white",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      {category.icon}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ mt: 1, textAlign: "center", fontWeight: 600 }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="body1" paragraph>
                        {category.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          Servicii incluse:
                        </Typography>
                        <ul style={{ paddingLeft: "20px", margin: 0 }}>
                          {category.details.map((detail, i) => (
                            <li key={i}>
                              <Typography variant="body2">{detail}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default MainServicesSection;

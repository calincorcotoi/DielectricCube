import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  Button,
  Paper,
  useMediaQuery,
} from "@mui/material";
import {
  ElectricalServices,
  Security,
  FlashOn,
  House,
  Business,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const tablou4 = "/lucrariComplexe/tablou4.jpg";
const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

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
        "Identificare și remediere scurtcircuite",
        "Reparații tablouri electrice",
        "Înlocuire siguranțe și dispozitive de protecție",
        "Remedierea rapidă a penelor de curent",
      ],
    },
  ];

  return (
    <>
      {/* Main Services Section */}
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
                DIELECTRIC CUBE oferă o gamă completă de servicii electrice, de
                la instalații rezidențiale la proiecte industriale complexe,
                toate realizate la cele mai înalte standarde.
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
                                <Typography variant="body2">
                                  {detail}
                                </Typography>
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

      {/* Process Section */}
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
                  <Box
                    component="img"
                    src={tablou4}
                    alt="Lucrări electrice profesionale"
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
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
                        calitate și tehnici moderne, informându-vă constant
                        despre progres.
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

      {/* Call to Action Section */}
      <Box sx={{ py: 3, pb: 6 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={4}
            sx={{
              p: isMobile ? 0 : 3,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.colors.darkBlue} 0%, ${theme.palette.colors.lightBlue} 100%)`,
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", p: isMobile ? 3 : 0 }}
            >
              Aveți nevoie de servicii electrice profesionale?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 4, p: isMobile ? 3 : 0, maxWidth: "800px", mx: "auto" }}
            >
              Contactați-ne pentru o evaluare gratuită și o ofertă
              personalizată. Suntem aici pentru a vă ajuta cu toate nevoile
              electrice!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  navigate("/portofoliu");
                }}
                startIcon={<ElectricalServices />}
                sx={{
                  py: 1.5,
                  px: 4,
                  mb: isMobile ? 3 : 0,
                  color: "white",
                  borderColor: "white",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
                  },
                }}
              >
                Vezi portofoliul nostru
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;

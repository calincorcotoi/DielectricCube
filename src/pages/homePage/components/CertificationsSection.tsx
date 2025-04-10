import {
  ElectricalServices,
  Security,
  Verified,
  OfflineBolt,
} from "@mui/icons-material";
import {
  useMediaQuery,
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Modal,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import ButtonHoverEffect from "../../../components/ButtonHoverEffect";
import { useNavigate } from "react-router-dom";
const atestatAnre = "/home/atestate/anre.png";
const atestatIgpr = "/home/atestate/igpr.png";

const CertificationsSection = () => {
  // State for controlling modals
  const [openANRE, setOpenANRE] = useState(false);
  const [openIGPR, setOpenIGPR] = useState(false);
  // State for images loaded
  const [anreImageLoaded, setAnreImageLoaded] = useState(false);
  const [igprImageLoaded, setIgprImageLoaded] = useState(false);

  // Modal handlers
  const handleOpenANRE = () => {
    setOpenANRE(true);
    setAnreImageLoaded(false);
  };
  const handleCloseANRE = () => setOpenANRE(false);
  const handleOpenIGPR = () => {
    setOpenIGPR(true);
    setIgprImageLoaded(false);
  };
  const handleCloseIGPR = () => setOpenIGPR(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const services = [
    {
      title: "Instalații Electrice Rezidențiale",
      icon: <ElectricalServices />,
      description:
        "Servicii complete de instalare, reparare și modernizare a instalațiilor electrice în locuințe.",
    },
    {
      title: "Sisteme de Securitate",
      icon: <Security />,
      description:
        "Instalare sisteme de alarmă, supraveghere video și control acces cu certificare IGPR.",
    },
    {
      title: "Măsurători Prize de Pământ",
      icon: <OfflineBolt />,
      description:
        "Verificare și testare profesională a rezistenței de dispersie a prizelor de pământ conform normativelor în vigoare.",
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
              Servicii Profesionale de Electrician
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
                        onClick={() => navigate("/services")}
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
                startIcon={<Verified />}
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
                Autorizare ANRE
              </Button>

              <ButtonHoverEffect
                onClick={handleOpenIGPR}
                startIcon={<Verified />}
                color={theme.palette.colors.dielectricRed}
              >
                Atestat IGPR
              </ButtonHoverEffect>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Modal pentru Autorizare ANRE */}
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
            Autorizare ANRE
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              minHeight: "300px",
              position: "relative",
            }}
          >
            {!anreImageLoaded && <CircularProgress />}
            <img
              src={atestatAnre}
              alt="Autorizare ANRE"
              onLoad={() => setAnreImageLoaded(true)}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                display: anreImageLoaded ? "block" : "none",
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

      {/* Modal pentru Atestat IGPR */}
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
            Atestat IGPR
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              minHeight: "300px",
              position: "relative",
            }}
          >
            {!igprImageLoaded && <CircularProgress />}
            <img
              src={atestatIgpr}
              alt="Atestat IGPR"
              onLoad={() => setIgprImageLoaded(true)}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                display: igprImageLoaded ? "block" : "none",
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

export default CertificationsSection;

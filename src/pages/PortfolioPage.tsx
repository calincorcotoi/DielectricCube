import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  CardMedia,
  Button,
  Modal,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Close,
  ArrowBack,
  ArrowForward,
  Business,
  Home,
  FlashOn,
  ElectricalServices,
  Construction,
  CellTower,
} from "@mui/icons-material";

// Portfolio categories and items
const portfolioData = {
  residential: {
    title: "Instalații Rezidențiale",
    icon: <Home />,
    description:
      "Lucrări complete de instalații electrice pentru locuințe și apartamente",
    items: [
      {
        id: "res-1",
        title: "Tablou Electric Apartament Modern",
        description:
          "Instalarea unui tablou electric modern, prevăzut cu siguranțe automate și protecție diferențială, într-un apartament din Timișoara.",
        images: ["/tablou1.jpg", "/tablou2.jpg", "/tablou3.jpg"],
        client: "Proprietar apartament 3 camere, Timișoara",
        location: "Timișoara, Cartier Circumvalațiunii",
      },
      {
        id: "res-2",
        title: "Renovare Completă Instalație Electrică",
        description:
          "Renovare completă a instalației electrice într-o casă veche, incluzând înlocuirea circuitelor, prizelor și întrerupătoarelor conform normelor actuale.",
        images: ["/priza.jpg", "/intrerupator.jpg", "/cabluri.jpg"],
        client: "Proprietar casă unifamilială, Dumbrăvița",
        location: "Dumbrăvița, Timiș",
      },
      {
        id: "res-3",
        title: "Remediere Defecte Instalație",
        description:
          "Identificarea și remedierea defectelor într-o instalație electrică cu probleme, incluzând înlocuirea componentelor deteriorate.",
        images: ["/tablouArs.jpg", "/tablouArs2.jpg", "/tablou6.jpg"],
        client: "Proprietar apartament 2 camere, Timișoara",
        location: "Timișoara, Cartier Fabric",
      },
    ],
  },
  commercial: {
    title: "Instalații Comerciale",
    icon: <Business />,
    description:
      "Soluții electrice complete pentru spații comerciale și birouri",
    items: [
      {
        id: "com-1",
        title: "Tablou Electric Industrial",
        description:
          "Proiectarea și instalarea unui tablou electric de mare capacitate pentru un spațiu comercial cu cerințe speciale de alimentare.",
        images: ["/tablou4.jpg", "/tablou5.jpg", "/tablou10.jpg"],
        client: "Magazin retail, Centrul Comercial Iulius Mall",
        location: "Timișoara, Iulius Mall",
      },
      {
        id: "com-2",
        title: "Instalație Electrică Birou Open Space",
        description:
          "Instalarea rețelei electrice complete, inclusiv prize dedicate pentru stații de lucru și iluminat optimizat pentru un spațiu de birouri.",
        images: ["/cabluri2.jpg", "/cabluri3.jpg", "/tablou7.jpg"],
        client: "Companie IT, Clădire de birouri Openville",
        location: "Timișoara, Openville",
      },
      {
        id: "com-3",
        title: "Instalație Hală Industrială",
        description:
          "Proiectarea și implementarea instalației electrice pentru o hală industrială, inclusiv alimentarea utilajelor și sistemul de iluminat industrial.",
        images: ["/hala.jpg", "/tablou8.jpg", "/tablou9.jpg"],
        client: "Fabrică producție componente auto",
        location: "Parcul Industrial Freidorf, Timișoara",
      },
    ],
  },
  emergency: {
    title: "Intervenții de Urgență",
    icon: <FlashOn />,
    description: "Reparații rapide și sigure pentru situații de urgență",
    items: [
      {
        id: "urg-1",
        title: "Înlocuire Priză Carbonizată",
        description:
          "Înlocuirea de urgență a unei prize carbonizate care a provocat un scurtcircuit într-un complex rezidențial.",
        images: [
          "/portofoliu/interventiiRapide/urg-1/1.jpg",
          "/portofoliu/interventiiRapide/urg-1/2.jpg",
          "/portofoliu/interventiiRapide/urg-1/3.jpg",
        ],
        client: "Complex rezidențial",
        location: "Timișoara, Zona Aradului",
      },
      {
        id: "urg-2",
        title: "Intervenție circuit cu probleme în șapă",
        description:
          "Identificarea și remedierea unui circuit electric defect care a provocat întreruperi frecvente în alimentarea cu energie electrică.",
        images: ["/portofoliu/interventiiRapide/urg-2/1.jpg"],
        client: "Complex rezidențial",
        location: "Timișoara, Zona Circumvalatiunii",
      },
      {
        id: "urg-3",
        title:
          "Intervenție declanșare disjunctor general depășire putere instalată",
        description:
          "Localizarea și remedierea unei probleme de suprasarcină care declanșa disjunctorul general.",
        images: [
          "/portofoliu/interventiiRapide/urg-3/1.jpg",
          "/portofoliu/interventiiRapide/urg-3/2.jpg",
        ],
        client: "Complex rezidențial",
        location: "Timișoara",
      },
      {
        id: "urg-4",
        title: "Intervenție declanșare RCCBO GENERAL",
        description:
          "Repararea unei defecțiuni care declanșa dispozitivul de protecție RCCBO.",
        images: [
          "/portofoliu/interventiiRapide/urg-4/1.jpg",
          "/portofoliu/interventiiRapide/urg-4/2.jpg",
        ],
        client: "Complex rezidențial",
        location: "Timișoara, Zona Mosnita Veche",
      },
      {
        id: "urg-5",
        title: "Intervenție în regim de urgență",
        description:
          "Repararea unor circuite electrice afectate de un scurtcircuit ",
        images: [
          "/portofoliu/interventiiRapide/urg-5/1.jpg",
          "/portofoliu/interventiiRapide/urg-5/2.jpg",
        ],
        client: "Apartament 3 camere",
        location: "Timișoara, Centrala",
      },
      {
        id: "urg-6",
        title: "Intervenție la un panou electric vechi realizat neconform",
        description:
          "Remedierea unor defecte la un panou electric vechi, realizat neconform cu normele în vigoare",
        images: [
          "/portofoliu/interventiiRapide/urg-6/1.jpg",
          "/portofoliu/interventiiRapide/urg-6/2.jpg",
          "/portofoliu/interventiiRapide/urg-6/3.jpg",
          "/portofoliu/interventiiRapide/urg-6/4.jpg",
        ],
        client: "Apartament ",
        location: "Timișoara, Centrala",
      },
      {
        id: "urg-7",
        title: "Intervenție înlocuire priză clasică",
        description: "Înlocuire priză clasică cu priză în regim de urgență",
        images: [
          "/portofoliu/interventiiRapide/urg-7/1.jpg",
          "/portofoliu/interventiiRapide/urg-7/2.jpg",
          "/portofoliu/interventiiRapide/urg-7/3.jpg",
          "/portofoliu/interventiiRapide/urg-7/4.jpg",
        ],
        client: "Apartament",
        location: "Timișoara, Zona Lipovei",
      },
      {
        id: "urg-8",
        title: "Intervenție la un circuit de hotă străpuns",
        description:
          "Repararea unui circuit electric defect care alimenta o hotă de bucătărie",
        images: ["/portofoliu/interventiiRapide/urg-8/1.jpg"],
        client: "Apartament",
        location: "Timișoara, Zona Lipovei",
      },
      {
        id: "urg-9",
        title: "Identificare încărcări pe fază-zonă",
        description:
          "Identificarea și remedierea unor probleme de încărcare pe fază într-un spațiu de producție",
        images: ["/portofoliu/interventiiRapide/urg-9/1.jpg"],
        client: "Brutărie",
        location: "Timișoara, Zona Freidorf",
      },
      {
        id: "urg-10",
        title: "Refacere panou electric vechi",
        description:
          "Refacerea unui panou electric vechi, realizat neconform cu normele în vigoare",
        images: [
          "/portofoliu/interventiiRapide/urg-10/1.jpg",
          "/portofoliu/interventiiRapide/urg-10/2.jpg",
        ],
        client: "Apartament",
        location: "Timișoara, Zona Bucovinei",
      },
    ],
  },
  specialProjects: {
    title: "Proiecte în Telecomunicații",
    icon: <CellTower />,
    description:
      "Implementare infrastructură și sisteme de telecomunicații performante",
    items: [
      {
        id: "tel-1",
        title: "Rețea Fibră Optică Clădire Birouri",
        description:
          "Instalarea unei rețele complete de fibră optică într-o clădire de birouri, incluzând cablare structurată, rack-uri și echipamente de distribuție.",
        images: ["/rackServer.jpg", "/fibraOptica.jpg", "/retea.jpg"],
        client: "Centru de afaceri, City Business Centre",
        location: "Timișoara, City Business Centre",
      },
      {
        id: "tel-2",
        title: "Sistem Telecomunicații Industrial",
        description:
          "Implementarea unui sistem de telecomunicații pentru o fabrică, incluzând telefonie IP, rețea internă și conexiuni redundante.",
        images: ["/serverRoom.jpg", "/telefonieIP.jpg", "/retea2.jpg"],
        client: "Fabrică producție electronică, Parcul Industrial",
        location: "Parcul Industrial Freidorf, Timișoara",
      },
      {
        id: "tel-3",
        title: "Turnuri Telecomunicații Rurale",
        description:
          "Instalarea și configurarea echipamentelor pentru turnuri de telecomunicații în zone rurale, oferind acces la internet și semnal mobil.",
        images: ["/turn.jpg", "/antene.jpg", "/cabinet.jpg"],
        client: "Operator regional de telecomunicații",
        location: "Diverse localități din județul Timiș",
      },
    ],
  },
};

// Combine all portfolio items for the "All" category
const allPortfolioItems = [
  ...portfolioData.residential.items,
  ...portfolioData.commercial.items,
  ...portfolioData.emergency.items,
  ...portfolioData.specialProjects.items,
];

const PortfolioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // State for modal
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle category change
  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setActiveCategory(newValue);
  };

  // Handle opening modal for a portfolio item
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpenModal = (item: any) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setOpenModal(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Navigate to next image in modal
  const handleNextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Navigate to previous image in modal
  const handlePrevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Get current portfolio items based on active category
  const getCurrentItems = () => {
    if (activeCategory === "all") {
      return allPortfolioItems;
    }
    return (
      portfolioData[activeCategory as keyof typeof portfolioData]?.items || []
    );
  };

  return (
    <Box sx={{ pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
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
              Portofoliu Lucrări
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
              Explorați galeria noastră de proiecte finalizate pentru a vedea
              calitatea și diversitatea lucrărilor realizate de echipa
              DIELECTRIC CUBE.
            </Typography>

            {/* Category Tabs */}
            <Paper
              elevation={2}
              sx={{
                borderRadius: 2,
                mb: 4,
                overflow: "hidden",
                border: `1px solid ${theme.palette.colors.darkBlue}`,
              }}
            >
              <Tabs
                value={activeCategory}
                onChange={handleCategoryChange}
                variant="fullWidth"
                scrollButtons="auto"
                indicatorColor="primary"
                textColor="primary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: theme.palette.colors.dielectricRed,
                    height: 3,
                  },
                  "& .MuiTab-root": {
                    fontWeight: 600,
                    py: 2,

                    minHeight: isSmall ? "auto" : 70,
                    minWidth: isMobile ? 0 : undefined,
                  },
                  "& .Mui-selected": {
                    color: `${theme.palette.colors.darkBlue} !important`,
                  },
                }}
              >
                <Tab
                  icon={<Construction />}
                  label="Toate"
                  value="all"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<Home />}
                  label="Rezidențiale"
                  value="residential"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<Business />}
                  label="Comerciale"
                  value="commercial"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<FlashOn />}
                  label="Urgențe"
                  value="emergency"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<CellTower />}
                  label="Telecom"
                  value="specialProjects"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
              </Tabs>
            </Paper>

            {/* Category Description */}
            {activeCategory !== "all" && (
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  mb: 4,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.colors.lightBlue}`,
                  backgroundColor: "rgba(245, 245, 245, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    bgcolor: theme.palette.colors.darkBlue,
                    p: 1,
                    borderRadius: "50%",
                    display: "flex",
                  }}
                >
                  {
                    portfolioData[activeCategory as keyof typeof portfolioData]
                      ?.icon
                  }
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.colors.darkBlue,
                      fontWeight: 600,
                    }}
                  >
                    {
                      portfolioData[
                        activeCategory as keyof typeof portfolioData
                      ]?.title
                    }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {
                      portfolioData[
                        activeCategory as keyof typeof portfolioData
                      ]?.description
                    }
                  </Typography>
                </Box>
              </Paper>
            )}

            {/* Portfolio Items Grid */}
            <Grid container spacing={3}>
              {getCurrentItems().map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
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
                      border: `1px solid ${
                        index % 2 === 0
                          ? theme.palette.colors.darkBlue
                          : theme.palette.colors.dielectricRed
                      }`,
                      overflow: "hidden",
                    }}
                  >
                    {/* Thumbnail Image */}
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.images[0]}
                      alt={item.title}
                      sx={{
                        objectFit: "cover",
                        transition: "transform 0.5s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleOpenModal(item)}
                        startIcon={<ElectricalServices />}
                        fullWidth
                        sx={{
                          mt: "auto",
                          borderColor:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                          color:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                          "&:hover": {
                            borderColor:
                              index % 2 === 0
                                ? theme.palette.colors.darkBlue
                                : theme.palette.colors.dielectricRed,
                            backgroundColor:
                              index % 2 === 0
                                ? "rgba(19, 49, 92, 0.05)"
                                : "rgba(196, 30, 58, 0.05)",
                          },
                        }}
                      >
                        Vezi detalii
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Empty state when no items */}
            {getCurrentItems().length === 0 && (
              <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h6" color="text.secondary">
                  Nu există proiecte în această categorie momentan.
                </Typography>
              </Box>
            )}

            {/* Detail View Modal */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="portfolio-modal-title"
              aria-describedby="portfolio-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: isMobile ? "95%" : "80%",
                  maxWidth: "900px",
                  maxHeight: "90vh",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                  overflow: "auto",
                  p: 0,
                }}
              >
                {selectedItem && (
                  <>
                    {/* Modal Header */}
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: theme.palette.colors.darkBlue,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h2"
                        id="portfolio-modal-title"
                      >
                        {selectedItem.title}
                      </Typography>
                      <IconButton
                        onClick={handleCloseModal}
                        size="small"
                        sx={{ color: "white" }}
                      >
                        <Close />
                      </IconButton>
                    </Box>

                    {/* Image Gallery */}
                    <Box sx={{ position: "relative" }}>
                      <Box
                        component="img"
                        src={selectedItem.images[currentImageIndex]}
                        alt={`${selectedItem.title} - imagine ${
                          currentImageIndex + 1
                        }`}
                        sx={{
                          width: "100%",
                          height: isMobile ? "250px" : "400px",
                          objectFit: "cover",
                        }}
                      />

                      {/* Image Navigation */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          px: 2,
                        }}
                      >
                        <IconButton
                          onClick={handlePrevImage}
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            color: "white",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                          }}
                        >
                          <ArrowBack />
                        </IconButton>
                        <IconButton
                          onClick={handleNextImage}
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            color: "white",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                          }}
                        >
                          <ArrowForward />
                        </IconButton>
                      </Box>

                      {/* Image Pagination */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: 1,
                          bgcolor: "rgba(0,0,0,0.5)",
                          borderRadius: 5,
                          p: 0.5,
                        }}
                      >
                        {selectedItem.images.map((_: string, i: number) => (
                          <Box
                            key={i}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor:
                                i === currentImageIndex
                                  ? "white"
                                  : "rgba(255,255,255,0.5)",
                              cursor: "pointer",
                            }}
                            onClick={() => setCurrentImageIndex(i)}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        id="portfolio-modal-description"
                        paragraph
                      >
                        {selectedItem.description}
                      </Typography>

                      <Divider sx={{ my: 2 }} />

                      {/* Details */}
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Client:
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {selectedItem.client}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Locație:
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {selectedItem.location}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </>
                )}
              </Box>
            </Modal>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PortfolioPage;

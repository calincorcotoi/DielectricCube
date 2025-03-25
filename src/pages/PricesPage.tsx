import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import {
  ExpandMore,
  ConstructionOutlined,
  CableOutlined,
  PowerOutlined,
  HandymanOutlined,
  WhatsApp,
  Call,
} from "@mui/icons-material";

const PricesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Price categories with their items
  const priceCategories = [
    {
      title: "Instalații Electrice - Manoperă",
      icon: <ConstructionOutlined />,
      items: [
        { name: "Montare priză simplă", price: "123 lei" },
        { name: "Montare priză simplă", price: "30 lei" },
        { name: "Montare întrerupător simplu", price: "30 lei" },
        { name: "Montare priză dublă", price: "40 lei" },
        { name: "Montare întrerupător dublu", price: "40 lei" },
        { name: "Montare aplică/plafonieră", price: "40-60 lei" },
        {
          name: "Montare tablou electric apartament (până la 8 module)",
          price: "150 lei",
        },
        {
          name: "Montare tablou electric casă (12-24 module)",
          price: "200-350 lei",
        },
        {
          name: "Realizare circuit electric îngropat (per metru)",
          price: "15-25 lei",
        },
        {
          name: "Realizare circuit electric aparent (per metru)",
          price: "12-20 lei",
        },
        { name: "Înlocuire tablou electric vechi", price: "100-250 lei" },
      ],
    },
    {
      title: "Materiale Electrice",
      icon: <CableOutlined />,
      items: [
        { name: "Priză simplă Schneider", price: "20-35 lei" },
        { name: "Întrerupător simplu Schneider", price: "20-35 lei" },
        {
          name: "Cablu electric cupru 3x1.5 mmp (per metru)",
          price: "5-8 lei",
        },
        {
          name: "Cablu electric cupru 3x2.5 mmp (per metru)",
          price: "7-10 lei",
        },
        { name: "Doză aparat", price: "3-5 lei" },
        { name: "Doză derivație", price: "5-8 lei" },
        { name: "Tablou electric 8 module", price: "50-80 lei" },
        { name: "Tablou electric 12 module", price: "70-120 lei" },
        { name: "Tablou electric 24 module", price: "120-200 lei" },
        { name: "Diferențial (protecție) 25A", price: "120-180 lei" },
      ],
    },
    {
      title: "Instalații Electrice Complexe",
      icon: <PowerOutlined />,
      items: [
        {
          name: "Proiectare și instalare sistem electric casă",
          price: "3000-8000 lei",
        },
        { name: "Instalare panou fotovoltaic", price: "800-1500 lei/panou" },
        {
          name: "Instalare sistem încălzire electrică",
          price: "1500-4000 lei",
        },
        { name: "Instalare sistem smart home", price: "2000-5000 lei" },
        { name: "Implementare sistem de automatizare", price: "1500-7000 lei" },
      ],
    },
    {
      title: "Intervenții și Service",
      icon: <HandymanOutlined />,
      items: [
        {
          name: "Identificare și remediere defect simplu",
          price: "100-200 lei",
        },
        {
          name: "Intervenție urgentă în timpul programului",
          price: "150 lei + manoperă",
        },
        {
          name: "Intervenție urgentă în afara programului",
          price: "250 lei + manoperă",
        },
        { name: "Verificare instalație electrică", price: "150-300 lei" },
        {
          name: "Consultanță pentru proiecte electrice (per oră)",
          price: "100 lei",
        },
      ],
    },
  ];

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
              Lista de Prețuri
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
              Mai jos puteți consulta lista noastră de prețuri orientative
              pentru servicii și materiale. Prețurile finale pot varia în
              funcție de complexitatea lucrării și specificul fiecărui proiect.
            </Typography>

            {/* Price Categories - Desktop View */}
            {!isMobile && (
              <Grid container spacing={4}>
                {priceCategories.map((category, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={2}
                      sx={{
                        mb: 2,
                        overflow: "hidden",
                        borderRadius: 2,
                        border: `1px solid ${
                          index % 2 === 0
                            ? theme.palette.colors.darkBlue
                            : theme.palette.colors.dielectricRed
                        }`,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                          color: "white",
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ mr: 2 }}>{category.icon}</Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {category.title}
                        </Typography>
                      </Box>

                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow
                              sx={{
                                bgcolor: "rgba(0, 0, 0, 0.04)",
                              }}
                            >
                              <TableCell sx={{ fontWeight: 600 }}>
                                Denumire serviciu/produs
                              </TableCell>
                              <TableCell align="right" sx={{ fontWeight: 600 }}>
                                Preț orientativ
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {category.items.map((item, itemIndex) => (
                              <TableRow
                                key={itemIndex}
                                sx={{
                                  "&:nth-of-type(odd)": {
                                    bgcolor: "rgba(0, 0, 0, 0.02)",
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {item.name}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    fontWeight: 600,
                                    color:
                                      index % 2 === 0
                                        ? theme.palette.colors.darkBlue
                                        : theme.palette.colors.dielectricRed,
                                  }}
                                >
                                  {item.price}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Price Categories - Mobile View */}
            {isMobile && (
              <Box sx={{ mb: 4 }}>
                {priceCategories.map((category, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      mb: 2,
                      borderRadius: "8px !important",
                      overflow: "hidden",
                      "&:before": { display: "none" },
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1) !important",
                      border: `1px solid ${
                        index % 2 === 0
                          ? theme.palette.colors.darkBlue
                          : theme.palette.colors.dielectricRed
                      }`,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore sx={{ color: "white" }} />}
                      sx={{
                        bgcolor:
                          index % 2 === 0
                            ? theme.palette.colors.darkBlue
                            : theme.palette.colors.dielectricRed,
                        color: "white",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ mr: 2 }}>{category.icon}</Box>
                        <Typography sx={{ fontWeight: 600 }}>
                          {category.title}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}>
                      <Table>
                        <TableHead>
                          <TableRow
                            sx={{
                              bgcolor: "rgba(0, 0, 0, 0.04)",
                            }}
                          >
                            <TableCell sx={{ fontWeight: 600 }}>
                              Denumire serviciu/produs
                            </TableCell>
                            <TableCell align="right" sx={{ fontWeight: 600 }}>
                              Preț orientativ
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {category.items.map((item, itemIndex) => (
                            <TableRow
                              key={itemIndex}
                              sx={{
                                "&:nth-of-type(odd)": {
                                  bgcolor: "rgba(0, 0, 0, 0.02)",
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {item.name}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontWeight: 600,
                                  color:
                                    index % 2 === 0
                                      ? theme.palette.colors.darkBlue
                                      : theme.palette.colors.dielectricRed,
                                }}
                              >
                                {item.price}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {/* Notes Section */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                border: `1px solid ${theme.palette.colors.darkBlue}`,
                mt: 4,
                bgcolor: "rgba(245, 245, 245, 0.9)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 1, color: theme.palette.colors.darkBlue }}
              >
                Note importante:
              </Typography>
              <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                <li>
                  <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                    Prețurile afișate sunt orientative și pot varia în funcție
                    de complexitatea lucrării.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                    Pentru lucrări complexe oferim o evaluare gratuită la fața
                    locului și o ofertă personalizată.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                    Prețurile pentru materiale pot varia în funcție de marca și
                    calitatea aleasă.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                    La toate prețurile se adaugă TVA conform legislației în
                    vigoare.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" paragraph sx={{ mb: 0 }}>
                    Deplasarea în Timișoara este gratuită, pentru zonele
                    limitrofe se poate percepe o taxă suplimentară în funcție de
                    distanță.
                  </Typography>
                </li>
              </ul>
            </Paper>
          </CardContent>
        </Card>

        {/* Call To Action Section */}
        <Card
          elevation={3}
          sx={{
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.colors.darkBlue} 0%, ${theme.palette.colors.lightBlue} 100%)`,
            color: "white",
            p: 4,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Solicitați o ofertă personalizată
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}
            >
              Pentru a primi o ofertă exactă pentru proiectul dumneavoastră,
              contactați-ne și vă vom oferi o evaluare detaliată și un plan de
              lucru personalizat.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Call />}
                sx={{
                  bgcolor: theme.palette.colors.dielectricRed,
                  "&:hover": { bgcolor: "#cc2a00", transform: "scale(1.03)" },
                  transition: "transform 0.3s",
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
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PricesPage;

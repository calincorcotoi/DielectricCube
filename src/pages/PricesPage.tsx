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
        {
          name: "Serviciu de deplasare pe raza localitatii Timisoara lucrari neprogramate in intervalul orar 08:00-17:00",
          unit: "buc",
          price: "75 lei",
        },
        {
          name: "Serviciu de deplasare pe raza localitatii Timisoara lucrari neprogramate in intervalul orar 17:00-22:00",
          unit: "buc",
          price: "120 lei",
        },
        {
          name: "Serviciu de deplasare pe raza localitatii Timisoara lucrari neprogramate in intervalul orar 22:00-06:00",
          unit: "buc",
          price: "240 lei",
        },
        {
          name: "Serviciu diagnosticare defect in instalatia electrica",
          unit: "ora",
          price: "140 lei",
        },
        {
          name: "Serviciu manopera electrician lucrari atipice",
          unit: "ora",
          price: "140 lei",
        },
        {
          name: "Serviciu achizitie materiale electrice in Timisoara",
          unit: "buc",
          price: "75 lei",
        },
        {
          name: "Serviciu antemasuratori pentru instalații electrice noi in Timisoara",
          unit: "buc",
          price: "250 lei",
        },
        { name: "Tarif km suplimentari pe traseu", unit: "km", price: "3 lei" },
        {
          name: "Serviciu Demontare aparataj electric",
          unit: "buc",
          price: "15 lei",
        },
        {
          name: "Serviciu Demontare siguranță protectie circuit electric",
          unit: "buc",
          price: "30 lei",
        },
        {
          name: "Serviciu Adaugare siguranta protectie monofazata in panou electric existent",
          unit: "buc",
          price: "50 lei",
        },
        {
          name: "Serviciu Adaugare siguranta protectie trifazata in panou electric existent",
          unit: "buc",
          price: "75 lei",
        },
        {
          name: "Serviciu Demontare corp de iluminat (aplică, plafonieră, lampă, spot)",
          unit: "buc",
          price: "35 lei",
        },
        {
          name: "Serviciu Demontare corp de iluminat (lustră)",
          unit: "buc",
          price: "50 lei",
        },
        {
          name: "Serviciu montaj corp de iluminat (aplică, plafonieră, lampă, spot)",
          unit: "buc",
          price: "55 lei",
        },
        {
          name: "Serviciu montaj corp de iluminat (lustră) pana in 5 kg",
          unit: "buc",
          price: "95 lei",
        },
        {
          name: "Serviciu montaj corp de iluminat (lustră) peste 5 kg",
          unit: "buc",
          price: "300-500 lei",
        },
        {
          name: "Serviciu desigilare resigilare contor electric",
          unit: "buc",
          price: "300 lei",
        },
        {
          name: "Serviciu montaj cutie panou electric monofazat 12-36 module PT",
          unit: "buc",
          price: "175 lei",
        },
        {
          name: "Serviciu montaj cutie panou electric monofazat 48-120 Module PT",
          unit: "buc",
          price: "450 lei",
        },
        {
          name: "Serviciu montaj doza aparataj electric modular 3 Module/caramida",
          unit: "buc",
          price: "65 lei",
        },
        {
          name: "Serviciu montaj doza aparataj electric modular 4 Module/caramida",
          unit: "buc",
          price: "75 lei",
        },
        {
          name: "Serviciu montaj doza aparataj electric modular 6 Module/caramida",
          unit: "buc",
          price: "85 lei",
        },
        {
          name: "Serviciu montaj aparataj electric rotund CLASIC",
          unit: "buc",
          price: "50 lei",
        },
        {
          name: "Serviciu montaj aparataj electric MODULAR",
          unit: "buc",
          price: "25 lei",
        },
        {
          name: "Serviciu montaj plită electrică inductie monofazata/trifazata",
          unit: "buc",
          price: "150 lei",
        },
        {
          name: "Serviciu montaj cuptor electric",
          unit: "buc",
          price: "120 lei",
        },
        {
          name: "Serviciu Montaj tub rigid PVC",
          unit: "metru liniar",
          price: "5 lei",
        },
        {
          name: "Serviciu Montaj tub flexibil COPEX pardoseala",
          unit: "metru liniar",
          price: "5 lei",
        },
        {
          name: "Serviciu Montaj tub flexibil COPEX tavan",
          unit: "metru liniar",
          price: "10 lei",
        },
        {
          name: "Serviciu instalare cablu CYY-F,NYM-J,EYY-J prin copex 3x2,5 mmp",
          unit: "metru liniar",
          price: "7.5 lei",
        },
        {
          name: "Serviciu fixare cablu CYY-F,NYM-J,EYY-J prin copex 3x2,5 mmp pe pardoseala",
          unit: "metru liniar",
          price: "5 lei",
        },
        {
          name: "Serviciu fixare cablu CYY-F,NYM-J,EYY-J prin copex 3x2,5 mmp pe tavan",
          unit: "metru liniar",
          price: "15 lei",
        },
        {
          name: "Serviciu realizare traseu electric spart caramida",
          unit: "metru liniar",
          price: "18 lei",
        },
        {
          name: "Serviciu realizare traseu electric spart beton",
          unit: "metru liniar",
          price: "45 lei",
        },
        {
          name: "Serviciu debitare/taiere caramida",
          unit: "metru liniar",
          price: "7.5 lei",
        },
        {
          name: "Serviciu debitare/taiere beton",
          unit: "metru liniar",
          price: "25 lei",
        },
        {
          name: "Serviciu carotare doza rotunda aparataj clasic caramida",
          unit: "buc",
          price: "55 lei",
        },
        {
          name: "Serviciu carotare doza rotunda aparataj clasic beton",
          unit: "buc",
          price: "110 lei",
        },
        {
          name: "Serviciu realizare impamantare artificiala pe adancime maxim 4 tarusi",
          unit: "buc",
          price: "800 lei",
        },
        {
          name: "Serviciu realizare impamantare artificiala (fara serviciu de sapatura, fara materiale incluse)",
          unit: "buc/tarus",
          price: "200 lei",
        },
      ],
    },
    {
      title: "Materiale Electrice",
      icon: <CableOutlined />,
      items: [
        {
          name: "Priza modulara Gewiss SCHUKO",
          unit: "buc",
          price: "10.5 lei",
        },
        {
          name: "Priza modulara PANASONIC SCHUKO",
          unit: "buc",
          price: "12 lei",
        },
        {
          name: "Priza modulara BTCINO SCHUKO",
          unit: "buc",
          price: "17.85 lei",
        },
        {
          name: "Intrerupator modular Gewiss simplu",
          unit: "buc",
          price: "9 lei",
        },
        {
          name: "Intrerupator modular Gewiss cap scara",
          unit: "buc",
          price: "11 lei",
        },
        {
          name: "Intrerupator modular Gewiss cap cruce",
          unit: "buc",
          price: "15 lei",
        },
        { name: "Priza internet CAT 5 modular", unit: "buc", price: "55 lei" },
        { name: "Priza internet TV modulara", unit: "buc", price: "30 lei" },
        { name: "Rama suport 2M", unit: "buc", price: "4 lei" },
        { name: "Rama suport 3M", unit: "buc", price: "4.5 lei" },
        { name: "Rama suport 4M", unit: "buc", price: "6 lei" },
        { name: "Rama suport 6M", unit: "buc", price: "8 lei" },
        {
          name: "Rama ornamentala Gewiss System 1M",
          unit: "buc",
          price: "9 lei",
        },
        {
          name: "Rama ornamentala Gewiss System 2M",
          unit: "buc",
          price: "6.5 lei",
        },
        {
          name: "Rama ornamentala Gewiss System 3M",
          unit: "buc",
          price: "5.9 lei",
        },
        {
          name: "Rama ornamentala Gewiss System 4M",
          unit: "buc",
          price: "11.5 lei",
        },
        {
          name: "Rama ornamentala Gewiss System 6M",
          unit: "buc",
          price: "11.99 lei",
        },
        {
          name: "Doza modulara Gewiss caramida 3M",
          unit: "buc",
          price: "1.2 lei",
        },
        {
          name: "Doza modulara Gewiss caramida 4M",
          unit: "buc",
          price: "3.7 lei",
        },
        {
          name: "Doza modulara Gewiss caramida 6M",
          unit: "buc",
          price: "6.4 lei",
        },
        {
          name: "Doza modulara Gewiss caramida 8M",
          unit: "buc",
          price: "10.9 lei",
        },
        {
          name: "Doza modulara Gewiss caramida 12M",
          unit: "buc",
          price: "11 lei",
        },
        { name: "Rama suport contor monofazat", unit: "buc", price: "30 lei" },
        { name: "Portfuzibil Monofazat 2P", unit: "buc", price: "45 lei" },
        {
          name: "Intrerupator diferential RCCB 2P 40A 30mA tip NOARK",
          unit: "buc",
          price: "120 lei",
        },
        {
          name: "Intrerupator diferential RCCB 2P 40A 30mA tip SCHRACK",
          unit: "buc",
          price: "169 lei",
        },
        { name: "MCB 1P+N B16", unit: "buc", price: "27 lei" },
        { name: "MCB 1P+N B10", unit: "buc", price: "27 lei" },
        { name: "MCB 1P B16", unit: "buc", price: "19 lei" },
        { name: "MCB 1P B10", unit: "buc", price: "19 lei" },
        { name: "BUSBAR TIP FURCA", unit: "buc", price: "120 lei" },
        { name: "PANOU ELECTRIC 12M PT", unit: "buc", price: "85 lei" },
        { name: "PANOU ELECTRIC 18M PT", unit: "buc", price: "150 lei" },
        { name: "PANOU ELECTRIC 24M PT", unit: "buc", price: "185 lei" },
        { name: "PANOU ELECTRIC 36M PT", unit: "buc", price: "275 lei" },
        { name: "CABLU CYY-F 3x2.5 mmp", unit: "ml", price: "5.5 lei" },
        { name: "CABLU CYY-F 3x1.5 mmp", unit: "ml", price: "4.9 lei" },
        { name: "CABLU NYM-J 3x2.5 mmp", unit: "ml", price: "6.4 lei" },
        { name: "CABLU NYM-J 3x2.5 mmp", unit: "ml", price: "6 lei" },
        { name: "CABLU EYY-J 3x2.5 mmp", unit: "ml", price: "9.52 lei" },
        { name: "CABLU EYY-J 3x1.5 mmp", unit: "ml", price: "8.52 lei" },
        { name: "COPEX FY 16 cu fir de tragere", unit: "ml", price: "1.5 lei" },
        { name: "COPEX FY 20 cu fir de tragere", unit: "ml", price: "1.7 lei" },
        { name: "COPEX FY 25 cu fir de tragere", unit: "ml", price: "1.9 lei" },
      ],
    },
    {
      title: "Instalații Electrice Complexe",
      icon: <PowerOutlined />,
      items: [
        {
          name: "Intocmire dosar de utilizare instalatie electrica",
          unit: "buc",
          price: "1500 lei",
        },
        { name: "Intocmire dosar prosumator", unit: "buc", price: "2000 lei" },
        {
          name: "Realizare masuratori impamantare si emitere buletin masura",
          unit: "buc",
          price: "300 lei",
        },
        {
          name: "Verificari masuratori prize continuitate (raport anual ITM)",
          unit: "buc",
          price: "25 lei",
        },
        {
          name: "Realizare instalatie electrica apartament cu o camera beton maxim (maxim 8 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "6500 lei",
        },
        {
          name: "Realizare instalatie electrica apartament cu doua camere beton maxim (maxim 12 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "8500 lei",
        },
        {
          name: "Realizare instalatie electrica apartament cu trei camere beton maxim (maxim 16 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "10500 lei",
        },
        {
          name: "Realizare instalatie electrica apartament cu patru camere beton maxim (maxim 20 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "13000 lei",
        },
        {
          name: "Realizare instalatie electrica casa standard (maxim 20 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "14000 lei",
        },
        {
          name: "Realizare instalatie electrica casa medie (maxim 30 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "18000 lei",
        },
        {
          name: "Realizare instalatie electrica casa (maxim 40 circuite dedicate / fara materiale incluse)",
          unit: "buc",
          price: "20000 lei",
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
                              <TableCell
                                align="center"
                                sx={{ fontWeight: 600 }}
                              >
                                Unitate de măsură
                              </TableCell>
                              <TableCell align="right" sx={{ fontWeight: 600 }}>
                                Preț orientativ fără TVA
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
                                <TableCell align="center">
                                  {item.unit}
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
                      <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow
                              sx={{
                                bgcolor: "rgba(0, 0, 0, 0.04)",
                              }}
                            >
                              <TableCell
                                align="left"
                                sx={{
                                  fontWeight: 600,
                                  py: 1,
                                  px: { xs: 1, sm: 2 },
                                }}
                              >
                                Denumire serviciu/produs
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{
                                  fontWeight: 600,
                                  py: 1,
                                  px: { xs: 1, sm: 2 },
                                }}
                              >
                                Unitate de măsură
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontWeight: 600,
                                  py: 1,
                                  px: { xs: 1, sm: 2 },
                                }}
                              >
                                Preț orientativ fără TVA
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
                                <TableCell
                                  align="left"
                                  component="th"
                                  scope="row"
                                  sx={{
                                    py: 1,
                                    px: { xs: 1, sm: 5 },
                                    maxWidth: { xs: "10px", sm: "none" },
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                  }}
                                >
                                  {item.name}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{ py: 1, px: { xs: 1, sm: 2 } }}
                                >
                                  {item.unit}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    fontWeight: 600,
                                    py: 1,
                                    px: { xs: 1, sm: 2 },
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

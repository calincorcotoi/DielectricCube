import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  Paper,
  useMediaQuery,
} from "@mui/material";
import {
  Business,
  LocationOn,
  EmojiObjects,
  Engineering,
  Brightness7,
  Security,
} from "@mui/icons-material";

const flex = "/flex.jpg";
const domasneanuIlie = "/echipa/domasneanuIlie.jpg";
const vargaZoltan = "/echipa/vargaZoltan.jpg";

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Company values with icons
  const companyValues = [
    {
      title: "Profesionalism",
      icon: <Engineering sx={{ fontSize: 40 }} />,
      description:
        "Oferim servicii de cea mai înaltă calitate, respectând toate standardele și normele în vigoare.",
    },
    {
      title: "Siguranță",
      icon: <Security sx={{ fontSize: 40 }} />,
      description:
        "Siguranța clienților noștri este prioritatea noastră numărul unu în toate lucrările pe care le executăm.",
    },
    {
      title: "Inovație",
      icon: <EmojiObjects sx={{ fontSize: 40 }} />,
      description:
        "Folosim cele mai noi tehnologii și metode pentru a oferi soluții moderne și eficiente.",
    },
    {
      title: "Transparență",
      icon: <Brightness7 sx={{ fontSize: 40 }} />,
      description:
        "Suntem deschiși și transparenți în toate aspectele colaborării cu clienții noștri.",
    },
  ];
  // Array of team members - add this before the return statement
  const teamMembers = [
    {
      name: "Domasneanu Ilie",
      role: "Expert Proiecte",
      description:
        "Cu peste 20 ani de experiență în domeniul instalațiilor electrice, Ilie coordonează toate proiectele tehnice ale companiei. Expertiza sa vastă și atenția la detalii asigură că fiecare lucrare este executată la cele mai înalte standarde.",
      quote:
        '"Siguranța și calitatea sunt prioritățile mele în fiecare proiect pe care îl supervizez."',
      image: domasneanuIlie,
    },
    {
      name: "Varga Zoltan",
      role: "Specialist Proiecte",
      description:
        "Zoltan este expertul nostru în proiectare electrică, cu o experiență de peste 15 ani în domeniu. El se asigură că fiecare proiect este planificat eficient și implementat conform celor mai recente norme și standarde.",
      quote:
        '"Îmi place să transform viziunea clienților în soluții electrice practice și durabile."',
      image: vargaZoltan,
    },
  ];

  return (
    <>
      {/* Team Section */}
      <Box sx={{ pt: 6, pb: 3 }}>
        <Container maxWidth="lg">
          <Card
            elevation={3}
            sx={{
              p: isMobile ? 0 : 3,
              borderRadius: 2,
              background: `linear-gradient(to right, white, ${theme.palette.colors.cream})`,
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
                    background: `linear-gradient(to right, ${theme.palette.colors.dielectricRed}, ${theme.palette.colors.darkBlue})`,
                    borderRadius: "2px",
                  },
                }}
              >
                Cunoaște Echipa
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
                  p: isMobile ? 3 : 0,
                }}
              >
                Profesioniștii din spatele DIELECTRIC CUBE care aduc
                electricitate și lumină în proiectele dumneavoastră.
              </Typography>

              <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        height: "100%",
                        transition: "all 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        },
                        border: `2px solid ${theme.palette.colors.teal}`,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: isMobile ? "100%" : "40%",
                          position: "relative",
                        }}
                      >
                        <Box
                          component="img"
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: "100%",
                            height: isMobile ? "300px" : "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </Box>
                      <CardContent sx={{ width: isMobile ? "100%" : "60%" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            color: theme.palette.colors.darkBlue,
                            fontWeight: 600,
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontWeight: 500 }}
                        >
                          {member.role}
                        </Typography>
                        <Typography variant="body1">
                          {member.description}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                          {member.quote}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
      {/* Company Story Section */}
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
                Povestea Noastră
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
                Aflați mai multe despre parcursul nostru și valorile care ne
                ghidează în oferirea unor servicii electrice de calitate.
              </Typography>

              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={flex}
                    alt="Dielectric Cube"
                    sx={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      display: "block",
                      mx: "auto",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: theme.palette.colors.darkBlue,
                      fontWeight: 600,
                    }}
                  >
                    <Business
                      sx={{ mr: 1, verticalAlign: "middle", fontSize: 30 }}
                    />
                    Începutul
                  </Typography>
                  <Typography paragraph>
                    DIELECTRIC CUBE a fost fondată din pasiunea pentru
                    instalații electrice sigure și de calitate. Cu o experiență
                    vastă în domeniul instalațiilor electrice, am decis să punem
                    bazele unei companii care să ofere servicii complete pentru
                    clienții din Timișoara și împrejurimi.
                  </Typography>
                  <Typography paragraph>
                    Misiunea noastră este să asigurăm soluții electrice
                    profesionale, sigure și de încredere pentru fiecare client.
                    Ne dedicăm fiecărui proiect cu atenție la detalii și
                    respectăm cele mai înalte standarde de calitate și
                    siguranță.
                  </Typography>
                  <Typography paragraph>
                    De la începuturile noastre modeste, am crescut constant
                    datorită recomandărilor clienților mulțumiți și a
                    angajamentului nostru față de excelență. Astăzi, suntem
                    recunoscuți ca unul dintre cei mai de încredere furnizori de
                    servicii electrice din Timișoara.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Card
            elevation={3}
            sx={{
              p: isMobile ? 0 : 3,
              borderRadius: 2,
              background: `linear-gradient(to right, white, ${theme.palette.colors.cream})`,
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
                    background: `linear-gradient(to right, ${theme.palette.colors.dielectricRed}, ${theme.palette.colors.darkBlue})`,
                    borderRadius: "2px",
                  },
                }}
              >
                Valorile Noastre
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
                  p: isMobile ? 3 : 0,
                }}
              >
                Principiile care ne ghidează activitatea și ne ajută să oferim
                servicii de excepție.
              </Typography>

              <Grid container spacing={3}>
                {companyValues.map((value, index) => (
                  <Grid item xs={12} sm={6} key={index}>
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
                        border: `2px solid ${
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
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        {value.icon}
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{ mt: 1, textAlign: "center", fontWeight: 600 }}
                        >
                          {value.title}
                        </Typography>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography variant="body1">
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Location Section */}
      <Box sx={{ py: 4, pb: 6 }}>
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
                Locația Noastră
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
                Ne găsiți în Timișoara, pregătiți să oferim servicii în întregul
                oraș și împrejurimi.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <LocationOn
                  sx={{
                    color: theme.palette.colors.dielectricRed,
                    fontSize: 30,
                    mr: 1,
                  }}
                />
                <Typography variant="h6">
                  Timișoara Str. Gavril Musicescu Nr. 22
                </Typography>
              </Box>

              <Paper elevation={4} sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1941842600416!2d21.21004971631342!3d45.72655882899811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d89b6fdcf57%3A0xccd7d81ff7dc158a!2sDIELECTRIC%20CUBE%20SRL!5e0!3m2!1sen!2sro!4v1686044899893!5m2!1sen!2sro"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DIELECTRIC CUBE Location"
                />
              </Paper>

              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.colors.darkBlue, mb: 2 }}
                >
                  Aria de Acoperire
                </Typography>
                <Typography>
                  Oferim servicii de electrician autorizat în Timișoara și
                  localitățile învecinate, inclusiv Dumbrăvița, Ghiroda,
                  Giarmata, Moșnița Nouă, și altele. Pentru detalii despre
                  deplasările în afara Timișoarei, vă rugăm să ne contactați.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;

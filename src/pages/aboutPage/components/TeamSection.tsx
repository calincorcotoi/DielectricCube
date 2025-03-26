import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const domasneanuIlie = "/despre/echipa/domasneanuIlie.jpg";
const vargaZoltan = "/despre/echipa/vargaZoltan.jpg";

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

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
              Profesioniștii din spatele DIELECTRIC CUBE care aduc electricitate
              și lumină în proiectele dumneavoastră.
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
  );
};

export default TeamSection;

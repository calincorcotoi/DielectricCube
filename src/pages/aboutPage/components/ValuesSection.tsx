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
import { Engineering, Security, EmojiObjects, Brightness7 } from "@mui/icons-material";

const ValuesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
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
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 2,
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      },
                      border: `2px solid ${theme.palette.colors.teal}`,
                    }}
                  >
                    <Box sx={{ mr: 3 }}>{value.icon}</Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          color: theme.palette.colors.darkBlue,
                          fontWeight: 600,
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography variant="body1">{value.description}</Typography>
                    </Box>
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

export default ValuesSection;
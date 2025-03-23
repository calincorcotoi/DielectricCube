import { Call, Email, LocationOn, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#05202f",
        color: "white",
        py: 4,
        textAlign: { xs: "center", md: "left" },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(to right, ${theme.palette.colors.darkBlue}50 1px, transparent 1px)`,
          backgroundSize: "50px 100%",
          opacity: 0.05,
        },
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: theme.palette.colors.cream }}
            >
              Date de Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Phone
                sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
              />
              <Link
                href="tel:+40770739248"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                0770 739 248
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Email
                sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
              />
              <Link
                href="mailto:contact@dielectric.ro"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                contact@dielectric.ro
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <LocationOn
                sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
              />
              <Typography variant="body2">Timișoara, România</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: theme.palette.colors.cream }}
            >
              Linkuri Rapide
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Link
                href="#"
                sx={{
                  color: "white",
                  mb: 1,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                Despre noi
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  mb: 1,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                Servicii
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  mb: 1,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                Calculator preț
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  mb: 1,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                Portofoliu
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: theme.palette.colors.cream }}
            >
              Program de Lucru
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Luni - Vineri: 08:00 - 20:00
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Sâmbătă: 09:00 - 16:00
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Duminică: Urgențe
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                startIcon={<Call />}
                sx={{
                  color: theme.palette.colors.cream,
                  borderColor: theme.palette.colors.cream,
                  "&:hover": {
                    borderColor: theme.palette.colors.dielectricRed,
                    backgroundColor: "rgba(255, 53, 0, 0.1)",
                  },
                }}
                component="a"
                href="tel:+40770739248"
              >
                Sună pentru urgențe
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 3, borderTop: "1px solid rgba(255,255,255,0.1)", pt: 2 }}
          >
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Dielectric Cube - Make Light in
              Darkness. Toate drepturile rezervate.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

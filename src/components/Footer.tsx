import {
  Call,
  Email,
  Facebook,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
                href="mailto:office@dielectric-cube.ro"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                office@dielectric-cube.ro
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
              <Typography variant="body2">
                Timișoara Str. Gavril Musicescu Nr. 22
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Facebook
                sx={{ mr: 1, color: theme.palette.colors.dielectricRed }}
              />
              <Link
                href="https://www.facebook.com/profile.php?id=100069137602216&rdid=OYooJzuq7wMD34Uh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12Ht4DGpsvG%2F#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                Facebook
              </Link>
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
                onClick={() => {
                  navigate("/despre");
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
                onClick={() => {
                  navigate("/servicii");
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
                onClick={() => {
                  navigate("/preturi");
                }}
              >
                Prețuri
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  mb: 1,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
                onClick={() => {
                  navigate("/portofoliu");
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
              Luni - Vineri: 08:00 - 16:00
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Sâmbătă -Duminică: Urgențe
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
                gap: 1,
              }}
            >
              <Typography variant="body2">Făcut de Călin Corcoțoi</Typography>
              <Link
                href="https://www.linkedin.com/in/c%C4%83lin-corco%C8%9Boi-87145b162/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: theme.palette.colors.cream },
                }}
              >
                <LinkedIn fontSize="small" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

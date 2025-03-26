import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Email, Facebook, Phone } from "@mui/icons-material";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
                  background: `linear-gradient(to right, ${theme.palette.colors.dielectricRed}, ${theme.palette.colors.darkBlue})`,
                  borderRadius: "2px",
                },
              }}
            >
              Date de Contact
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
              Ne găsiți în Timișoara, gata să vă oferim servicii electrice de
              calitate. Contactați-ne pentru mai multe detalii!
            </Typography>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.173!2d21.2126737!3d45.7265588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d89b6fdcf57%3A0xccd7d81ff7dc158a!2sDIELECTRIC+CUBE+SRL!5e0!3m2!1sen!2sro!4v1710000000000!5m2!1sen!2sro"
                  width="100%"
                  height="600"
                  style={{
                    border: 0,
                    borderRadius: "8px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="DIELECTRIC CUBE SRL Location"
                ></Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {[
                  {
                    icon: (
                      <Phone
                        sx={{
                          fontSize: 22,
                          color: theme.palette.colors.darkBlue,
                        }}
                      />
                    ),
                    text: "0770 739 248",
                    link: "tel:+40770739248",
                  },
                  {
                    icon: (
                      <Email
                        sx={{
                          fontSize: 22,
                          color: theme.palette.colors.darkBlue,
                        }}
                      />
                    ),
                    text: "office@dielectric-cube.ro",
                    link: "mailto:office@dielectric-cube.ro",
                  },
                  {
                    icon: (
                      <Facebook
                        sx={{
                          fontSize: 22,
                          color: theme.palette.colors.darkBlue,
                        }}
                      />
                    ),
                    text: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=100069137602216",
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: index < 3 ? 2.5 : 0,
                      borderRadius: 1,
                      transition: "all 0.2s",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Box sx={{ mr: 2, display: "flex" }}>{item.icon}</Box>
                    {item.link ? (
                      <Link
                        href={item.link}
                        target={item.text === "Facebook" ? "_blank" : undefined}
                        rel={
                          item.text === "Facebook"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        sx={{
                          color: theme.palette.colors.darkBlue,
                          textDecoration: "none",
                          fontWeight: 500,
                          "&:hover": {
                            color: theme.palette.colors.dielectricRed,
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.primary }}
                      >
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ContactSection;

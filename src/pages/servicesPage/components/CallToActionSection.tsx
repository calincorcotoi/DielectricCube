import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ElectricalServices } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 3, pb: 6 }}>
      <Container maxWidth="lg">
        <Paper
          elevation={4}
          sx={{
            p: isMobile ? 0 : 3,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.colors.darkBlue} 0%, ${theme.palette.colors.lightBlue} 100%)`,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", p: isMobile ? 3 : 0 }}
          >
            Aveți nevoie de servicii electrice profesionale?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, p: isMobile ? 3 : 0, maxWidth: "800px", mx: "auto" }}
          >
            Contactați-ne pentru o evaluare tehnică gratuită și o ofertă
            personalizată. Problema dumneavoastră devine prioritatea noastră!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                navigate("/portfolio");
              }}
              startIcon={<ElectricalServices />}
              sx={{
                py: 1.5,
                px: 4,
                mb: isMobile ? 3 : 0,
                color: "white",
                borderColor: "white",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              Vezi portofoliul nostru
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CallToActionSection;

import { Typography, Container, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHoverEffect from "../../components/ButtonHoverEffect";
import { Home } from "@mui/icons-material";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  const theme = useTheme();
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h1" component="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        Page Not Found
      </Typography>
      <ButtonHoverEffect
        onClick={handleGoBack}
        startIcon={<Home />}
        color={theme.palette.colors.dielectricRed}
      >
        {" "}
        Mergi la pagina principală{" "}
      </ButtonHoverEffect>
    </Container>
  );
};

export default NotFound;

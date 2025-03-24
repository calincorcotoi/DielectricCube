import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Extend the Palette interface to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      lightBlue: string;
      teal: string;
      darkBlue: string;
      veryDarkBlue: string;
      cream: string;
      lightGray: string;
      electricYellow: string;
      dielectricRed: string;
    };
  }
  interface PaletteOptions {
    colors?: {
      lightBlue?: string;
      teal?: string;
      darkBlue?: string;
      veryDarkBlue?: string;
      cream?: string;
      lightGray?: string;
      electricYellow?: string;
      dielectricRed?: string;
    };
  }
}

// Updated theme with palette from the image and improved readability
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F3826",
      light: "#1c95b4",
      dark: "#000000",
    },
    secondary: {
      main: "#FF3500",
      light: "#F2F3D9",
    },
    background: {
      default: "#ffffff",
    },
    colors: {
      lightBlue: "#134074",
      darkBlue: "#13315c",
      veryDarkBlue: "#0b2545",
      teal: "#8da9c4",
      cream: "#eef4ed",
      lightGray: "#f9f9f9",
      electricYellow: "#ffc107",
      dielectricRed: "#c41e3a",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.1rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.9375rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        },
        contained: {
          "&:hover": {
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          "@media (max-width:600px)": {
            paddingLeft: 10,
            paddingRight: 10,
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <TopBar />
        <Box
          flex="1"
          style={{
            background: `linear-gradient(180deg, ${theme.palette.colors.teal} 0%, ${theme.palette.colors.lightBlue} 100%)`,
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const dielectricLogo = "/logo/dielectric-logo.png";
const dielectricLogoText = "/logo/dielectric-logo-text.png";

interface HeaderProps {
  navItems: { label: string; path: string }[];
  isMobile: boolean;
  theme: Theme;
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMobile,
  theme,
  handleDrawerToggle,
}) => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#fff", color: theme.palette.colors.darkBlue }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "center",
          alignItems: "center",
          padding: isMobile ? "0 16px" : "0 32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: isMobile ? 0 : 16,
            cursor: "pointer",
          }}
          onClick={handleLogoClick}
        >
          <Box
            component="img"
            src={dielectricLogo}
            alt="Dielectric Cube"
            sx={isMobile ? { height: 50,p:0.6,pr:2 } : { height: 60, p: 1 }}
          />
          <Box
            component="img"
            src={dielectricLogoText}
            alt="Dielectric Cube"
            sx={isMobile ? { height: 16, maxWidth: "70%" } : { height: 27 }}
          />
        </Box>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex" }}>
            {navItems.map((item, index) => {
              const colors = [
                theme.palette.colors.dielectricRed,
                theme.palette.colors.dielectricRed,
                theme.palette.colors.dielectricRed,
                theme.palette.colors.dielectricRed,
              ];
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    mx: 1.5,
                    px: 1,
                    color: theme.palette.colors.darkBlue,
                    borderBottom: "3px solid transparent",
                    borderRadius: 0,
                    "&:hover": {
                      borderBottom: `3px solid ${colors[index]}`,
                      backgroundColor: "transparent",
                    },
                    fontSize: "1rem",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

interface DrawerMenuProps {
  navItems: { label: string; path: string }[];
  handleDrawerToggle: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  navItems,
  handleDrawerToggle,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleNavClick = (path: string) => {
    navigate(path);
    handleDrawerToggle();
  };

  const handleLogoClick = () => {
    navigate("/");
    handleDrawerToggle();
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          cursor: "pointer",
        }}
        onClick={handleLogoClick}
      >
        <Box
          component="img"
          src={dielectricLogo}
          alt="Dielectric Cube"
          sx={{
            height: 40,
            mr: -1,
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            disablePadding
            onClick={() => handleNavClick(item.path)}
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                textAlign: "center",
                py: 1.5,
                px: 3,
                "& .MuiTypography-root": {
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: theme.palette.text.primary,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const TopBar: React.FC = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = [
    { label: "Despre", path: "/despre" },
    { label: "Servicii", path: "/servicii" },
    { label: "Prețuri", path: "/preturi" },
    { label: "Portofoliu", path: "/portofoliu" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <>
      <Header
        navItems={navItems}
        isMobile={isMobile}
        theme={theme}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerMenu
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Drawer>
    </>
  );
};

export default TopBar;

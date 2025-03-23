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

const dielectricLogo = "/logo/dielectric-logo.jpg";
const dielectricLogoText = "/logo/dielectric-logo-text.png";

interface HeaderProps {
  navItems: string[];
  isMobile: boolean;
  theme: Theme;
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMobile,
  theme,
  handleDrawerToggle,
}) => (
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
        }}
      >
        <Box
          component="img"
          src={dielectricLogo}
          alt="Dielectric Cube"
          sx={isMobile ? { height: 50 } : { height: 60 }}
        />
        <Box
          component="img"
          src={dielectricLogoText}
          alt="Dielectric Cube"
          sx={isMobile ? { height: 27, maxWidth: "70%" } : { height: 27 }}
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
              theme.palette.colors.darkBlue,
              theme.palette.colors.darkBlue,
              theme.palette.colors.darkBlue,
              theme.palette.colors.darkBlue,
            ];
            return (
              <Button
                key={item}
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
                {item}
              </Button>
            );
          })}
        </Box>
      )}
    </Toolbar>
  </AppBar>
);

interface DrawerMenuProps {
  navItems: string[];
  handleDrawerToggle: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  navItems,
  handleDrawerToggle,
}) => (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
      }}
    >
      <Box
        component="img"
        src={dielectricLogo}
        alt="Dielectric Cube"
        sx={{
          height: 40,
          mr: -1,
          width: "70%",
          maxHeight: "70%",
        }}
      />
    </Box>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemText
            primary={item}
            sx={{
              textAlign: "center",
              py: 1.5,
              "& .MuiTypography-root": { fontWeight: 500, fontSize: "1rem" },
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

const TopBar: React.FC = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = ["Despre", "Servicii", "Calculator", "Portofoliu"];

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

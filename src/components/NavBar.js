import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import KidcabLogo from "../assets/logo.png";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              color: " #18374E",
            }}
          >
            Estimation de votre trajet
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="KidCab">
              <IconButton sx={{ p: 0 }}>
                <img alt="Remy Sharp" src={KidcabLogo} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

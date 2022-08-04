import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import KidcabLogo from '../assets/logo.png';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// css
import '../css/Navbar.css';
const NavBar = () => {
  return (
    <div style={{ height: 75 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', boxShadow: 'none', position: 'fixed', top: 0, zIndex: 999 }}
        className="conatainer-Navbar"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                color: ' #18374E',
              }}
              className="Navbar_heading"
            >
              Estimation de votre trajet
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="KidCab">
                <IconButton sx={{ p: 0 }}>
                  <img className="logo" alt="Remy Sharp" src={KidcabLogo} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBar;

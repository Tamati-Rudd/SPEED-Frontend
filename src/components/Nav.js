import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';


/*
* WIP: this is for the right side used for dropdown menu and user profile
*/
//import Avatar from '@mui/material/Avatar';
//import Tooltip from '@mui/material/Tooltip';

/* <Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  </IconButton>
</Tooltip>
<Menu
  sx={{ mt: '45px' }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  {settings.map((setting) => (
    <MenuItem key={setting} onClick={handleCloseUserMenu}>
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box>  */

const pages = ['home', 'submit', 'articles', 'moderate', 'analyst'];
//WIP: used for profile links
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //WIP: user profile link 
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //WIP: user profile link
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //WIP: user profile link
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar position="static" style={{ background: 'black' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SPEED
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, 
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color: "black"}} to={`/${page}`}> {page} </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SPEED
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right'}}>
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
                <Link style={{textDecoration: "none", color: "white", }} to={`/${page}`}> {page} </Link>
              </Button>
            ))}
          </Box>




        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
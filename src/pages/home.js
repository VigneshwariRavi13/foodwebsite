import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import './style.css';
const Home = () =>{
  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


    return(
      <Box sx={{ flexGrow: 1 }}> 
      <AppBar position="static" style={{backgroundColor:'#2C3A40'}}> 
        <Toolbar> 
          <IconButton 
          size="large" 
          edge="start" 
          color="inherit" 
          aria-label="menu" 
          className="menu-icon" > 
          <MenuIcon /> 
          </IconButton> 
          <Typography variant="h5" component="div" className="logo"> FOODIE </Typography> 
          <div className="nav-links"> 
            <a href="./home">Home</a> 
            <a href="./menu">Menu</a>
             <a href="./order">Order</a> 
             <a href="./review">Review</a> 
             <a href="./contact">Contact</a> 
             </div> 
             <Search className="search"> 
              <SearchIconWrapper className="search-icon-wrapper"> 
                <SearchIcon /> 
                </SearchIconWrapper> 
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} className="styled-input-base" />
                 </Search>
                  <Button variant="contained" color="error" href="/login" className="logout-btn"> Logout </Button> 
                  </Toolbar> 
                  </AppBar> 
                  <div className="hero-section"> 
                    <div className="hero-content">
                       <p className="hero-text">Are You Hungry?</p>
                        <h2 className="hero-title">Don't Wait!</h2>
                        <p className="hero-text">Let's start to order food now...</p> 
                        <Button variant="contained" color="error" href="/menu" className="order-now-btn"> Order Now </Button>
                        </div> 
                        </div> 
                        </Box>
    );
  }
export default Home;
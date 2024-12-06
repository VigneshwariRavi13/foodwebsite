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
import './style2.css';
const Order = () =>{
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
          </Toolbar>
        </AppBar>

        <div class="order-container">
  <div class="order-header">
    <h2>Order <span>Now</span></h2>
  </div>
  <div class="order-content">
    <div class="order-image">
      <img src='https://media.istockphoto.com/id/1443557116/vector/group-friend-together-eat-in-restaurant-character-people-male-female-rest-cozy-cafe-design.jpg?s=612x612&w=0&k=20&c=k1QBmvq3Ge7-MJFDFPWtmfREfIWU2hyHzh303yJTsoY=' alt='order' />
    </div>

    <form action='#' class="order-form">
      <div>
        <p>Full Name</p>
        <input type='text' placeholder='your name' />
      </div>

      <div>
        <p>Number</p>
        <input type='text' placeholder='your number' />
      </div>

      <div>
        <p>Your Order</p>
        <input type='text' placeholder='food name' />
      </div>

      <div>
        <p>Email</p>
        <input type='text' placeholder='your email' />
      </div>

      <div>
        <p>How Much</p>
        <input type='text' placeholder='how many order' />
      </div>

      <div>
        <p>Address</p>
        <input type='text' placeholder='your address' />
      </div>

      <Button variant="contained" class="order-button">Order Now</Button>
    </form>
  </div>
</div>


        </Box>
    );
}

export default Order;
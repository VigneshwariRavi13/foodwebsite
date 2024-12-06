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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import './style1.css';
const Menu = () =>{
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

        <div class="container">
  <div class="menu-header">
    <h2>Our <span>Menu</span></h2>
  </div>
  <div class="menu-grid">
    <div class="menu-item">
      <div>
        <img src='https://www.shutterstock.com/image-photo/chicken-dhum-biriyani-using-jeera-600nw-2047827047.jpg' alt='chicken biriyani' />
      </div>
      <div class="item-info">
        <h2>Chicken Biryani</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$20.00</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    <div class="menu-item">
      <div>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/024/021/183/small_2x/a-bowl-of-biryani-with-a-meat-and-beef-dish-on-it-food-concept-ai-generated-photo.jpg' alt='mutton biriyani' />
      </div>
      <div class="item-info">
        <h2>Mutton Biryani</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$40.00</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    <div class="menu-item">
      <div>
        <img src='https://static.vecteezy.com/system/resources/previews/038/469/753/non_2x/ai-generated-biryani-in-pan-on-dark-wooden-background-fresh-prawns-photo.jpeg' alt='prawn biriyani' />
      </div>
      <div class="item-info">
        <h2>Prawn Biryani</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$25.01</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    <div class="menu-item">
      <div>
        <img src='https://t3.ftcdn.net/jpg/08/21/13/74/360_F_821137406_QrX04iv6DVvZSizwIZVokO0vQqBefsD1.jpg' alt='chicken gravy' />
      </div>
      <div class="item-info">
        <h2>Chicken Gravy</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$32.11</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    <div class="menu-item">
      <div>
        <img src='https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_521733-11296.jpg' alt='mutton gravy' />
      </div>
      <div class="item-info">
        <h2>Mutton Gravy</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$35.21</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    <div class="menu-item">
      <div>
        <img src='https://img.freepik.com/premium-photo/bbq-spatchcocked-barbecue-whole-chicken-grill-pan-black-background_811830-841.jpg' alt='grilled chicken' />
      </div>
      <div class="item-info">
        <h2>Grilled Chicken</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$25.01</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    
    <div class="menu-item">
      <div>
        <img src='https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370900.jpg' alt='mutton chukka' />
      </div>
      <div class="item-info">
        <h2>Mutton Chukka</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$45.01</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    
    <div class="menu-item">
      <div>
        <img src='https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.jpg?s=612x612&w=0&k=20&c=cq6fgpRnjpiD3ILifT3bPg2m8EnxtUvG7M8oB-9h1MY=' alt='chicken 65' />
      </div>
      <div class="item-info">
        <h2>Chicken 65</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$18.01</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

    
    <div class="menu-item">
      <div>
        <img src='https://t3.ftcdn.net/jpg/04/51/83/44/360_F_451834460_CVuPSmRPMGCCE1G3qMnjhFlPQpJH9l4u.jpg'  alt='mutton soup' />
      </div>
      <div class="item-info">
        <h2>Mutton Soup</h2>
        <p>lorem,ipsum dolor sit amet consectetur adipiscing elit,Laborum assumenda voluptates</p>
        <h3>$29.01</h3>
        <div class="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} /> 
        </div>
        <Button variant="contained" href='/order' class="order-button">Order Now</Button>
      </div>
    </div>

  </div>
</div>


        </Box>
    )
}
export default Menu;
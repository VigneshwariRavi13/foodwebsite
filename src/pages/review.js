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
import './style3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF,faInstagram,faTwitter,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
const Review = () =>{
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
                  <StyledInputBase placeholder="Search…"  className="styled-input-base" />
                   </Search>
                    <Button variant="contained" color="error" href="/login" className="logout-btn"> Logout </Button> 
                    </Toolbar> 
                    </AppBar> 

                    <div class="review" id="Review">
        <h1>Customer<span>Review</span></h1>

        <div class="review_box">
            <div class="review_card">

                <div class="review_profile">
                    <img src='https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg' alt='profile1' />
                </div>

                <div class="review_text">
                    <h2 class="name">Jenny</h2>

                    <div class="review_icon">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} /> 
                    </div>

                    <div class="review_social">
                       <FontAwesomeIcon icon={faFacebookF} />
                       <FontAwesomeIcon icon={faInstagram} />
                       <FontAwesomeIcon icon={faTwitter} />
                       <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
                </div>
            </div>

  <div class="review_card">

                <div class="review_profile">
                    <img src='https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=' alt='profile2' />
                </div>

                <div class="review_text">
                    <h2 class="name">Rose</h2>

                    <div class="review_icon">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} /> 
                    </div>

                    <div class="review_social">
                       <FontAwesomeIcon icon={faFacebookF} />
                       <FontAwesomeIcon icon={faInstagram} />
                       <FontAwesomeIcon icon={faTwitter} />
                       <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
                </div>
            </div>

              <div class="review_card">

                <div class="review_profile">
                    <img src='https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg' alt='profile3' />
                </div>

                <div class="review_text">
                    <h2 class="name">Jackson</h2>

                    <div class="review_icon">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} /> 
                    </div>

                    <div class="review_social">
                       <FontAwesomeIcon icon={faFacebookF} />
                       <FontAwesomeIcon icon={faInstagram} />
                       <FontAwesomeIcon icon={faTwitter} />
                       <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
                </div>
            </div>

</div>
</div>


                    </Box>
    );
  }
export default Review;
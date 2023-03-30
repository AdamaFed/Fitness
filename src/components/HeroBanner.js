import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner1.png';
import arrowhero from '../assets/images/arrowhero.png'


const HeroBanner = () => {
  return (
    <Box sx = {{mt: {lg:"212px", xs:"70px"},
    ml: {sm: "50px"}}} position="relative" p="20px">
     <Typography color = "#c73852" 
     fontWeight="600" fontSize="26px">
      JOY FITNESS 
     </Typography>
     <Typography fontWeight = "700"
     sx= {{fontSize : {lg:"44px", xs:"40px"}}}
     mb= "23px" mt="30px">
      Ein Körper, ein Mindset <br/> ein Ziel  
     </Typography>
     <Stack direction="row">
     <img src = {arrowhero} alt = "logo" style={{width: '50px', height:'50px', margin:" 10px"}} />
     <Typography fontSize = "22px" lineHeight= "75px" mb= {4}>
     Die Besten Und Effektivsten Übungen 
     </Typography>
     </Stack>
     <Button variant= "outlined" color = "error" href = "#exercises"
     >Jetzt Entdecken</Button>
     <Typography
     fontWeight = {600}
     color = "#c73852"
     sx = {{opacity : 0.4, display:{lg: "block", xs: "none"}}}
     fontSize ="200px">
       Motivation
     </Typography>


     <img src={HeroBannerImage} alt = "banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner

import React from 'react'
import {Link} from 'react-router-dom';
import{Stack} from '@mui/material';
import Logo from '../assets/images/Logo-1.png'
import { borderBottom } from '@mui/system';

const Navbar = () => {
  return (
    <div>
      <Stack 
      direction = "row" 
      justifyContent = "space-around"
      sx = {{gap: {sm: "122px", xs: "40px"}, mt:{sm:"32px", xs: "20px"}, justifyContent: "none"}} px="20px">
        <Link to ="/">
        <img src = {Logo} alt = "logo" style={{width: '150px', height:'150 px', margin: '0 20px'}} />
        </Link>
        <Stack
        direction = "row"
        gap = "40px"
        fontSize = "24px"
        alignItems = "center">
          <Link to= "/" style={{textdecoration:"none" , color: "3A1212" , borderBottom: "3px solid #c73852" }}>Home</Link>
          <a href="#exercises" style={{textdecoration: "none", color: "#3A1212"}}>Übungen</a>
        </Stack>
      </Stack>
    </div>
  )
}

export default Navbar

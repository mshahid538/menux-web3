import React from 'react'
import "./index.css"
import { Box } from '@mui/material'
import logo from "../../assets/img/logo.png"

function Header() {
  return (
    <Box className='header'>
           <img src={logo}/>
    </Box>
  )
}

export default Header
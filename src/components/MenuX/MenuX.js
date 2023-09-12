import { Grid } from '@mui/material';
import logo from "../../assets/img/logo.png"
import "./index.css"

function MenuX() {
  return (
    <Grid className='menu'>
     <img className='logo' src={logo}/>
    </Grid>
  )
}

export default MenuX
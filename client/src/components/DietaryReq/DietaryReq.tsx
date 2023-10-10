import "./index.css"
import { Box, Typography } from '@mui/material'
import DietaryType from '../DietaryType'
import AllergicTo from '../AllergicTo'
function DietaryReq() {
  return (
    <div className='box'>
        <Box margin={3}>
        <Typography fontSize={"18px"} variant='h6'>Dietary Requirements: </Typography>
        <Typography fontSize={"13px"} color={"#6E6E85"} fontWeight={"bold"} pt={2}>Please select your dietary requirements below</Typography>

        <Box>
            <DietaryType />
        </Box>
        <Box>
            <AllergicTo />
        </Box>
       
        </Box>
       
       
    </div>
  )
}

export default DietaryReq
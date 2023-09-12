import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectBox from '../SelectBox';
import AllergicBox from '../AllergicBox';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function  AllergicTo() {
  return (
    <Card sx={{ minWidth: 275 , marginTop: 3 }}>
      <CardContent>
        <Typography variant="body2">
        I am allergic to...
        </Typography>

      </CardContent>
      <CardActions sx={{marginLeft:1}}>
       <AllergicBox />
      </CardActions>
      <Box p={2}>
          <Button sx={{background:"#55C0F9", color: "white" , width:"100%", textTransform: "capitalize" , height:"50px", '&:hover': {
        background: '#55C0F9', 
    },}}>Continue</Button>
        </Box>
    </Card>
  );
}
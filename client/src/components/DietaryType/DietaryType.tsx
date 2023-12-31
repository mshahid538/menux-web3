import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SelectBox from '../SelectBox';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function  DietaryType() {
  return (
    <Card sx={{ minWidth: 275 , marginTop: 3 }}>
      <CardContent>
        <Typography variant="body2">
          I am..
        </Typography>

      </CardContent>
      <CardActions sx={{marginLeft:1}}>
       <SelectBox />
      </CardActions>
    </Card>
  );
}
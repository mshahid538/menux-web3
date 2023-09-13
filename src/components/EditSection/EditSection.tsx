import React from "react";
import "./index.css";
import { Box } from "@mui/material";
// import { Grid } from "@mui/material";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



const buttonStyle = {
  color: "rgb(232,125,180)",
  textDecoration: "underline",
  border: "none",
  "&:hover": {
    textDecoration: "underline",
    border: "none"
  },
};

function EditSection() {
    const allergicTo = useSelector((state: any) => state.allergic.value);
    const requirements = useSelector((state: any) => state.requirements.value);

    const navigate = useNavigate();

    // Function to navigate to the /allergic route
    const goToAllergicRoute = () => {
      navigate('/allergic');
    };
    const goToRequirementsRoute = () => {
      navigate('/requirements');
    };
  
  // console.log("props", props);
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="body1">Dietary: {requirements }</Typography>
        </Grid>
        <Grid item xs={6}>
                  {/* Use onClick to trigger the navigation */}
                  <Button
            variant="outlined"
            color="primary"
            sx={buttonStyle}
            onClick={goToRequirementsRoute}
          >
            Edit
          </Button>

        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Allergens:  {allergicTo}</Typography>
        </Grid>
        <Grid item xs={6}>
                  {/* Use onClick to trigger the navigation */}
                  <Button
            variant="outlined"
            color="primary"
            sx={buttonStyle}
            onClick={goToAllergicRoute}
          >
            Edit
          </Button>

        </Grid>
      </Grid>
    </Container>
  );
}

export default EditSection;

import React from "react";
import "./index.css";
import { Box } from "@mui/material";
// import { Grid } from "@mui/material";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  color: "#ED187C",
  textDecoration: "underline",
  border: "none",
  // textTransfrom: "lowercase !important",
  textTransform: "unset !important",
  "&:hover": {
    textDecoration: "underline",
    border: "none",
    backgroundColor: "black",
  },
};

function EditSection() {
  const allergicTo = useSelector((state: any) => state.allergic.value);
  const requirements = useSelector((state: any) => state.requirements.value);

  const navigate = useNavigate();

  // Function to navigate to the /allergic route
  const goToAllergicRoute = () => {
    navigate("/allergic");
  };
  const goToRequirementsRoute = () => {
    navigate("/requirements");
  };

  // console.log("props", props);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
          fontSize: "20px",
        }}
      >
        <div>
          <Typography variant="h6">Dietary: {requirements}</Typography>
        </div>
        <div>
          {/* Use onClick to trigger the navigation */}
          <Button
            variant="outlined"
            color="primary"
            sx={buttonStyle}
            onClick={goToRequirementsRoute}
          >
            <Typography variant="h6">Edit</Typography>
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h6">Allergens: {allergicTo}</Typography>
        </div>
        <div>
          {/* Use onClick to trigger the navigation */}
          <Button
            variant="outlined"
            color="primary"
            sx={buttonStyle}
            onClick={goToAllergicRoute}
          >
            <Typography variant="h6">Edit</Typography>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default EditSection;

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
    <Container style={{ margin: "auto", padding: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // marginTop: "auto",
          // fontSize: "20px",
        }}
      >
        <Typography
          className="smallLineHeight"
          variant="subtitle1"
          fontWeight={"bold"}
          fontSize={20}
        >
          Dietary: {requirements}
        </Typography>

        {/* Use onClick to trigger the navigation */}
        <Button
          variant="outlined"
          color="primary"
          sx={buttonStyle}
          onClick={goToRequirementsRoute}
        >
          <Typography
            className="smallLineHeight"
            variant="subtitle1"
            fontWeight={"bold"}
            fontSize={20}
          >
            Edit
          </Typography>
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          className="smallLineHeight"
          variant="subtitle1"
          fontWeight={"bold"}
          fontSize={20}
        >
          Allergens: {allergicTo.join(", ")}
        </Typography>

        {/* Use onClick to trigger the navigation */}
        <Button
          variant="outlined"
          color="primary"
          sx={buttonStyle}
          onClick={goToAllergicRoute}
        >
          <Typography
            className="smallLineHeight"
            variant="subtitle1"
            fontWeight={"bold"}
            fontSize={20}
          >
            Edit
          </Typography>
        </Button>
      </div>
    </Container>
  );
}

export default EditSection;

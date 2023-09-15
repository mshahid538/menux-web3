import React from "react";
import "./index.css";
import { Box } from "@mui/material";
// import { Grid } from "@mui/material";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allergicBy } from "../../app/features/allergicTo/counterSlice";
import { setRequirements } from "../../app/features/requirements/requirementsSlice";

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
  const dispatch = useDispatch();

  const allergicTo = useSelector((state: any) => {
    console.log("state.allergic.value", state.allergic.value);
    if (state.allergic.value.length > 0) {
      return state.allergic.value;
    } else {
      let aa = JSON.parse(localStorage.getItem("allergic") || "[]");
      console.log("aa", aa);
      // if (aa) {
      dispatch(allergicBy(aa));
      // }
    }
  });
  const require = useSelector((state: any) => {
    console.log("state.requirements.value", state.requirements.value);

    if (state.requirements.value) {
      return state.requirements.value;
    } else {
      let bb = localStorage.getItem("dietary") || "";
      console.log("bb", bb);
      dispatch(setRequirements(bb));
    }
  });

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
          Dietary: {require}
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
          Allergens: {allergicTo?.join(", ")}
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

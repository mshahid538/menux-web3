import React, { useEffect } from "react";
import "./index.css";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allergicBy } from "../../app/features/allergicTo/counterSlice";
import { setRequirements } from "../../app/features/requirements/requirementsSlice";

const buttonStyle = {
  color: "#ED187C",
  textDecoration: "underline",
  border: "none",
  textTransform: "unset !important",
  "&:hover": {
    textDecoration: "underline",
    border: "none",
  },
};

function EditSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allergicTo = useSelector((state: any) => state.allergic.value || []);

  const require = useSelector((state: any) => state.requirements.value || "");

  useEffect(() => {
    // Dispatch actions for initial data retrieval here
    const aa = JSON.parse(localStorage.getItem("allergic") || "[]");
    if (aa.length > 0) {
      dispatch(allergicBy(aa));
    }

    const bb = localStorage.getItem("dietary") || "";
    dispatch(setRequirements(bb));
  }, [dispatch]);

  const goToAllergicRoute = () => {
    // Clear the value from local storage
    localStorage.removeItem("allergic");

    // Dispatch an action to reset the value in Redux state to an empty array
    dispatch(allergicBy([]));

    // Navigate to the "/allergic" route
    navigate("/allergic");
  };

  const goToRequirementsRoute = () => {
    // Clear the value from local storage
    localStorage.removeItem("dietary");
    localStorage.removeItem("allergic");

    dispatch(allergicBy([]));

    navigate("/requirements");
  };

  return (
    <Container style={{ margin: "auto", padding: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className="smallLineHeight"
          variant="subtitle1"
          fontWeight={"bold"}
          fontSize={20}
          textAlign={"left"}
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
        <div style={{ display: "flex" }}>
          <Typography
            className="smallLineHeight"
            variant="subtitle1"
            fontWeight={"bold"}
            fontSize={20}
            textAlign={"left"}
            lineHeight="1.25 !important"
          >
            Allergens:
          </Typography>

          <Typography
            className="smallLineHeight"
            variant="subtitle1"
            fontWeight={"bold"}
            fontSize={20}
            textAlign={"left"}
            lineHeight="1.25 !important"
          >
            {allergicTo?.join(", ")}
          </Typography>
        </div>

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

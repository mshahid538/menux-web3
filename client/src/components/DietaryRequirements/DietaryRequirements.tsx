import { Box, Button, Grid, Typography } from "@mui/material";
import Header from "../Header/Header";
import { DietaryReq } from "../../data/data.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setRequirements } from "../../app/features/requirements/requirementsSlice";
import { allergicBy } from "../../app/features/allergicTo/counterSlice";

function DietaryRequirements() {
  const req = useSelector((state: any) => state.requirements.value);
  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [data, setData] = useState<string>("");

  useEffect(() => {
    if (window.location.pathname === "/requirements") {
      localStorage.removeItem("dietary");
      dispatch(allergicBy([]));
    }
  }, []);

  function handleClick(index: number, name: string) {
    setActiveIndexes((prevIndexes) => {
      return [index];
    });
    setData(name);

    if (name) {
      localStorage.setItem("dietary", name);
    }

    dispatch(setRequirements(name));
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Grid className="header">
        <Header />
      </Grid>
      <Box className="requirements">
        <Grid className="input" my={3}>
          <Typography variant="body2" fontWeight={"bold"} fontSize={24}>
            I am:
          </Typography>
        </Grid>
        {DietaryReq.map((name, index) => (
          <Box display={"flex"} gap={2} justifyContent={"center"} mx={3}>
            <Button
              key={name.id}
              sx={{
                background: "#F6F7F9",
                color: "black",
                width: "100%",
                fontWeight: "bold",
                border: "3px solid black",
                textTransform: "capitalize",
                borderRadius: "15px",
                height: "8vh",
                fontSize: 24,
                marginY: "10px",
                "&:hover": {
                  background: "#66BC48",
                  fontSize: "24px",
                  color: "white",
                },
              }}
              className={`select ${
                activeIndexes.includes(index) ? "btn active" : "btn"
              }`}
              onClick={() => handleClick(index, name.name)}
            >
              {name.name}
            </Button>
          </Box>
        ))}
        <Box display={"flex"} sx={{ justifyContent: "center" }}>
          <Link
            to={"/allergic"}
            style={{
              color: "#FBD2E5",
              textDecoration: "none",
              background: "#ED187C",
              width: "50%",
              height: "45px",
              textTransform: "none",
              borderRadius: "12px",
              marginTop: "40px",
              marginBottom: "20px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                background: "#ED187C",
                color: "white",
                width: "100%",
                fontWeight: "bold",
                textTransform: "capitalize",
                borderRadius: "15px",
                height: "10vh",
                fontSize: 24,
                display: "flex",
                textAlign: "start",
                justifyContent: "center",
                marginY: "10px",
                paddingLeft: "20px",
                "&:hover": {
                  background: "black",
                  fontSize: 24,
                },
              }}
            >
              Next
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default DietaryRequirements;

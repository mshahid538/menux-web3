import { Box, Button, Grid, Typography } from "@mui/material";
import Header from "../Header/Header";
import { DietaryReq } from "../../constants/DietaryReq";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setRequirements } from "../../app/features/requirements/requirementsSlice";

function DietaryRequirements() {
  const req = useSelector((state: any) => state.requirements.value);
  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [data, setData] = useState<string>("");

  function handleClick(index: number, name: string) {
    setActiveIndexes((prevIndexes) => {
      return [index];
    });
    setData(name);

    dispatch(setRequirements(name));
    console.log(req + "++++");
    console.log("____________");
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Grid className="header">
        <Header />
      </Grid>
      <Box>
        <Grid className="input" my={3}>
          <Typography variant="body2" fontWeight={"bold"}>
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
                width: "400px",
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
                  color: "white"
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
                width: "400px",
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
          {/* <Link
            to={"/allergic"}
            style={{
              color: "#FBD2E5",
              textDecoration: "none",
              background: "#ED187C",
              width: "400px",
              height: "10vh",
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
                color: "#FBD2E5",
                textTransform: "none",
                borderRadius: "12px",
                "&:hover": {
                  background: "#ED187C",
                  fontSize: "14px",
                },
              }}
            >
              Next
            </Button>
          </Link> */}
        </Box>
      </Box>
    </Box>
  );
}

export default DietaryRequirements;

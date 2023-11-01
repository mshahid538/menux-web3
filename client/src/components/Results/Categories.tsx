import { Box, Grid, Button } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import { Results1 } from "../../constants/Results1";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function Categories() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  function handleClick(index: number) {
    setActiveIndexes((prevIndexes: any) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i: any) => i !== index);
      } else {
        return [index];
      }
    });
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Grid className="header">
        <Header islogin={""} />
      </Grid>
      <Box my={3}>
        {Results1.map((name, index) => (
          <Box
            key={index}
            display={"flex"}
            gap={2}
            justifyContent={"center"}
            textAlign={"center"}
            mx={3}
          >
            <Button
              sx={{
                background: "#F6F7F9",
                color: "black",
                width: "400px",
                fontWeight: "bold",
                border: "2px solid black",
                textTransform: "capitalize",
                borderRadius: "10px",
                height: "10vh",
                fontSize: 20,
                display: "flex",
                textAlign: "start",
                justifyContent: "start",
                marginY: "10px",
                paddingLeft: "20px",
                "&:hover": {
                  background: "#66BC48",
                  fontSize: 20,
                },
              }}
              key={index}
              className={`select ${
                activeIndexes.includes(index) ? "btn active" : "btn"
              }`}
              onClick={() => handleClick(index)}
            >
              + {name.name}
            </Button>
          </Box>
        ))}
        <Box display={"flex"} justifyContent={"center"}>
          <Link
            to={"/results2"}
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
                background: "black",
                color: "white",
                width: "400px",
                fontWeight: "bold",
                border: "2px solid black",
                textTransform: "capitalize",
                borderRadius: "15px",
                height: "10vh",
                fontSize: 20,
                display: "flex",
                textAlign: "start",
                justifyContent: "center",
                marginY: "10px",
                paddingLeft: "20px",
                "&:hover": {
                  background: "black",
                  fontSize: 20,
                },
              }}
            >
              See Results
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Categories;

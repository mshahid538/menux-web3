import { AllergicList } from "../../constants/AllergicList";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./index.css";

function AllergicBox() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  function handleClick(index: number) {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  }

  return (
    <div>
      <Box sx={{ display: "flex", textAlign: "center", justifyContent: "center" ,flexDirection: "row" }}>
        <Grid container>
        {AllergicList.map((data, index) => (
          <Grid item lg={3} key={index}>
            <Box
              className={`select ${
                activeIndexes.includes(index) ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <img
                height={"60px"}
                className="icon"
                src={data.icon}
                alt={data.name}
              />
            </Box>
            <Typography mt={1}>{data.name}</Typography>
          </Grid>
        ))}
        </Grid>
      </Box>
    </div>
  );
}

export default AllergicBox;

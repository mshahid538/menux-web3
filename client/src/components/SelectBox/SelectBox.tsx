import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DietaryType } from "../../constants/DietaryTypes";
import "./index.css";

function SelectBox() {
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
      <Box sx={{ display: "flex", textAlign: "center", flexDirection: "row" }}>
        {DietaryType.map((data, index) => (
          <div key={index}>
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
          </div>
        ))}
      </Box>
    </div>
  );
}

export default SelectBox;

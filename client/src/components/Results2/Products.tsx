import { Box, Grid, Button } from "@mui/material";
import Header from "../Header/Header";
import { ResultsTwo } from "../../constants/ResultsTwo";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function Products() {
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
        <Box
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          textAlign={"center"}
          mx={3}
        >
          <Button
            className="btn"
            sx={{
              background: "#ED187C",
              color: "white",
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
                background: "#ED187C",
                fontSize: 20,
              },
            }}
          >
            - Mains
          </Button>
        </Box>
        {ResultsTwo.map((name, index) => (
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
              className={`select ${
                activeIndexes.includes(index) ? "btn active" : "btn"
              }`}
              onClick={() => handleClick(index)}
            >
              + {name.name}
            </Button>
          </Box>
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Link
          to={"/results3"}
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
  );
}

export default Products;

import { Box, Grid, Button, Typography } from "@mui/material";
import Header from "../Header/Header";
import { ResultsTwo } from "../../constants/ResultsTwo";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function Results3() {
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
          display={"grid"}
          gap={2}
          justifyContent={"center"}
          textAlign={"center"}
          mx={3}
          // width={"50%"}
          // className={"box"}
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
            - Pan Fried Chicken Breast
          </Button>

          <Box display={"grid"}>
            <Typography
              variant="body1"
              mt={1}
              fontWeight={"bold"}
              justifySelf={"start"}
            >
              Description:
            </Typography>
            <Typography variant="body1" mt={1} fontWeight={"light"}>
              Filled with a cheesy garlic sorrel butter and accompained with a
              tomato and basil sauce. Chilli compound
            </Typography>
          </Box>

          <Box display={"grid"}>
            <Typography
              variant="body1"
              mt={1}
              fontWeight={"bold"}
              justifySelf={"start"}
            >
              Not suitable for.
            </Typography>
            <Typography
              variant="body1"
              mt={1}
              fontWeight={"light"}
              justifySelf={"start"}
            >
              Vegetarian, Vegan
            </Typography>
          </Box>

          <Box display={"grid"}>
            <Typography
              variant="body1"
              mt={1}
              fontWeight={"bold"}
              justifySelf={"start"}
            >
              May contain.
            </Typography>
            <Typography
              variant="body1"
              mt={1}
              fontWeight={"light"}
              justifySelf={"start"}
            >
              Nuts, Milk
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Link
            to={"/restaurant"}
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
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Results3;

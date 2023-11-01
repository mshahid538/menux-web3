import { Box, Button, Grid, Typography } from "@mui/material";
import Header from "../Header/Header";
import "./index.css";
import { AllergicList } from "../../data/data.js";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allergicBy } from "../../app/features/allergicTo/counterSlice";
function Allergies() {
  const count = useSelector((state: any) => state.allergic.value);

  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [Indexes, setIndexes] = useState<number[]>([]);
  const [allergicTo, setAllergicTo] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/allergic") {
      localStorage.removeItem("allergic");
      dispatch(allergicBy([]));
    }
  }, []);

  function handleClick(index: number, name: string) {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });

    setAllergicTo(name);
    if (localStorage.getItem("allergic")) {
      let allergicVal = JSON.parse(localStorage.getItem("allergic") || "");
      allergicVal = [...allergicVal, name];
      localStorage.setItem("allergic", JSON.stringify(allergicVal));
    } else {
      localStorage.setItem("allergic", JSON.stringify([name]));
    }
    dispatch(allergicBy([name]));
  }
  function handleUserClick(index: number) {
    setIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  }

  const handleAllergicTo = (amount: any) => {
    console.log("++");
    dispatch(allergicBy(allergicTo));
    console.log(count);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid className="header">
        <Header islogin={""} />
      </Grid>
      <Box>
        <Grid className="input" my={3}>
          <Typography variant="body2" fontWeight={"bold"} fontSize={24}>
            I am allergic to:
          </Typography>
        </Grid>
        <Box
          mx={5}
          // mr={2}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid container>
            {AllergicList.map((data, index) => (
              <Grid
                my={1}
                item
                lg={4}
                md={4}
                sm={4}
                key={index}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  className={`select ${
                    activeIndexes.includes(index) ? "active" : ""
                  }`}
                  onClick={() => handleClick(index, data.name)}
                  display={"grid"}
                >
                  <img
                    height={"60px"}
                    className="icon"
                    src={data.icon}
                    alt={data.name}
                  />
                </Box>
                <Typography
                  display={"flex"}
                  justifyContent={"center"}
                  mt={1}
                  width={"80%"}
                  fontSize={18}
                  fontWeight={"bold"}
                >
                  {data.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Link
            to={"/final"}
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
              See Results
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Allergies;

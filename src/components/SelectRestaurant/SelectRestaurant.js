import {useState , useEffect} from "react";
import { Box, Grid, TextField, Button , Typography } from "@mui/material";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { Data } from "../../data/data";
import "./index.css";
import { getAllRestaurants } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../../app/features/restaurant/restaurantSlice";

function SelectRestaurant() {
  const res = useSelector((state) => state.restaurant.value);
  const dispatch = useDispatch();
   const [restaurant , SetRestaurant] = useState({});
   const [allRestaurants , setAllRestaurants] = useState(getAllRestaurants());

   const handleClick=(name)=>{
    SetRestaurant(name);
    dispatch(setRestaurant(name));
    console.log(res);
   }
   console.log("+++++++++")
   console.log(allRestaurants);


  return (
    <Box sx={{ width: "100%" }}>
      <Grid className="header">
        <Header />
      </Grid>
      <Box>

        <Grid className="input" my={3}>
          <TextField
            name="postcode"
            variant="outlined"
            placeholder="Enter postcode"
            sx={{
              background: "#F3F3F3",
              "& fieldset": {
                borderRadius: `40px`,
              },
            }}
          />
        </Grid>
      {allRestaurants.map((data , index)=>(
  <Box className="imgs" my={2} position={"relative"} key={index} onClick={()=>handleClick(data.name)}>
  <Typography variant="body2" fontWeight={"bold"} position={"absolute"} top={"150px"} left={"95px"} fontSize={"20px"} color={"white"}>
      {data.name}
    </Typography>
    <Typography variant="body2" fontWeight={"bold"} position={"absolute"} top={"178px"} left={"95px"} fontSize={"11px"} color={"white"}>
      {data.specials.join(" | ")}
    </Typography>
    <img src={data.img} className={data.name === restaurant ? "img  selected" : "img"} />
  </Box>
      ))}
      

        
        <Box display={"flex"} sx={{ justifyContent: "center" }}>
          <Link
            to={"/requirements"}
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
                color: "#FBD2E5",
                textTransform: "none",
                borderRadius: "12px",
                fontSize: "24px",
                
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

export default SelectRestaurant;

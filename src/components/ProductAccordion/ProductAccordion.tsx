import {useState} from "react"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Grid, Link } from "@mui/material";
import { Results1 } from "../../constants/Results1";
import { ResultsTwo } from "../../constants/ResultsTwo";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../app/features/product/productSlice";

function ProductAccordion({ name , callback}: any) {
  const product = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [category , setCategory] = useState<string>("");


  function handleClick(index: number , name: string) {
    setActiveIndexes((prevIndexes:any) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i:any) => i !== index);
      } else {
        return [ index];
      }
    });
    setCategory(name);
    dispatch(setProduct(name))
    console.log(product);
    callback();
  }
  

  return (
    <>
    <Accordion  defaultExpanded={true} style={{ backgroundColor: "white", minWidth: "400px"  }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
        aria-controls="panel-content"
        id="panel-header"
        style={{  backgroundColor: "#ED187C", color: "white" ,  }}
        className="btn"
        sx={{
          background: "#ED187C",
          color: "white",
          minWidth: "400px",
          fontWeight: "bold",
          border: "2px solid black",
          textTransform: "capitalize",
          borderRadius: "10px",
          height: "10vh",
          fontSize: 24,
          display: "flex",
          textAlign: "start",
          justifyContent: "start",
          // marginY: "10px",
          paddingLeft: "20px",
          "&:hover": {
            background: "#ED187C",
            fontSize: 24,
          },
        }}
      >
      <Typography fontWeight={"bold"} fontSize={"24px"}>{name}</Typography>
      </AccordionSummary>

      <Box my={3}>
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
              key={index}
              className={`select ${
                activeIndexes.includes(index) ? "btn active" : "btn"
              }`}
              onClick={() => handleClick(index , name.name)}
            >
              <Typography variant="body1" fontSize={'24px'} fontWeight={'bold'}>
              + {name.name}
              </Typography>
              
            </Button>
          </Box>
        ))}
        <Box display={"flex"} justifyContent={"center"}>
      </Box>
      </Box>
      
    </Accordion>
    </>
  );
}

export default ProductAccordion;

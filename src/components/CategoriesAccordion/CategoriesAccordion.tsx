import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";
import { Box, Button, Grid, Link } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Results1 } from "../../constants/Results1";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../app/features/category/categorySlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Data } from "../../data/data";

// const res = Data.restaurants.map((data) => data)
// console.log("data", res)

const res = Data.restaurants.map((restaurant) => {
  // You can perform transformations or select specific properties here
  return restaurant;
});

console.log("Khawar", res);

function CategoriesAccordion({ name }: any) {
  console.log("CategoriesAccordion", name);
  const data = useSelector((state: any) => state.category.category);
  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [category, setCategory] = useState<string>("");
  const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize state to control expanded Accordion
  const [expandedIndexChild, setExpandedIndexChild] = useState(-1); // Initialize state to control expanded Accordion
  const [expandedIndexSubchild, setExpandedIndexSubchild] = useState(-1); // Initialize state to control expanded Accordion

  const handleClick = (index: number, name: string) => {
    if (expandedIndex === index) {
      // If the clicked Accordion is already expanded, close it
      setExpandedIndex(-1);
    } else {
      // Otherwise, expand the clicked Accordion
      setExpandedIndex(index);
    }
  };
  const handleClickChild = (index: number, name: string) => {
    if (expandedIndexChild === index) {
      // If the clicked Accordion is already expanded, close it
      setExpandedIndexChild(-1);
    } else {
      // Otherwise, expand the clicked Accordion
      setExpandedIndexChild(index);
    }
  };
  const handleClickSubChild = (index: number, name: string) => {
    if (expandedIndexSubchild === index) {
      // If the clicked Accordion is already expanded, close it
      setExpandedIndexSubchild(-1);
    } else {
      // Otherwise, expand the clicked Accordion
      setExpandedIndexSubchild(index);
    }
  };

  console.log("Results1", Results1);
  return (
    <Accordion
      defaultExpanded={true}
      style={{ backgroundColor: "white", minWidth: "400px" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel-content"
        id="panel-header"
        style={{ backgroundColor: "#ED187C", color: "white" }}
        className="btn"
        sx={{
          background: "#ED187C",
          color: "white",
          minWidth: "400px",
          fontWeight: "bold",
          border: "2px solid black",
          textTransform: "capitalize",
          borderRadius: "10px",
          height: "7vh",
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
        <Typography fontWeight={"bold"} fontSize={"24px"}>
          {name}
        </Typography>
      </AccordionSummary>

      <Box my={3}>
        {Results1.map((name, index) => (
          <>
            <Accordion
              key={index}
              expanded={expandedIndexChild === index} // Control expanded state
              style={{
                backgroundColor: "white",
                minWidth: "380px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                aria-controls="panel-content"
                id="panel-header"
                className="btn"
                style={{ background: "#F6F7F9" }}
              >
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
                      // background: "#F6F7F9",
                      color: "black",
                      width: "100%",
                      fontWeight: "bold",
                      // border: "2px solid black",
                      textTransform: "none",
                      // borderRadius: "10px",
                      height: "7vh",
                      fontSize: 24,
                      display: "flex",
                      textAlign: "start",
                      justifyContent: "start",
                      marginY: "10px",
                      paddingLeft: "20px",
                      "&:hover": {
                        background: "#66BC48",
                        fontSize: 24,
                      },
                    }}
                    key={index}
                    className={`select ${
                      expandedIndexChild === index ? "btn active" : "btn"
                    }`}
                    onClick={() => handleClickChild(index, name.name)}
                  >
                    <Typography
                      variant="body1"
                      fontSize={"24px"}
                      fontWeight={"bold"}
                    >
                      + {name.name}
                    </Typography>
                  </Button>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {name?.products?.map((ite, ind) => (
                  <Accordion
                    // defaultExpanded={true}
                    key={ind}
                    expanded={expandedIndexSubchild === ind}
                    style={{
                      backgroundColor: "white",
                      minWidth: "380px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "blue" }} />}
                      aria-controls="panel-content"
                      id="panel-header"
                      className="btn"
                      style={{ background: "#F6F7F9" }}
                    >
                      <Button
                        sx={{
                          color: "black",
                          width: "100%",
                          fontWeight: "bold",
                          textTransform: "none",
                          height: "7vh",
                          fontSize: 24,
                          display: "flex",
                          textAlign: "start",
                          justifyContent: "start",
                          marginY: "10px",
                          paddingLeft: "20px",
                          "&:hover": {
                            background: "#66BC48",
                            fontSize: 24,
                          },
                        }}
                        key={ind}
                        className={`select ${
                          expandedIndexSubchild === ind ? "btn active" : "btn"
                        }`}
                        onClick={() => handleClickSubChild(ind, name.name)}
                      >
                        <Typography
                          variant="body1"
                          fontSize={"24px"}
                          fontWeight={"bold"}
                        >
                          + {ite.name}
                        </Typography>
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="body1"
                        fontSize={"24px"}
                        fontWeight={"bold"}
                      >
                        <Box display={"grid"}>
                          <Grid>
                            <Typography
                              variant="subtitle1"
                              mt={1}
                              fontWeight={"bold"}
                              justifySelf={"start"}
                              fontSize={24}
                            >
                              Description:
                            </Typography>
                            <Typography
                              fontSize={24}
                              variant="subtitle1"
                              mt={1}
                              fontWeight={"normal"}
                              display={"grid"}
                              textAlign={"start"}
                              justifySelf={"start"}
                            >
                              Filled with a cheesy garlic sorrel butter and
                              accompained with a tomato and basil sauce. Chilli
                              compound.
                            </Typography>
                          </Grid>
                          <Grid
                            display={"flex"}
                            alignItems={"center"}
                            gap={0.5}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: "#13BF5B",
                                backgroundColor: "black",
                                borderRadius: "50%",
                              }}
                            />
                            <Typography
                              fontSize={"24px"}
                              fontWeight={"bold"}
                              // color={"#13BF5B"}
                            >
                              Vegetarian
                            </Typography>
                          </Grid>
                          <Grid
                            display={"flex"}
                            alignItems={"center"}
                            gap={0.5}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: "#13BF5B",
                                backgroundColor: "black",
                                borderRadius: "50%",
                              }}
                            />
                            <Typography
                              fontSize={"24px"}
                              fontWeight={"bold"}
                              // color={"#13BF5B"}
                            >
                              Vegan
                            </Typography>
                          </Grid>
                          <Grid
                            display={"flex"}
                            alignItems={"center"}
                            gap={0.5}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: "#13BF5B",
                                backgroundColor: "black",
                                borderRadius: "50%",
                              }}
                            />
                            <Typography
                              fontSize={"24px"}
                              fontWeight={"bold"}
                              // color={"#13BF5B"}
                            >
                              Free From
                            </Typography>
                          </Grid>
                        </Box>

                        <Box display={"grid"}>
                          <Typography
                            variant="subtitle1"
                            mt={1}
                            fontWeight={"bold"}
                            justifySelf={"start"}
                            fontSize={24}
                          >
                            Not suitable for: Vegetarian
                          </Typography>
                        </Box>

                        <Box display={"grid"}>
                          <Typography
                            variant="subtitle1"
                            mt={1}
                            fontWeight={"bold"}
                            justifySelf={"start"}
                            fontSize={24}
                          >
                            May contain: Milk
                          </Typography>
                        </Box>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </Box>
    </Accordion>
  );
}

export default CategoriesAccordion;

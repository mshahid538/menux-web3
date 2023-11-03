import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";
import { Box, Button, Grid, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Data } from "../../data/data";
import { Icons } from "../Icons/Icons";
import { selectedFood } from "../../app/features/selectedFoods/selectedFoodsSlice";

const res = Data.restaurants.map((restaurant) => {
  // You can perform transformations or select specific properties here
  return restaurant;
});

function CategoriesAccordion({ name }: any) {
  const data = useSelector((state: any) => state.category.category);
  const foodData = useSelector((state: any) => state.restaurant.value.menuFood);
  const allergenData = useSelector((state: any) => state.allergic.value);
  const suitableValue = useSelector((state: any) => state.suitable.value);
  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [category, setCategory] = useState<string>("");
  const [expanded, setExpanded] = useState<string | false>(false);
  const [expandedIndexChild, setExpandedIndexChild] = useState(-1);
  const [expandedIndexSubchild, setExpandedIndexSubchild] = useState(-1);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleClickChild = (index: number, name: string) => {
    if (expandedIndexChild === index) {
      setExpandedIndexChild(-1);
    } else {
      setExpandedIndexChild(index);
    }
  };
  const handleClickSubChild = (index: number, name: string) => {
    if (localStorage.getItem("selectedFoods")) {
      let selectedItem = JSON.parse(
        localStorage.getItem("selectedFoods") || ""
      );
      selectedItem = [...selectedItem, name];
      localStorage.setItem("selectedFoods", JSON.stringify(selectedItem));
    } else {
      localStorage.setItem("selectedFoods", JSON.stringify([name]));
    }
    dispatch(selectedFood([name]));

    if (expandedIndexSubchild === index) {
      setExpandedIndexSubchild(-1);
    } else {
      setExpandedIndexSubchild(index);
    }
  };

  return (
    <Accordion
      // defaultExpanded={true}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      style={{ backgroundColor: "white", minWidth: "100%" }}
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
          minWidth: "100%",
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
        {/* category (Food )  */}
        <Typography fontWeight={"bold"} fontSize={"24px"}>
          {expanded === "panel1" ? "- " : "+ "} {name}
        </Typography>
      </AccordionSummary>

      <Box my={3} style={{ margin: "0px !important" }}>
        {foodData?.map((item: any, index: number) => (
          <>
            <Accordion
              key={index}
              expanded={expandedIndexChild === index} // Control expanded state
              style={{ backgroundColor: "white", minWidth: "100%" }}
            >
              <AccordionSummary>
                <Box
                  key={index}
                  display={"flex"}
                  gap={2}
                  justifyContent={"center"}
                  textAlign={"center"}
                  mx={0}
                  width={"100%"}
                >
                  <Button
                    sx={{
                      background: "#F6F7F9",
                      color: "black",
                      width: "100%",
                      fontWeight: "bold",
                      border: "2px solid black",
                      textTransform: "capitalize",
                      borderRadius: "10px",
                      height: "10vh",
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
                    onClick={() => handleClickChild(index, item.category)}
                  >
                    {/* subcategory (Starter, Creekstones, Main, etc )  */}
                    <Typography
                      variant="body1"
                      fontSize={"24px"}
                      fontWeight={"bold"}
                    >
                      {expandedIndexChild === index ? " - " : " + "}{" "}
                      {item.category}
                    </Typography>
                  </Button>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {item?.products?.map((ite: any, ind: number) => {
                  if (suitableValue) {
                    return (
                      <Accordion
                        // defaultExpanded={true}
                        key={ind}
                        expanded={expandedIndexSubchild === ind}
                        style={{ backgroundColor: "white", minWidth: "100%" }}
                      >
                        <AccordionSummary>
                          <Button
                            sx={{
                              background: "#F6F7F9",
                              color: "black",
                              width: "100%",
                              fontWeight: "bold",
                              border: "2px solid black",
                              textTransform: "capitalize",
                              borderRadius: "10px",
                              height: "10vh",
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
                              expandedIndexSubchild === ind
                                ? "btn active"
                                : "btn"
                            }`}
                            onClick={() => handleClickSubChild(ind, ite.name)}
                          >
                            {/* Product (chiken breast, beef ribs, dynamite prawns, etc )  */}
                            <Typography
                              variant="body1"
                              fontSize={"24px"}
                              fontWeight={"bold"}
                            >
                              {expandedIndexSubchild === ind ? " - " : " + "}
                              {ite.name}
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
                                  textAlign={"left"}
                                  fontSize={24}
                                >
                                  Description:
                                </Typography>
                                <Typography
                                  fontSize={24}
                                  variant="subtitle1"
                                  mt={1}
                                  fontWeight={"bold"}
                                  display={"grid"}
                                  textAlign={"start"}
                                  justifySelf={"start"}
                                >
                                  {ite.description}
                                </Typography>
                              </Grid>

                              {ite.types?.map((type: any, ind: number) => {
                                return (
                                  <>
                                    <Grid
                                      display={"flex"}
                                      alignItems={"center"}
                                      textAlign={"left"}
                                      gap={0.6}
                                    >
                                      <Icons item={type?.key} />
                                      <Typography
                                        fontSize={"24px"}
                                        fontWeight={"bold"}
                                        // color={"#13BF5B"}
                                        textAlign={"left"}
                                      >
                                        {type.name}
                                      </Typography>
                                    </Grid>

                                    <Grid
                                      display={"flex"}
                                      alignItems={"center"}
                                      gap={0.5}
                                      ml={1.75}
                                    >
                                      <Typography
                                        variant="subtitle1"
                                        fontSize={20}
                                        textAlign={"left"}
                                        marginLeft={"1rem"}
                                      >
                                        {type.list.join(", ")}
                                      </Typography>
                                    </Grid>
                                  </>
                                );
                              })}
                            </Box>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  } else {
                    let included = allergenData.some((item: any) =>
                      ite.name.includes(item)
                    );
                    if (!included) {
                      return (
                        <Accordion
                          // defaultExpanded={true}
                          key={ind}
                          expanded={expandedIndexSubchild === ind}
                          style={{ backgroundColor: "white", minWidth: "100%" }}
                        >
                          <AccordionSummary>
                            <Button
                              sx={{
                                background: "#F6F7F9",
                                color: "black",
                                width: "100%",
                                fontWeight: "bold",
                                border: "2px solid black",
                                textTransform: "capitalize",
                                borderRadius: "10px",
                                height: "10vh",
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
                                expandedIndexSubchild === ind
                                  ? "btn active"
                                  : "btn"
                              }`}
                              onClick={() => handleClickSubChild(ind, ite.name)}
                            >
                              {/* Product (chiken breast, beef ribs, dynamite prawns, etc )  */}
                              <Typography
                                variant="body1"
                                fontSize={"24px"}
                                fontWeight={"bold"}
                              >
                                {expandedIndexSubchild === ind ? " - " : " + "}
                                {ite.name}
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
                                    textAlign={"left"}
                                    fontSize={24}
                                  >
                                    Description:
                                  </Typography>
                                  <Typography
                                    fontSize={24}
                                    variant="subtitle1"
                                    mt={1}
                                    fontWeight={"bold"}
                                    display={"grid"}
                                    textAlign={"start"}
                                    justifySelf={"start"}
                                  >
                                    {ite.description}
                                  </Typography>
                                </Grid>

                                {ite.types?.map((type: any, ind: number) => {
                                  return (
                                    <>
                                      <Grid
                                        display={"flex"}
                                        alignItems={"center"}
                                        textAlign={"left"}
                                        gap={0.6}
                                      >
                                        <Icons item={type?.key} />
                                        <Typography
                                          fontSize={"24px"}
                                          fontWeight={"bold"}
                                          // color={"#13BF5B"}
                                          textAlign={"left"}
                                        >
                                          {type.name}
                                        </Typography>
                                      </Grid>

                                      <Grid
                                        display={"flex"}
                                        alignItems={"center"}
                                        gap={0.5}
                                        ml={1.75}
                                      >
                                        <Typography
                                          variant="subtitle1"
                                          fontSize={20}
                                          textAlign={"left"}
                                          marginLeft={"1rem"}
                                        >
                                          {type.list.join(", ")}
                                        </Typography>
                                      </Grid>
                                    </>
                                  );
                                })}
                              </Box>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    }
                  }
                })}
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </Box>
    </Accordion>
  );
}

export default CategoriesAccordion;

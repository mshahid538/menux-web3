import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../app/features/product/productSlice";

function ProductAccordion({ name, callback }: any) {
  const product = useSelector((state: any) => state.product.product);
  const drinksData = useSelector(
    (state: any) => state.restaurant.value.menuDrinks
  );
  const dispatch = useDispatch();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [category, setCategory] = useState<string>("");
  const [expanded, setExpanded] = useState<string | false>(false);
  const [expandedIndexChild, setExpandedIndexChild] = useState(-1);
  const [expandedIndexSubchild, setExpandedIndexSubchild] = useState(-1); // Initialize state to control expanded Accordion

  function handleClick(index: number, name: string) {
    setActiveIndexes((prevIndexes: any) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i: any) => i !== index);
      } else {
        return [index];
      }
    });
    setCategory(name);
    dispatch(setProduct(name));
    console.log(product);
    callback();
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
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
      setExpandedIndexSubchild(-1);
    } else {
      setExpandedIndexSubchild(index);
    }
  };

  {
  }
  return (
    <>
      <Accordion
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
          {/* category (Drink)  */}
          <Typography fontWeight={"bold"} fontSize={"24px"}>
            {expanded === "panel1" ? "- " : "+ "} {name}
          </Typography>
        </AccordionSummary>

        <Box my={3}>
          {drinksData?.map((item: any, index: number) => (
            <>
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
                        onClick={() => handleClickChild(index, item.name)}
                      >
                        <Typography
                          variant="body1"
                          fontSize={"24px"}
                          fontWeight={"bold"}
                        >
                          {expandedIndexChild === index ? "-" : "+"} {item.name}
                        </Typography>
                      </Button>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item?.products?.map((ite: any, ind: number) => (
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
                            onClick={() => handleClickSubChild(ind, name.name)}
                          >
                            <Typography
                              variant="body1"
                              fontSize={"24px"}
                              fontWeight={"bold"}
                            >
                              {expandedIndexSubchild === ind ? "-" : "+"}{" "}
                              {ite.name}
                            </Typography>
                          </Button>
                        </AccordionSummary>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </>
            </>
          ))}
          <Box display={"flex"} justifyContent={"center"}></Box>
        </Box>
      </Accordion>
    </>
  );
}

export default ProductAccordion;

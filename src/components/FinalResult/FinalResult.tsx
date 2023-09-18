import { Box, Grid, Button, Typography } from "@mui/material";
import Header from "../Header/Header";
import { ResultsTwo } from "../../constants/ResultsTwo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import Cookies from "../Cookies";
import CategoriesAccordion from "../CategoriesAccordion";
import ProductAccordion from "../ProductAccordion/ProductAccordion";
import { useSelector } from "react-redux";
import { displayAllergiesForRestaurantCategoryAndProduct } from "../../utils";
import { Data } from "../../data/data";
import EditSection from "../EditSection/EditSection";

type AllergenInfo = {
  restaurantName: string;
  category: string;
  productName: string;
  notSuitable: string[];
  mayContain: string[];
};

type RestaurantData = {
  restaurants: {
    id: number;
    name: string;
    menu: {
      id: number;
      category: string;
      products: {
        id: number;
        name: string;
        notSuitable: string[];
        mayContain: string[];
        ingredients?: string[];
      }[];
    }[];
  }[];
};

function FinalResult() {
  const allergicTo = useSelector((state: any) => state.allergic.value);
  const product = useSelector((state: any) => state.product.product);
  const category = useSelector((state: any) => state.category.category);
  const requirements = useSelector((state: any) => state.requirements.value);
  const res = useSelector((state: any) => state.restaurant.value);

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const [restaurantData] = useState(Data);
  const [allergenInfo, setAllergenInfo] = useState<any>(null);

  const displayAllergiesForRestaurantCategoryAndProduct = (
    restaurantName: string,
    category: string,
    productName: string
  ) => {
    const restaurant = restaurantData.restaurants.find(
      (r) => r.name === restaurantName
    ) as {
      id: number;
      name: string;
      menu: {
        id: number;
        category: string;
        products: {
          id: number;
          name: string;
          notSuitable: string[];
          mayContain: string[];
          ingredients?: string[];
        }[];
      }[];
    };

    if (!restaurant) {
      setAllergenInfo({
        restaurantName,
        category,
        productName,
        notSuitable: [],
        mayContain: [],
      });
      return;
    }

    const menuCategory = restaurant.menu.find(
      (c) => c.category === category
    ) as {
      id: number;
      category: string;
      products: {
        id: number;
        name: string;
        notSuitable: string[];
        mayContain: string[];
        ingredients?: string[];
      }[];
    };

    if (!menuCategory) {
      setAllergenInfo({
        restaurantName,
        category,
        productName,
        notSuitable: [],
        mayContain: [],
      });
      return;
    }

    const product = menuCategory.products.find((p) => p.name === productName);

    if (!product) {
      setAllergenInfo({
        restaurantName,
        category,
        productName,
        notSuitable: [],
        mayContain: [],
      });
      return;
    }

    const allergenData: AllergenInfo = {
      restaurantName,
      category,
      productName,
      notSuitable: product.notSuitable,
      mayContain: product.mayContain,
    };
    setAllergenInfo(allergenData);
  };

  function handleClick(index: number) {
    setActiveIndexes((prevIndexes: any) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i: any) => i !== index);
      } else {
        return [index];
      }
    });
  }

  function handleReduxData() {
    console.log("Allergic To : " + allergicTo);
    console.log("Product Selected : " + product);
    console.log("Category Selected : " + category);
    console.log("Requirements Selected : " + requirements);
    console.log("Restaurant Selected : " + res);
  }

  function handleCallback() {
    displayAllergiesForRestaurantCategoryAndProduct(res, "Mains", product);
  }
  return (
    <Box
      sx={{ width: "100%", backgroundColor: "white" }}
      // onClick={() => console.log(requirements)}
    >
      {/* <Button onClick={handleReduxData}>Test Collected Data</Button> */}
      <Grid className="header">
        <Header />
      </Grid>
      <Grid className="edit">
        <EditSection />
      </Grid>
      <Box my={3}>
        {/* {allergenInfo && (
          <div>
            <h2>Allergen Information</h2>
            <p>Restaurant: {allergenInfo.restaurantName}</p>
            <p>Category: {allergenInfo.category}</p>
            <p>Product: {allergenInfo.productName}</p>
            <p>Not Suitable for: {allergenInfo.notSuitable.join(", ")}</p>
            <p>May Contain: {allergenInfo.mayContain.join(", ")}</p>
          </div>
        )} */}
        <Box
          display={"grid"}
          gap={2}
          justifyContent={"center"}
          textAlign={"center"}
          mx={3}
        >
          <Cookies />
        </Box>
      </Box>
      <Grid container>
        <Grid item my={3} mb={9}>
          <Box
            display={"grid"}
            gap={2}
            justifyContent={"center"}
            textAlign={"center"}
            mx={3}
            margin={"0 auto"}
            width={"60%"}
          >
            {/* <Button
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
                fontSize: 24,
                display: "flex",
                textAlign: "start",
                justifyContent: "start",
                marginY: "10px",
                paddingLeft: "20px",
                "&:hover": {
                  background: "#ED187C",
                  fontSize: 24,
                },
              }}
            >
              - {category}
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
                fontSize: 24,
                display: "flex",
                textAlign: "start",
                justifyContent: "start",
                marginY: "10px",
                paddingLeft: "20px",
                "&:hover": {
                  background: "#ED187C",
                  fontSize: 24,
                },
              }}
            >
              - {product}
            </Button>

            <Box display={"grid"}>
              <Typography
                variant="subtitle1"
                mt={1}
                fontWeight={"bold"}
                justifySelf={"start"}
                fontSize={24}
              >
                Description22:
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
                Filled with a cheesy garlic sorrel butter and accompained with a
                tomato and basil sauce. Chilli compound
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
                Not suitable for:
              </Typography>
              <Typography
                variant="subtitle1"
                mt={1}
                justifySelf={"start"}
                fontSize={24}
                fontWeight={"bold"}
              >
                {allergenInfo && allergenInfo.notSuitable.join(", ")}
                {!allergenInfo && <>Vegetarian</>}
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
                May contain:
              </Typography>
              <Typography
                variant="subtitle1"
                mt={1}
                fontSize={24}
                justifySelf={"start"}
                fontWeight={"bold"}
              >
                {allergenInfo && allergenInfo.mayContain.join(", ")}
                {!allergenInfo && <>Milk</>}
              </Typography>
            </Box> */}
            <CategoriesAccordion
              name={" Food"}
              title={"Cookie"}
              subtitle={"VEGAN Milk Chocolate"}
            />
            {/* <ProductAccordion
              name={"- Pan Fried Chicken Breast"}
              title={"Mains"}
              subtitle={"Soup"}
              callback={handleCallback}
            /> */}
            <ProductAccordion
              name={" Drinks"}
              title={"Mains"}
              subtitle={"Soup"}
              callback={handleCallback}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FinalResult;

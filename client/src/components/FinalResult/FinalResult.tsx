import { Box, Grid } from "@mui/material";
import Header from "../Header/Header";
import { useState } from "react";
import "./index.css";
import Cookies from "../Cookies";
import CategoriesAccordion from "../CategoriesAccordion";
import ProductAccordion from "../ProductAccordion/ProductAccordion";
import { useSelector } from "react-redux";
import { displayAllergiesForRestaurantCategoryAndProduct } from "../../utils";
import { Data } from "../../data/data";
import EditSection from "../EditSection/EditSection";
import FoodRatingBadge from "../FoodRatingBadge/FoodRatingBadge";

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
  const product = useSelector((state: any) => state.product.product);
  const res = useSelector((state: any) => state.restaurant.value);

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const [restaurantData] = useState(Data);
  const [allergenInfo, setAllergenInfo] = useState<any>(null);

  const displayAllergiesForRestaurantCategoryAndProduct = (
    restaurantName: string,
    category: string,
    productName: string
  ) => {
    const restaurant = restaurantData?.restaurants?.find(
      (r) => r.name === restaurantName
    ) as {
      id: number;
      name: string;
      menuFood: {
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
      menuDrinks: {
        name: string;
        products: {
          id: number;
          name: string;
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

    const menuCategory = restaurant.menuFood.find(
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

  function handleCallback() {
    displayAllergiesForRestaurantCategoryAndProduct(res, "Mains", product);
  }
  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      <Grid className="header">
        <Header />
      </Grid>
      <Grid className="edit">
        <EditSection />
      </Grid>
      <Box my={3}>
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
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item my={3} mb={20}>
          <Box
            display={"grid"}
            gap={2}
            justifyContent={"center"}
            textAlign={"center"}
            mx={3}
            margin={"0 auto"}
            width={"93%"}
          >
            <CategoriesAccordion
              name={" Food"}
              title={"Cookie"}
              subtitle={"VEGAN Milk Chocolate"}
            />

            <ProductAccordion
              name={" Drinks"}
              title={"Mains"}
              subtitle={"Soup"}
              callback={handleCallback}
            />
            <FoodRatingBadge />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FinalResult;

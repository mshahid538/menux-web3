import { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
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
import { DeviceUUID } from "device-uuid";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();

  const product = useSelector((state: any) => state.product.product);

  const badgeurl = useSelector((state: any) => state.restaurant.value.badgeUrl);

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const [restaurantData] = useState(Data);
  const [allergenInfo, setAllergenInfo] = useState<any>(null);

  const restaurantName = useSelector(
    (state: any) => state.restaurant.value.name
  );
  const allergies = useSelector((state: any) => state.allergic.value);
  const dietary = useSelector((state: any) => state.requirements.value);
  const menuDrinks = useSelector(
    (state: any) => state.restaurant.value.menuDrinks
  );
  const menuFood = useSelector((state: any) => state.restaurant.value.menuFood);
  const res = useSelector((state: any) => state.restaurant.value);
  const ipAddress = useSelector((state: any) => state?.clientIP?.value);

  const businessid = useSelector(
    (state: any) => state.restaurant.value.businessId
  );

  const selectedFoods = useSelector((state: any) => state?.selectedFood?.value);
  const selectedDrinks = useSelector(
    (state: any) => state?.selectedDrinks?.value
  );

  function saveUserPreferences() {
    var du = new DeviceUUID().parse();

    function checkDevice() {
      if (du.isDesktop == true) {
        return "Desktop";
      } else if (du.isMobile == true) {
        return "Mobile";
      } else if (du.isMac == true) {
        return "Mac";
      } else if (du.isiPhone == true) {
        return "Iphone";
      } else if (du.isWindows == true) {
        return "Windows";
      } else {
        return "Not Found";
      }
    }
    const dua = [
      du.language,
      du.platform,
      du.os,
      du.cpuCores,
      du.isAuthoritative,
      du.silkAccelerated,
      du.isKindleFire,
      du.isDesktop,
      du.isMobile,
      du.isTablet,
      du.isWindows,
      du.isLinux,
      du.isLinux64,
      du.isMac,
      du.isiPad,
      du.isiPhone,
      du.isiPod,
      du.isSmartTV,
      du.pixelDepth,
      du.isTouchScreen,
      restaurantName,
      allergies,
      dietary,
      menuDrinks,
      menuFood,
      ipAddress,
      selectedFoods,
      selectedDrinks,
      checkDevice(),
      businessid,
    ];

    const sessionDetails: { [key: string]: any } = {};

    const values = [
      "language",
      "platform",
      "os",
      "cpuCores",
      "isAuthoritative",
      "silkAccelerated",
      "isKindleFire",
      "isDesktop",
      "isMobile",
      "isTablet",
      "isWindows",
      "isLinux",
      "isLinux64",
      "isMac",
      "isiPad",
      "isiPhone",
      "isiPod",
      "isSmartTV",
      "pixelDepth",
      "isTouchScreen",
      "restaurantName",
      "allergies",
      "dietary",
      "menuDrinks",
      "menuFood",
      "ipAddress",
      "selectedFoods",
      "selectedDrinks",
      "checkDevice",
      "businessid",
      "uuId",
    ];

    const uuid = du.hashMD5(dua.join(":"));

    dua.push(uuid);
    if (dua.length > 0) {
      dua.forEach((ele, index) => {
        sessionDetails[values[index]] = ele;
      });

      const fetchData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/userSessionData",
            sessionDetails
          );
          const res = await axios.get("http://localhost:5000/userSessionData");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }

    Swal.fire({
      icon: "success",
      title: "Save Successful!",
      text: "You have successfully save user preferences.",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/restaurant");
        localStorage.clear();
      }
    });
  }

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
        <Header islogin={""} />
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
            <FoodRatingBadge businessId={businessid} badgeUrl={badgeurl} />
          </Box>
          <Button
            onClick={saveUserPreferences}
            sx={{
              "&:hover": {
                background: "green",
                color: "black",
              },
              backgroundColor: "#ED187C",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              marginTop: "3rem",
              textTransform: "capitalize",
              textDecoration: "none",
              fontSize: "22px",
            }}
          >
            Save Preferences
          </Button>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Box>
  );
}

export default FinalResult;

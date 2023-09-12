import DietaryReq from "./components/DietaryReq";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cookies from "./components/Cookies";
import Disclaimer from "./components/Disclaimer";
import MenuX from "./components/MenuX";
import SelectRestaurant from "./components/SelectRestaurant";
import DietaryRequirements from "./components/DietaryRequirements";
import Allergies from "./components/Allergies";
import Results3 from "./components/Results3";
import FinalResult from "./components/FinalResult";
import Categories from "./components/Results/Categories";
import Products from "./components/Results2";
import CategoriesProducts from "./components/CategoriesProducts";

function App() {
  
  return (
    <div className="App">
      <div className="viewport">
      <Routes>
        <Route path="/" element={<Disclaimer />} />
        <Route path="/menux" element={<MenuX />} />
        <Route path="/allergic" element={<Allergies />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/result" element={<Results3 />} />
        <Route path="/restaurant" element={<SelectRestaurant />} />
        <Route path="/requirements" element={<DietaryRequirements />} />
        <Route path="/final" element={<FinalResult />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/categories-products" element={<CategoriesProducts />} />
        <Route path="/list" element={<>Comming Soon</>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

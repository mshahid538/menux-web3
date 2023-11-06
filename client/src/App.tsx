import "./App.css";
import { Route, Routes } from "react-router-dom";
import Disclaimer from "./components/Disclaimer";
import MenuX from "./components/MenuX";
import SelectRestaurant from "./components/SelectRestaurant";
import DietaryRequirements from "./components/DietaryRequirements";
import Allergies from "./components/Allergies";
import FinalResult from "./components/FinalResult";
import UserSessionData from "./components/Admin/viewSessionData";
import Login from "./components/Login/Login";
import Dashboard from "./components/Admin/Dashboard";
import RestaurantAdmin from "./components/Admin/Dashboard/components/Resturants";
import CategoriesResturants from "./components/Admin/Dashboard/components/Categories";
import ProductsAdmin from "./components/Admin/Dashboard/components/Products";
import AllergiesResturants from "./components/Admin/Dashboard/components/Allergies";
import UsersTrackingResturants from "./components/Admin/Dashboard/components/UserTracking";
import UserMangementResturants from "./components/Admin/Dashboard/components/UserManagement";
import SupportResturants from "./components/Admin/Dashboard/components/Support";


function App() {
  return (
    <div className="App">
      <div className="viewport">
        <Routes>
          <Route path="/" element={<Disclaimer />} />
          <Route path="/menux" element={<MenuX />} />
          <Route path="/allergic" element={<Allergies />} />
          <Route path="/restaurant" element={<SelectRestaurant />} />
          <Route path="/requirements" element={<DietaryRequirements />} />
          <Route path="/final" element={<FinalResult />} />
          <Route path="/view" element={<UserSessionData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/list" element={<>Comming Soon</>} />
          <Route path="/admin" element={<RestaurantAdmin />} />
          <Route path="/adminCategories" element={<CategoriesResturants />} />
          <Route path="/adminProducts" element={<ProductsAdmin />} />
          <Route path="/adminAllergies" element={<AllergiesResturants />} />
          <Route path="/adminUserTracking" element={<UsersTrackingResturants />} />
          <Route path="/adminUserManagement" element={<UserMangementResturants />} />
          <Route path="/adminSupport" element={<SupportResturants />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

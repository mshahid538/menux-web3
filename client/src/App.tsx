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
          <Route path="/list" element={<>Comming Soon</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Disclaimer from "./components/Disclaimer";
import MenuX from "./components/MenuX";
import SelectRestaurant from "./components/SelectRestaurant";
import DietaryRequirements from "./components/DietaryRequirements";
import Allergies from "./components/Allergies";
import FinalResult from "./components/FinalResult";

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
          <Route path="/list" element={<>Comming Soon</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

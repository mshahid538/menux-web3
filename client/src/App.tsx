
import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Disclaimer from "./components/Disclaimer";
import MenuX from "./components/MenuX";
import SelectRestaurant from "./components/SelectRestaurant";
import DietaryRequirements from "./components/DietaryRequirements";
import Allergies from "./components/Allergies";
import FinalResult from "./components/FinalResult";
import { DeviceUUID } from 'device-uuid';
import axios from "axios";


function App() {
  useEffect(() => {
    var du = new DeviceUUID().parse();
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
        du.isTouchScreen
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
        "uuId"
    ];
    const uuid = du.hashMD5(dua.join(':'));

    console.log('Generated UUID: ', dua);
    console.log('Generated UUID: ', uuid);
    dua.push(uuid);
    if(dua.length > 0 ){
        dua.forEach((ele, index) => {
            sessionDetails[values[index]] = ele;
        });
        console.log(sessionDetails, "Modified Result:");

        const fetchData = async () => {
   
          try {
            const response = await axios.post('http://localhost:5000/userSessionData', sessionDetails);
            console.log(response.data , "API Res");
            const res = await axios.get('http://localhost:5000/userSessionData');
            console.log(res.data , "API Res");
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }
}, []);
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

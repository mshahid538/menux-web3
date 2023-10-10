import { Box } from "@mui/material";
import "./index.css";
import ListBox from "../ListBox";
import SwitchBox from "../SwitchBox";

function Cookies() {
  return (
    <div className="box">
      <Box margin={3}>
        <Box sx={{ marginTop: "-22px" }}>
          <ListBox />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <SwitchBox />
        </Box>
      </Box>
    </div>
  );
}

export default Cookies;

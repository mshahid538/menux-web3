import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import showSuitableSlice, {
  setShowSuitable,
} from "../../app/features/showSuitable/showSuitableSlice";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function SwitchBox() {
  const suitableValue = useSelector((state: any) => state.suitable.value);
  const dispatch = useDispatch();

  const [checkboxValue, setCheckboxValue] = React.useState(
    suitableValue ? suitableValue : false
  );

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setCheckboxValue(isChecked);
    dispatch(setShowSuitable(isChecked));
  };
  return (
    <Card
      sx={{
        minWidth: "95% !important",
        marginTop: 3,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <CardContent sx={{ marginBottom: "-16px" }}>
        <Typography variant="body2" fontSize={14}>
          Show Unsuitable
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 1 }}>
        <Box display={"flex"} gap={2}>
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                defaultChecked
                checked={checkboxValue}
                onChange={handleSwitchChange}
              />
            }
            label=" "
          />
        </Box>
      </CardActions>
    </Card>
  );
}

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
export default function Disclaimer() {
  return (
    <Card
      className="disclaimer"
      sx={{
        borderRadius: "16px",
        margin: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography
          fontSize={"36px"}
          variant="h3"
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
        >
          Safety Disclaimer
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
          fontSize={"24px"}
        >
          The information entered through the MenuX app is intended for general
          guidance and informational purposes only.
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
          fontSize={"24px"}
        >
          While we strive to offer accurate and up-to-date details about menu
          items, it's important to note individual dietary preferences,
          restrictions, and allergy concerns vary.
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
          fontSize={"24px"}
        >
          We strongly encourage that you communicate any specific dietary or
          allergy requirements to the restaurant staff, ensuring a safe and
          enjoyable dining experience.
        </Typography>
        <Typography
          variant="body1"
          my={2}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
          fontSize={"24px"}
        >
          Your well-being is our priority.
        </Typography>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
          fontSize={"24px"}
        >
          Happy dining
        </Typography>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"start"}
          textAlign={"start"}
          fontSize={"24px"}
        >
          The MenuX Team
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Link
            to={"/restaurant"}
            style={{
              color: "#FBD2E5",
              textDecoration: "none",
              background: "#ED187C",
              width: "350px",
              height: "67px",
              textTransform: "none",
              borderRadius: "20px",
              marginTop: "40px",
              marginBottom: "20px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                color: "#FBD2E5",
                "&:hover": {
                  background: "#ED187C",
                },
                textTransform: "capitalize",
                textDecoration: "none",
                fontSize: "24px",
              }}
            >
              I accept
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

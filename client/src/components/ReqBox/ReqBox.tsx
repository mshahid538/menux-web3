import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectBox from "../SelectBox";
import { useSelector } from "react-redux";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ReqBox() {
  const allergicTo = useSelector((state: any) => state.allergic.value);
  const requirements = useSelector((state: any) => state.requirements.value);
  return (
    <Card sx={{ minWidth: 275, marginTop: 3 }}>
      <CardContent sx={{ marginBottom: "-16px" }}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ display: "flex", textAlign: "start" }}
        >
          Your dietary requirements/allergens:
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 1 }}>
        <Box display={"flex"} gap={2}>
          <Button
            sx={{
              background: "#F6F7F9",
              color: "#5E615E",
              width: "100%",
              textTransform: "capitalize",
              "&:hover": {
                background: "#F6F7F9",
                fontSize: "14px",
              },
            }}
          >
            {requirements ? requirements : <>Milk</>}
          </Button>
          <Button
            sx={{
              background: "#F6F7F9",
              color: "#5E615E",
              width: "120%",
              textTransform: "capitalize",
              "&:hover": {
                background: "#F6F7F9",
                fontSize: "14px",
              },
            }}
          >
            {allergicTo ? allergicTo.join(", ") : <>Vegetarian</>}
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

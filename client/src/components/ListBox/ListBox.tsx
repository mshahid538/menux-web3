import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import CancelIcon from "@mui/icons-material/Cancel";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ListBox() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent></CardContent>
      <CardActions sx={{ marginLeft: 4, paddingTop: 0 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={3} display={"flex"} alignItems={"center"} gap={0.5}>
            <CheckCircleIcon
              sx={{
                color: "#13BF5B",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <Typography fontSize={"11px"} fontWeight={"bold"} color={"#13BF5B"}>
              Free from
            </Typography>
          </Grid>
          <Grid xs={8} display={"flex"} alignItems={"center"} gap={0.5}>
            <InfoIcon
              sx={{
                color: "#FF9900",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <Typography fontWeight={"bold"} fontSize={"11px"} color={"#FF9900"}>
              Cross contamination
            </Typography>
          </Grid>
          <Grid xs={3} display={"flex"} alignItems={"center"} gap={0.5}>
            <InfoIcon
              sx={{
                color: "#04ADFF",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <Typography fontSize={"11px"} fontWeight={"bold"} color={"#04ADFF"}>
              Modify
            </Typography>
          </Grid>
          <Grid xs={6} display={"flex"} alignItems={"center"} gap={0.5}>
            <CancelIcon
              sx={{
                color: "#F43D3D",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <Typography fontSize={"11px"} fontWeight={"bold"} color={"#F43D3D"}>
              Contains
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

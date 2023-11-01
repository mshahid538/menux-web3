import { Box, Grid, Button, Typography } from "@mui/material";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import ProductAccordion from "../ProductAccordion/ProductAccordion";
import CategoriesAccordion from "../CategoriesAccordion";

function CategoriesProducts() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid className="header">
        <Header islogin={""} />
      </Grid>
      <Box>
        <Grid className="input" my={3}>
          <Typography variant="body2" fontWeight={"bold"} className="p">
            Select:
          </Typography>
        </Grid>

        <Grid className="input" my={3} mx={2}>
          <CategoriesAccordion name={"Categories"} />
        </Grid>

        <Grid className="input" my={3} mx={2}>
          <ProductAccordion name={"Products"} />
        </Grid>

        <Box display={"flex"} sx={{ justifyContent: "center" }}>
          <Link
            to={"/result"}
            style={{
              color: "#FBD2E5",
              textDecoration: "none",
              background: "#ED187C",
              width: "50%",
              height: "45px",
              textTransform: "none",
              borderRadius: "12px",
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
                textTransform: "none",
                borderRadius: "12px",
                "&:hover": {
                  background: "#ED187C",
                  fontSize: "14px",
                },
              }}
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoriesProducts;

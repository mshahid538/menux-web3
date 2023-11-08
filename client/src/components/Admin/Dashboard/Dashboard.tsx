import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import Header from "../../Header/Header";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import NoMealsIcon from "@mui/icons-material/NoMeals";
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import DraftsIcon from "@mui/icons-material/Drafts";
import UserSessionData from "../viewSessionData";
import { Link } from "react-router-dom";
import "./index.css"
import ProductsData from "../viewProductData";


export default function Dashboard() {
  const drawerWidth = 240;

  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} className="viewport_inverse">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{background:"black"}}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DIETARY MENU
          </Typography> */}
          <Grid className="header">
            <Header islogin={true} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {['Resturants', 'Categories', 'Products', 'Allergies', 'Users Tracking'].map((text, index) => (
            // <ListItem key={text} disablePadding>
            //   <ListItemButton>
            //     <ListItemIcon>
            //       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            //     </ListItemIcon>
            //     <ListItemText primary={text} className='active selected'/>
            //   </ListItemButton>
            // </ListItem>
            
          ))}
        </List> */}

        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <RestaurantIcon />
              </ListItemIcon>
              <Link to={"/admin"} className="nav-links">Restaurants</Link>
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <DinnerDiningIcon />
              </ListItemIcon>
               <Link to={"/adminCategories"} className="nav-links">Categories</Link>
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <RamenDiningIcon />
              </ListItemIcon>
              <Link to={"/adminProducts"} className="nav-links">Products</Link>
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <NoMealsIcon />
              </ListItemIcon>
              <Link to={"/adminAllergies"} className="nav-links">Allergies</Link>
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <SpatialTrackingIcon />
              </ListItemIcon>
              <Link to={"/adminUserTracking"} className="nav-links">Users Tracking</Link>
            </ListItemButton>
          </List>
          <Divider />

          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <Link to={"/adminUserManagement"} className="nav-links">User Mangement</Link>
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <Link to={"/adminSupport"} className="nav-links">Support</Link>
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <Link to={"/logout"} className="nav-links">Logout</Link>
            </ListItemButton>
          </List>
          {/* <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List> */}
        </Box>

        <Divider />
        {/* <List>
          {['Support', 'Users Mangement', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       <Typography paragraph>
          {/* <UserSessionData /> */}
          <ProductsData isAdmin={true} />
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac. */}
        </Typography>
        
        <Toolbar style={{background:"black" , position: "absolute" , bottom: 0 , width: '85%' , right: "0%" , zIndex:"200"}} >
        <Typography paragraph color={"white"} display={"flex"} justifyContent={"center"} textAlign={"center"} width={"100%"}>
           <Typography >
            COPYRIGHT@ MENUX 2023
           </Typography>
        </Typography>
          </Toolbar>
      </Main>
      
    </Box>
  );
}

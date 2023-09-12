import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider, createMuiTheme, createTheme } from "@mui/material";
import "./fonts/louis-george-cafe.bold-italic.ttf"
import "./fonts/louis-george-cafe.bold.ttf"
import "./fonts/louis-george-cafe.regular.ttf"
import { Provider } from 'react-redux'

// import "./fonts/"
import "typeface-cormorant";
import { store } from "./app/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


const theme = createTheme({
  typography: {
    fontFamily: ["louis-george-cafe-bold " , "louis-george-cafe-bold"].join(","),
    h3: {
      color: "louis-george-cafe.bold-italic"
    } , 
    subtitle1: {
      fontFamily: ["louis-george-cafe-regular " , "louis-george-cafe-regular"].join(","),
    }
  },
});

root.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

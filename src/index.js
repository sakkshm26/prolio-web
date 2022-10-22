import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const THEME = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Rubik', sans-serif`,
      fontSize: 14,
      color: "white",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();

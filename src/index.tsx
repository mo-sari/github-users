import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { store } from "./store";
import { Provider } from "react-redux";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: `'Special Gothic Expanded One', sans-serif`,
    },
    h3: {
      fontFamily: `'Winky Rough', sans-serif`,
    },
    button: {
      fontFamily: `'Outfit', sans-serif`,
      textTransform: "none",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

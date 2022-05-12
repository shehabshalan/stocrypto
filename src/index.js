import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>
);

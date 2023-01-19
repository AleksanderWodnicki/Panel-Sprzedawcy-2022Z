import React from "react";
import "./styles.css";

import i18n from "./translations/i18n";

import { Dashboard } from "/src/components/dashboard/dashboard";
import { DashboardHeader } from "/src/components/dashboard/dashboardHeader";
import { LoginScreen } from "/src/components/login/loginScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { lightTheme, darkTheme } from "/src/themes/themes";
import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "@mui/material";
import { Paper } from "@material-ui/core";

import ReturnedOrders from "/src/components/dashboard/subpages/returnedOrders";
import UnpaidOrders from "/src/components/dashboard/subpages/unpaidOrders";
import UnshippedOrders from "/src/components/dashboard/subpages/unshippedOrders";
import SalesQuality from "/src/components/dashboard/subpages/salesQuality";
import CustomerReviews from "/src/components/dashboard/subpages/customerReviews";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    i18n.changeLanguage("pl");

    this.state = {
      username: "",
      theme: lightTheme,
      language: "pl"
    };
  }

  themeButtonHandler = (themeChange) => {
    this.setState({ theme: themeChange });
  };

  languageButtonHandler = (languageChange) => {
    this.setState({ language: languageChange });
    i18n.changeLanguage(languageChange);
  };

  getTheme = () => {
    if (this.state.theme === lightTheme) {
      return lightTheme;
    } else {
      return darkTheme;
    }
  };

  loginHandler = () => {
    this.setState({
      username: "GamingShop"
    });
  };

  logoutHandler = () => {
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={this.getTheme()}>
          <GlobalStyles
            styles={{
              body: {
                backgroundColor: this.getTheme().palette.background.default
              }
            }}
          />

          <Paper sx={{ boxShadow: "none" }} className="App">
            <DashboardHeader
              handlers={{
                languageButtonHandler: this.languageButtonHandler,
                themeButtonHandler: this.themeButtonHandler,
                logoutHandler: this.logoutHandler
              }}
            />
          </Paper>

          <Routes>
            <Route
              path="/"
              element={
                this.state.username === "" ? (
                  <LoginScreen loginHandler={this.loginHandler} />
                ) : (
                  <Dashboard />
                )
              }
            />
            <Route path="/returnedOrders" element={<ReturnedOrders />} />
            <Route path="/unpaidOrders" element={<UnpaidOrders />} />
            <Route path="/unshippedOrders" element={<UnshippedOrders />} />
            <Route path="/salesQuality" element={<SalesQuality />} />
            <Route path="/customerReviews" element={<CustomerReviews />} />
          </Routes>
        </ThemeProvider>
      </Router>
    );
  }
}

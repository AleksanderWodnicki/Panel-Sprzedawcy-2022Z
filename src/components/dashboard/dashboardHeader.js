import React from "react";
import { Translation } from "react-i18next";
import "/src/translations/i18n";
import "./header.css";

import { Paper } from "@material-ui/core";
import { Typography, IconButton } from "@mui/material";
import { darkTheme, lightTheme } from "/src/themes/themes";

import { language, theme, user } from "/src/data/icons/icons";
import { Link } from "react-router-dom";

export class DashboardHeader extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <Paper
            sx={{ backgroundColor: "background.header", boxShadow: "none" }}
            className="Header"
            elevation={0}
            square
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{ color: "text.header" }}
                variant="title"
                className="HeaderTitle"
              >
                {t("headerTitle")}
              </Typography>
            </Link>
            <HeaderIcons
              handlers={{
                languageButtonHandler: this.props.handlers
                  .languageButtonHandler,
                themeButtonHandler: this.props.handlers.themeButtonHandler,
                logoutHandler: this.props.handlers.logoutHandler
              }}
            />
          </Paper>
        )}
      </Translation>
    );
  }
}

class HeaderIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      languageIcon: language,
      themeIcon: theme,
      userIcon: user,
      languageChanged: true,
      themeChanged: true
    };
  }

  changeLanguage = () => {
    if (this.state.languageChanged === false) {
      this.setState({ languageChanged: true });
    } else {
      this.setState({ languageChanged: false });
    }

    if (this.state.languageChanged === true) {
      this.props.handlers.languageButtonHandler("en");
    } else {
      this.props.handlers.languageButtonHandler("pl");
    }
  };

  changeTheme = () => {
    if (this.state.themeChanged === false) {
      this.setState({ themeChanged: true });
    } else {
      this.setState({ themeChanged: false });
    }

    if (this.state.themeChanged === true) {
      this.props.handlers.themeButtonHandler(darkTheme);
    } else {
      this.props.handlers.themeButtonHandler(lightTheme);
    }
  };

  logout = () => {
    this.props.handlers.logoutHandler();
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="HeaderIcons">
            <IconButton onClick={this.changeLanguage}>
              <img
                className="Icon"
                src={this.state.languageIcon}
                alt="languageIcon"
              />
            </IconButton>
            <IconButton onClick={this.changeTheme}>
              <img
                className="Icon"
                src={this.state.themeIcon}
                alt="themeIcon"
              />
            </IconButton>
            <IconButton onClick={this.logout}>
              <img className="Icon" src={this.state.userIcon} alt="userIcon" />
            </IconButton>
          </div>
        )}
      </Translation>
    );
  }
}

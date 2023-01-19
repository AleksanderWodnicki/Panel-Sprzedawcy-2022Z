import React from "react";
import { Translation } from "react-i18next";

import "/src/components/login/loginScreen.css";

import { Paper, Typography, Button } from "@mui/material";

import { MyTextField } from "/src/themes/themes.js";

export class LoginScreen extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="LoginScreen">
            <Paper
              className="LoginView"
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="Input">
                <MyTextField label={t("username")} />
              </div>
              <div className="Input">
                <MyTextField type="password" label={t("password")} />
              </div>
              <div className="Button">
                <Button
                  sx={{
                    "&.MuiButton-root": {
                      backgroundColor: "background.default",
                      border: 1,
                      borderColor: "#000000",
                      color: "text.header"
                    }
                  }}
                  onClick={this.props.loginHandler}
                >
                  <Typography variant="buttonName">{t("login")}</Typography>
                </Button>
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

import React from "react";
import { Translation } from "react-i18next";
import "/src/translations/i18n";

import "/src/components/dashboard/widgets/css/salesTips.css";

import { Paper, Typography } from "@material-ui/core";

export class SalesTipsWidget extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="SalesTipsWidget">
            <Paper
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="WidgetName">
                <Typography color="text.header" variant="widgetName">
                  {t("salesTips")}
                </Typography>
              </div>
              <div className="Tips">
                <div className="Tip">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("headerTip1")}
                  </Typography>
                  <Typography color="text.buttonName" variant="plainText">
                    {t("bodyTip1")}
                  </Typography>
                </div>
                <div className="Tip">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("headerTip2")}
                  </Typography>
                  <Typography color="text.buttonName" variant="plainText">
                    {t("bodyTip2")}
                  </Typography>
                </div>
                <div className="Tip">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("headerTip3")}
                  </Typography>
                  <Typography color="text.buttonName" variant="plainText">
                    {t("bodyTip3")}
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

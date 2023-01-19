import React from "react";
import "/src/translations/i18n";
import { Translation } from "react-i18next";
import { Typography } from "@mui/material";
import "/src/components/dashboard/subpages/subpages.css";

export default class CustomerReviews extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="Subpage">
            <Typography
              sx={{ color: "text.header" }}
              variant="title"
              className="HeaderTitle"
              align="center"
            >
              {t("customerReviews")}
            </Typography>
          </div>
        )}
      </Translation>
    );
  }
}

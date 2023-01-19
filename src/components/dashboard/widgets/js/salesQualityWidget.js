import React from "react";
import { Translation } from "react-i18next";
import "/src/translations/i18n";

import "/src/components/dashboard/widgets/css/salesQuality.css";
import { Link } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

export class SalesQualityWidget extends React.Component {
  render() {
    var category;

    if (this.props.data.categoryEarned === 5) {
      category = "category5";
    } else if (this.props.data.categoryEarned === 4) {
      category = "category4";
    } else if (this.props.data.categoryEarned === 3) {
      category = "category3";
    } else if (this.props.data.categoryEarned === 2) {
      category = "category2";
    } else {
      category = "category1";
    }

    return (
      <Translation>
        {(t) => (
          <div className="SalesQualityWidget">
            <Paper
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="WidgetName">
                <Link to="salesQuality" style={{ textDecoration: "none" }}>
                  <Typography color="text.header" variant="widgetName">
                    {t("salesQuality")}
                  </Typography>
                </Link>
              </div>

              <div className="QualityAspects">
                <div className="QualityAspectName">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("aspect1")}
                  </Typography>
                </div>
                <div className="QualityAspect">
                  <Typography
                    color={
                      this.props.data.aspect1score === 1
                        ? "opinions.one"
                        : this.props.data.aspect1score === 2
                        ? "opinions.two"
                        : this.props.data.aspect1score === 3
                        ? "opinions.three"
                        : this.props.data.aspect1score === 4
                        ? "opinions.four"
                        : "opinions.five"
                    }
                    variant="plainText"
                  >
                    {this.props.data.aspect1score}/5
                  </Typography>
                </div>

                <div className="QualityAspectName">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("aspect2")}
                  </Typography>
                </div>
                <div className="QualityAspect">
                  <Typography
                    color={
                      this.props.data.aspect2score === 1
                        ? "opinions.one"
                        : this.props.data.aspect2score === 2
                        ? "opinions.two"
                        : this.props.data.aspect2score === 3
                        ? "opinions.three"
                        : this.props.data.aspect2score === 4
                        ? "opinions.four"
                        : "opinions.five"
                    }
                    variant="plainText"
                  >
                    {this.props.data.aspect2score}/5
                  </Typography>
                </div>

                <div className="QualityAspectName">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("aspect3")}
                  </Typography>
                </div>
                <div className="QualityAspect">
                  <Typography
                    color={
                      this.props.data.aspect3score === 1
                        ? "opinions.one"
                        : this.props.data.aspect3score === 2
                        ? "opinions.two"
                        : this.props.data.aspect3score === 3
                        ? "opinions.three"
                        : this.props.data.aspect3score === 4
                        ? "opinions.four"
                        : "opinions.five"
                    }
                    variant="plainText"
                  >
                    {this.props.data.aspect3score}/5
                  </Typography>
                </div>

                <div className="QualityAspectName">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("aspect4")}
                  </Typography>
                </div>
                <div className="QualityAspect">
                  <Typography
                    color={
                      this.props.data.aspect4score === 1
                        ? "opinions.one"
                        : this.props.data.aspect4score === 2
                        ? "opinions.two"
                        : this.props.data.aspect4score === 3
                        ? "opinions.three"
                        : this.props.data.aspect4score === 4
                        ? "opinions.four"
                        : "opinions.five"
                    }
                    variant="plainText"
                  >
                    {this.props.data.aspect4score}/5
                  </Typography>
                </div>

                <div className="QualityAspectName">
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("aspect5")}
                  </Typography>
                </div>
                <div className="QualityAspect">
                  <Typography
                    color={
                      this.props.data.aspect5score === 1
                        ? "opinions.one"
                        : this.props.data.aspect5score === 2
                        ? "opinions.two"
                        : this.props.data.aspect5score === 3
                        ? "opinions.three"
                        : this.props.data.aspect5score === 4
                        ? "opinions.four"
                        : "opinions.five"
                    }
                    variant="plainText"
                  >
                    {this.props.data.aspect5score}/5
                  </Typography>
                </div>
              </div>

              <div className="QualityCategory">
                <div>
                  <Typography color="text.buttonName" variant="buttonName">
                    {t("category")}
                  </Typography>
                </div>
                <div>
                  <Typography
                    color={
                      this.props.data.categoryEarned === 1
                        ? "opinions.one"
                        : this.props.data.categoryEarned === 2
                        ? "opinions.two"
                        : this.props.data.categoryEarned === 3
                        ? "opinions.three"
                        : this.props.data.categoryEarned === 4
                        ? "opinions.four"
                        : "opinions.five"
                    }
                    variant="buttonName"
                  >
                    {t(category)}
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

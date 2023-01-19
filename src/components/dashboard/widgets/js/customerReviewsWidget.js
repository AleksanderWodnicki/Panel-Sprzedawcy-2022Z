import React from "react";
import { Translation } from "react-i18next";
import "/src/translations/i18n";

import "/src/components/dashboard/widgets/css/customerReviews.css";

import { Paper, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MySelect, MyMenuItem } from "/src/themes/themes.js";

export class CustomerReviewsWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbackType: "all"
    };
  }

  changeFeedbackTypeHandler = (e) => {
    this.setState({ feedbackType: e.target.value });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="CustomerReviewsWidget">
            <Paper
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="WidgetName">
                <Link to="customerReviews" style={{ textDecoration: "none" }}>
                  <Typography color="text.header" variant="widgetName">
                    {t("customerReviews")}
                  </Typography>
                </Link>

                <MySelect
                  value={this.state.feedbackType}
                  onChange={this.changeFeedbackTypeHandler}
                >
                  <MyMenuItem value={"all"}>{t("all")}</MyMenuItem>
                  <MyMenuItem value={"positive"}>{t("positive")}</MyMenuItem>
                  <MyMenuItem value={"negative"}>{t("negative")}</MyMenuItem>
                </MySelect>
              </div>
              <CustomerReviewsList
                data={this.props.data}
                feedbackType={this.state.feedbackType}
              />
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

class CustomerReviewsList extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="ReviewsList">
            <div>
              {(this.props.feedbackType === "all"
                ? this.props.data.all
                : this.props.feedbackType === "positive"
                ? this.props.data.positive
                : this.props.data.negative
              ).map((review) => (
                <CustomerReview key={review.title} data={review} />
              ))}
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

class CustomerReview extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="CustomerReview">
            <div className="CustomerReviewTitle">
              <Typography color="text.primary" variant="buttonName">
                {this.props.data.title}
              </Typography>
            </div>
            <div className="CustomerReviewScore">
              <Typography
                color={
                  this.props.data.value === 1
                    ? "opinions.one"
                    : this.props.data.value === 2
                    ? "opinions.two"
                    : this.props.data.value === 3
                    ? "opinions.three"
                    : this.props.data.value === 4
                    ? "opinions.four"
                    : "opinions.five"
                }
                variant="buttonName"
              >
                {this.props.data.value}/5
              </Typography>
            </div>
            <div className="ReviewBody">
              <Typography color="text.primary" variant="plainText">
                {this.props.data.text}
              </Typography>
            </div>
            <div className="Author">
              <Typography color="text.secondary" variant="plainText">
                {t("user")} {this.props.data.clientName}
              </Typography>
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

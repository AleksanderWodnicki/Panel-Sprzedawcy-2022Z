import React from "react";
import { Translation } from "react-i18next";
import "/src/translations/i18n";

import "/src/components/dashboard/widgets/css/offersRank.css";

import { Paper, Typography } from "@mui/material";

import { MySelect, MyMenuItem } from "/src/themes/themes.js";

export class OffersRankWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingMode: "mostBought"
    };
  }

  changeSortingModeHandler = (e) => {
    this.setState({ sortingMode: e.target.value });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="OffersRank">
            <Paper
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="WidgetName">
                <Typography color="text.header" variant="widgetName">
                  {t("offersRank")}
                </Typography>
                <MySelect
                  value={this.state.sortingMode}
                  onChange={this.changeSortingModeHandler}
                >
                  <MyMenuItem value={"mostBought"}>
                    {t("mostBought")}
                  </MyMenuItem>
                  <MyMenuItem value={"leastBought"}>
                    {t("leastBought")}
                  </MyMenuItem>
                </MySelect>
              </div>
              <OffersList
                data={this.props.data}
                sortingMode={this.state.sortingMode}
              />
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

class OffersList extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="OffersList">
            <div className="OffersListHeader">
              <div className="OfferIconAndName">
                <Typography color="text.primary" variant="buttonName">
                  {t("offer")}
                </Typography>
              </div>
              <div className="OfferSold">
                <Typography color="text.primary" variant="buttonName">
                  {t("numberUnits")}
                </Typography>
              </div>
              <div className="OfferTurnoverOrViews">
                <Typography color="text.primary" variant="buttonName">
                  {this.props.sortingMode === "leastBought"
                    ? t("views")
                    : t("turnover")}
                </Typography>
              </div>
            </div>
            <div>
              {(this.props.sortingMode === "leastBought"
                ? this.props.data.least
                : this.props.data.most
              ).map((offer) => (
                <Offer key={offer.name} data={offer} />
              ))}
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

class Offer extends React.Component {
  render() {
    return (
      <div className="Offer">
        <div className="IconAndName">
          <img id="offerIcon" src={this.props.data.image} alt="Icon" />
          <Typography color="text.primary" variant="plainText">
            {this.props.data.name}
          </Typography>
        </div>
        <div className="Sold">
          <Typography color="text.primary" variant="plainText">
            {this.props.data.sold}
          </Typography>
        </div>
        <div className="TurnoverOrViews">
          <Typography color="text.primary" variant="plainText">
            {this.props.data.turnoverOrViews}
          </Typography>
        </div>
      </div>
    );
  }
}

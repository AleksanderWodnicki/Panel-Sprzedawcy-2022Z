import React from "react";
import { Translation } from "react-i18next";
import "/src/translations/i18n";

import "/src/components/dashboard/widgets/css/orders.css";

import { Paper, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import { unpaid, unshipped, returns } from "/src/data/icons/icons";

export class OrdersWidget extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="OrdersWidget">
            <Paper
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="WidgetName">
                <Typography color="text.header" variant="widgetName">
                  {t("orders")}
                </Typography>
              </div>

              <div className="OrderTypeName">
                <div className="OrderTypeColumn">
                  <Typography color="text.header" variant="buttonName">
                    {t("unpaidOrders")}
                  </Typography>
                  <Link to="unpaidOrders">
                    <img className="Icon" src={unpaid} alt="unpaidOrderIcon" />
                  </Link>
                </div>
                <div className="OrderTypeRow">
                  <div></div>
                  <Typography color="text.header" variant="shopName">
                    {this.props.data.unpaid}
                  </Typography>
                </div>
              </div>

              <div className="OrderTypeName">
                <div className="OrderTypeColumn">
                  <Typography color="text.header" variant="buttonName">
                    {t("unshippedOrders")}
                  </Typography>
                  <Link to="unshippedOrders">
                    <img
                      className="Icon"
                      src={unshipped}
                      alt="unshippedOrderIcon"
                    />
                  </Link>
                </div>
                <div className="OrderTypeRow">
                  <Typography color="text.header" variant="shopName">
                    {this.props.data.unshipped}
                  </Typography>
                </div>
              </div>

              <div className="OrderTypeName">
                <div className="OrderTypeColumn">
                  <Typography color="text.header" variant="buttonName">
                    {t("returnedOrders")}
                  </Typography>
                  <Link to="returnedOrders">
                    <img className="Icon" src={returns} alt="unpaidOrderIcon" />
                  </Link>
                </div>
                <div className="OrderTypeRow">
                  <Typography color="text.header" variant="shopName">
                    {this.props.data.returned}
                  </Typography>
                </div>
              </div>
              <div style={{ padding: "10px" }}></div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

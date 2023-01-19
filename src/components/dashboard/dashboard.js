import React from "react";

import { DashboardHeaderShops } from "./dashboardHeaderShops";
import { DashboardSpace } from "./dashboardSpace";

import "/src/components/dashboard/dashboard";
import DataRequester from "../../data/data";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.dataRequester = new DataRequester();
    var store = "GamingShop";

    this.state = {
      shop: store,

      customerReviewsData: this.dataRequester.getCustomerReviewsData(store),
      offersRankData: this.dataRequester.getOffersRankData(store),
      ordersData: this.dataRequester.getOrdersData(store),
      salesChartData: this.dataRequester.getSalesChartData(store),
      salesQualityData: this.dataRequester.getSalesQualityData(store)
    };
  }

  shopChanged = (e, newShop) => {
    var shop = newShop;
    this.setState({
      shop: newShop,
      customerReviewsData: this.dataRequester.getCustomerReviewsData(shop),
      offersRankData: this.dataRequester.getOffersRankData(shop),
      ordersData: this.dataRequester.getOrdersData(shop),
      salesChartData: this.dataRequester.getSalesChartData(shop),
      salesQualityData: this.dataRequester.getSalesQualityData(shop)
    });
  };

  render() {
    return (
      <div className="Dashboard">
        <DashboardHeaderShops
          shop={this.state.shop}
          shopChanged={this.shopChanged}
        />
        <DashboardSpace
          customerReviewsData={this.state.customerReviewsData}
          offersRankData={this.state.offersRankData}
          ordersData={this.state.ordersData}
          salesChartData={this.state.salesChartData}
          salesQualityData={this.state.salesQualityData}
        />
      </div>
    );
  }
}

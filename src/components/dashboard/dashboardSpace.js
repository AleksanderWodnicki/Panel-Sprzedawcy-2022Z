import React from "react";

import "/src/components/dashboard/dashboard.css";

import { CustomerReviewsWidget } from "./widgets/js/customerReviewsWidget";
import { OffersRankWidget } from "./widgets/js/offersRankWidget";
import { OrdersWidget } from "./widgets/js/ordersWidget";
import { SalesChartWidget } from "./widgets/js/salesChartWidget";
import { SalesQualityWidget } from "./widgets/js/salesQualityWidget";
import { SalesTipsWidget } from "./widgets/js/salesTipsWidget";

export class DashboardSpace extends React.Component {
  render() {
    return (
      <div className="DashboardSpace">
        <div className="LeftColumn">
          <SalesChartWidget data={this.props.salesChartData} />
          <OffersRankWidget data={this.props.offersRankData} />
          <CustomerReviewsWidget data={this.props.customerReviewsData} />
        </div>
        <div className="RightColumn">
          <OrdersWidget data={this.props.ordersData} />{" "}
          <SalesQualityWidget data={this.props.salesQualityData} />
          <SalesTipsWidget />
        </div>
      </div>
    );
  }
}

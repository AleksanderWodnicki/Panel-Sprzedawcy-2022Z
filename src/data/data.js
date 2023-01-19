import customerReviewsGamingShop from "/src/data/shops/gaming-shop/customerReviews.js";
import offersRankGamingShop from "/src/data/shops/gaming-shop/offersRank.js";
import ordersGamingShop from "/src/data/shops/gaming-shop/orders.js";
import salesChartGamingShop from "/src/data/shops/gaming-shop/salesChart.js";
import salesQualityGamingShop from "/src/data/shops/gaming-shop/salesQuality.js";

import customerReviewsMoviesShop from "/src/data/shops/movies-shop/customerReviews.js";
import offersRankMoviesShop from "/src/data/shops/movies-shop/offersRank.js";
import ordersMoviesShop from "/src/data/shops/movies-shop/orders.js";
import salesChartMoviesShop from "/src/data/shops/movies-shop/salesChart.js";
import salesQualityMoviesShop from "/src/data/shops/movies-shop/salesQuality.js";

import { accountsList } from "/src/data/accounts/accounts.js";

export default class DataRequester {
  getCustomerReviewsData(shop) {
    if (shop === "GamingShop") {
      return customerReviewsGamingShop;
    } else {
      return customerReviewsMoviesShop;
    }
  }
  getOffersRankData(shop) {
    if (shop === "GamingShop") {
      return offersRankGamingShop;
    } else {
      return offersRankMoviesShop;
    }
  }
  getOrdersData(shop) {
    if (shop === "GamingShop") {
      return ordersGamingShop;
    } else {
      return ordersMoviesShop;
    }
  }
  getSalesChartData(shop) {
    if (shop === "GamingShop") {
      return salesChartGamingShop;
    } else {
      return salesChartMoviesShop;
    }
  }
  getSalesQualityData(shop) {
    if (shop === "GamingShop") {
      return salesQualityGamingShop;
    } else {
      return salesQualityMoviesShop;
    }
  }
  getAccountsData(shop) {
    return accountsList;
  }
}

import React from "react";

import { Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { withStyles } from "@mui/styles";

export class DashboardHeaderShops extends React.Component {
  render() {
    return (
      <Paper
        sx={{ backgroundColor: "background.header", boxShadow: "none" }}
        className="HeaderShops"
        elevation={0}
        square
      >
        <Tabs
          value={this.props.shop}
          onChange={this.props.shopChanged}
          TabIndicatorProps={{
            sx: { backgroundColor: "background.default" }
          }}
        >
          <Tab
            sx={{
              "&.MuiTab-root": {
                backgroundColor: "background.header"
              },
              "&.Mui-selected": {
                backgroundColor: "background.default"
              }
            }}
            value="GamingShop"
            label={
              <Typography sx={{ color: "text.primary" }} variant="shopName">
                Gaming–Shop
              </Typography>
            }
          />
          <Tab
            sx={{
              "&.MuiTab-root": {
                backgroundColor: "background.header"
              },
              "&.Mui-selected": {
                backgroundColor: "background.default"
              }
            }}
            value="MoviesShop"
            label={
              <Typography sx={{ color: "text.primary" }} variant="shopName">
                Movies–Shop
              </Typography>
            }
          />
        </Tabs>
      </Paper>
    );
  }
}

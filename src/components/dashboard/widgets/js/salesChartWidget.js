import React from "react";
import { Translation, useTranslation } from "react-i18next";

import { Paper, Typography } from "@mui/material";
import "/src/components/dashboard/widgets/css/salesChart.css";

import { MySelect, MyMenuItem } from "/src/themes/themes.js";

import ReactEcharts from "echarts-for-react";

const ChartType = {
  Bar: "bar",
  Linear: "line"
};

const Filter = {
  UnitsSold: "units",
  Turnover: "turnover"
};

const Period = {
  Today: "today",
  Week: "week",
  Year: "year"
};

export class SalesChartWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartType: ChartType.Bar,
      filter: Filter.UnitsSold,
      currentPeriod: true,
      previousPeriod: false,
      timePeriod: Period.Today
    };
  }

  handleChartTypeChange = (e) => {
    this.setState({ chartType: e.target.value });
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleTimePeriodChange = (e) => {
    this.setState({ timePeriod: e.target.value });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="SalesChart">
            <Paper
              sx={{ backgroundColor: "background.widget" }}
              elevation={1}
              square
            >
              <div className="WidgetName">
                <Typography color="text.header" variant="widgetName">
                  {t("salesChart")}
                </Typography>
              </div>
              <SalesChartButtons
                chartType={this.state.chartType}
                filter={this.state.filter}
                timePeriod={this.state.timePeriod}
                handleChartTypeChange={this.handleChartTypeChange}
                handleFilterChange={this.handleFilterChange}
                handleTimePeriodChange={this.handleTimePeriodChange}
              />
              <SalesChart
                data={this.props.data}
                chartType={this.state.chartType}
                filter={this.state.filter}
                timePeriod={this.state.timePeriod}
                currentPeriod={this.state.currentPeriod}
                previousPeriod={this.state.previousPeriod}
                handleChartTypeChange={this.handleChartTypeChange}
                handleFilterChange={this.handleFilterChange}
                handleTimePeriodChange={this.handleTimePeriodChange}
              />
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

class SalesChartButtons extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="SalesChartButtons">
            <MySelect
              value={this.props.chartType}
              onChange={this.props.handleChartTypeChange}
            >
              <MyMenuItem value={ChartType.Bar}>{t("typeBar")}</MyMenuItem>
              <MyMenuItem value={ChartType.Linear}>
                {t("typeLinear")}
              </MyMenuItem>
            </MySelect>
            <MySelect
              value={this.props.filter}
              onChange={this.props.handleFilterChange}
            >
              <MyMenuItem value={Filter.UnitsSold}>{t("unitsSold")}</MyMenuItem>
              <MyMenuItem value={Filter.Turnover}>{t("turnover")}</MyMenuItem>
            </MySelect>
            <MySelect
              value={this.props.timePeriod}
              onChange={this.props.handleTimePeriodChange}
            >
              <MyMenuItem value={Period.Today}>{t("today")}</MyMenuItem>
              <MyMenuItem value={Period.Week}>{t("thisWeek")}</MyMenuItem>
              <MyMenuItem value={Period.Year}>{t("thisYear")}</MyMenuItem>
            </MySelect>
          </div>
        )}
      </Translation>
    );
  }
}

function SalesChart(props) {
  const { t } = useTranslation();

  const getXAxis = () => {
    const x = {
      day: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
      ],
      week: [
        t("monday"),
        t("tuesday"),
        t("wednesday"),
        t("thursday"),
        t("friday"),
        t("saturday"),
        t("sunday")
      ],
      year: [
        t("january"),
        t("february"),
        t("march"),
        t("april"),
        t("may"),
        t("june"),
        t("july"),
        t("august"),
        t("september"),
        t("october"),
        t("november"),
        t("december")
      ]
    };

    if (props.timePeriod === Period.Today) {
      return x.day;
    } else if (props.timePeriod === Period.Week) {
      return x.week;
    } else {
      return x.year;
    }
  };

  const getCurrentData = () => {
    if (props.timePeriod === Period.Today) {
      if (props.filter === Filter.Turnover) {
        return props.data.today.turnover;
      } else {
        return props.data.today.unitsSold;
      }
    } else if (props.timePeriod === Period.Week) {
      if (props.filter === Filter.Turnover) {
        return props.data.thisWeek.turnover;
      } else {
        return props.data.thisWeek.unitsSold;
      }
    } else {
      if (props.filter === Filter.Turnover) {
        return props.data.thisYear.turnover;
      } else {
        return props.data.thisYear.unitsSold;
      }
    }
  };

  const getPreviousData = () => {
    if (props.timePeriod === Period.Today) {
      if (props.filter === Filter.Turnover) {
        return props.data.today.previousTurnover;
      } else {
        return props.data.today.previousUnitsSold;
      }
    } else if (props.timePeriod === Period.Week) {
      if (props.filter === Filter.Turnover) {
        return props.data.thisWeek.previousTurnover;
      } else {
        return props.data.thisWeek.previousUnitsSold;
      }
    } else {
      if (props.filter === Filter.Turnover) {
        return props.data.thisYear.previousTurnover;
      } else {
        return props.data.thisYear.previousUnitsSold;
      }
    }
  };

  const getChartType = () => {
    return props.chartType;
  };

  const getCurrentPeriod = () => {
    return props.currentPeriod;
  };

  const getPreviousPeriod = () => {
    return props.previousPeriod;
  };

  const option = {
    xAxis: {
      type: "category",
      data: getXAxis()
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: t("current"),
        data: getCurrentData(),
        type: getChartType()
      },
      {
        name: t("previous"),
        data: getPreviousData(),
        type: getChartType()
      }
    ],
    legend: {
      data: [t("current"), t("previous")],
      inactiveColor: "#9f9f9f",
      textStyle: {
        color: "#"
      }
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      left: "14px",
      right: "15px",
      top: "40px",
      bottom: "15px",
      containLabel: true
    },
    color: ["#4DCAFF", "orange"],
    textStyle: {
      fontFamily: "Overpass",
      color: "text.header"
    }
  };

  return <ReactEcharts option={option} />;
}

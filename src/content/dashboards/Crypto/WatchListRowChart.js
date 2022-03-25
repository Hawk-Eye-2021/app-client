"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_chartjs_2_1 = require("react-chartjs-2");
const material_1 = require("@mui/material");
const WatchListRowChart = ({ data: dataProp, labels, ...rest }) => {
    const theme = (0, material_1.useTheme)();
    const data = () => {
        return {
            datasets: [
                {
                    data: dataProp,
                    borderWidth: 3,
                    backgroundColor: 'transparent',
                    borderColor: theme.colors.primary.main,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }
            ],
            labels
        };
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        layout: {
            padding: 5
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ]
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
            caretSize: 6,
            displayColors: false,
            yPadding: 8,
            xPadding: 16,
            borderWidth: 4,
            borderColor: theme.palette.common.black,
            backgroundColor: theme.palette.common.black,
            titleFontColor: theme.palette.common.white,
            bodyFontColor: theme.palette.common.white,
            footerFontColor: theme.palette.common.white,
            callbacks: {
                title: () => { },
                label: (tooltipItem) => {
                    return `Price: $${tooltipItem.yLabel}`;
                }
            }
        }
    };
    return (<div {...rest}>
      <react_chartjs_2_1.Line data={data} options={options}/>
    </div>);
};
WatchListRowChart.propTypes = {
    data: prop_types_1.default.array.isRequired,
    labels: prop_types_1.default.array.isRequired
};
exports.default = WatchListRowChart;
//# sourceMappingURL=WatchListRowChart.js.map
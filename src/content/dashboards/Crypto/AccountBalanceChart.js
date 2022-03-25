"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_chartjs_2_1 = require("react-chartjs-2");
const material_1 = require("@mui/material");
const AccountBalanceChart = ({ data: dataProp, ...rest }) => {
    const theme = (0, material_1.useTheme)();
    const data = {
        datasets: dataProp.datasets.map((dataset) => ({
            ...dataset,
            borderWidth: 10,
            borderColor: theme.colors.alpha.white[100],
            hoverBorderColor: theme.colors.alpha.white[30]
        })),
        labels: dataProp.labels
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cutoutPercentage: 60,
        legend: {
            display: false
        },
        layout: {
            padding: 0
        },
        tooltips: {
            enabled: true,
            caretSize: 6,
            displayColors: false,
            mode: 'label',
            intersect: true,
            yPadding: 8,
            xPadding: 16,
            borderWidth: 2,
            bodySpacing: 10,
            borderColor: theme.colors.alpha.black[30],
            backgroundColor: theme.palette.common.white,
            titleFontColor: theme.palette.common.black,
            bodyFontColor: theme.palette.common.black,
            footerFontColor: theme.palette.common.black,
            callbacks: {
                label(tooltipItem, _data) {
                    const label = _data.labels[tooltipItem.index];
                    const value = _data.datasets[0].data[tooltipItem.index];
                    return `${label}: ${value}%`;
                }
            }
        }
    };
    return <react_chartjs_2_1.Doughnut data={data} options={options} {...rest}/>;
};
AccountBalanceChart.propTypes = {
    data: prop_types_1.default.object.isRequired
};
exports.default = AccountBalanceChart;
//# sourceMappingURL=AccountBalanceChart.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_chartjs_2_1 = require("react-chartjs-2");
const material_1 = require("@mui/material");
const WatchListColumn1Chart = ({ data: dataProp, labels, ...rest }) => {
    const theme = (0, material_1.useTheme)();
    const data = (canvas) => {
        const ctx = canvas.getContext('2d');
        const primaryGradient = ctx.createLinearGradient(6, 6, 6, 150);
        primaryGradient.addColorStop(0, (0, material_1.alpha)(theme.colors.primary.light, 0.8));
        primaryGradient.addColorStop(0.8, theme.colors.alpha.white[10]);
        primaryGradient.addColorStop(1, theme.colors.alpha.white[100]);
        return {
            datasets: [
                {
                    data: dataProp,
                    borderWidth: 1,
                    backgroundColor: primaryGradient,
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
            padding: 0
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
WatchListColumn1Chart.propTypes = {
    data: prop_types_1.default.array.isRequired,
    labels: prop_types_1.default.array.isRequired
};
exports.default = WatchListColumn1Chart;
//# sourceMappingURL=WatchListColumn1Chart.js.map
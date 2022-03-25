"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Label_1 = __importDefault(require("src/components/Label"));
const Text_1 = __importDefault(require("src/components/Text"));
const WatchListColumn1Chart_1 = __importDefault(require("./WatchListColumn1Chart"));
const AvatarWrapper = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`);
const WatchListColumn1ChartWrapper = (0, styles_1.styled)(WatchListColumn1Chart_1.default)(() => `
        height: 130px;
`);
function WatchListColumn2() {
    const price = {
        week: {
            labels: [
                'Monday',
                'Tueday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            data: [1.854, 1.773, 2.092, 2.009, 1.909, 1.842, 1.884]
        }
    };
    return (<material_1.Card>
      <material_1.Box sx={{ p: 3 }}>
        <material_1.Box display="flex" alignItems="center">
          <AvatarWrapper>
            <img alt="ETH" src="/static/images/placeholders/logo/ethereum.png"/>
          </AvatarWrapper>
          <material_1.Box>
            <material_1.Typography variant="h4" noWrap>
              Ethereum
            </material_1.Typography>
            <material_1.Typography variant="subtitle1" noWrap>
              ETH
            </material_1.Typography>
          </material_1.Box>
        </material_1.Box>
        <material_1.Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pt: 3
        }}>
          <material_1.Typography variant="h2" sx={{ pr: 1, mb: 1 }}>
            $1,968.00
          </material_1.Typography>
          <Text_1.default color="error">
            <b>-3.24%</b>
          </Text_1.default>
        </material_1.Box>
        <material_1.Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
          <Label_1.default color="error">-$90</Label_1.default>
          <material_1.Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
            last 24h
          </material_1.Typography>
        </material_1.Box>
      </material_1.Box>
      <material_1.Box height={130} sx={{ ml: -1.5 }}>
        <WatchListColumn1ChartWrapper data={price.week.data} labels={price.week.labels}/>
      </material_1.Box>
    </material_1.Card>);
}
exports.default = WatchListColumn2;
//# sourceMappingURL=WatchListColumn2.js.map
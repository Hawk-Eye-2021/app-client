"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Text_1 = __importDefault(require("src/components/Text"));
const Label_1 = __importDefault(require("src/components/Label"));
const WatchListRowChart_1 = __importDefault(require("./WatchListRowChart"));
const AvatarWrapper = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`);
const LabelWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        position: absolute;
        right: ${theme.spacing(2)};
        top: ${theme.spacing(2)};
`);
const WatchListRowChartWrapper = (0, styles_1.styled)(WatchListRowChart_1.default)(({ theme }) => `
        height: 100px;
`);
function WatchListRow() {
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
            bitcoin: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
            ethereum: [1.854, 1.773, 2.092, 2.009, 1.909, 1.842, 1.884],
            cardano: [13, 16, 14, 21, 8, 11, 20]
        }
    };
    return (<material_1.Card>
      <material_1.Grid container spacing={0} alignItems="center">
        <material_1.Grid xs={12} md item sx={{ position: 'relative' }}>
          <material_1.Box sx={{ px: 3, pt: 3 }}>
            <LabelWrapper>
              <Label_1.default color="secondary">24h</Label_1.default>
            </LabelWrapper>
            <material_1.Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png"/>
              </AvatarWrapper>
              <material_1.Box>
                <material_1.Typography variant="h4" noWrap>
                  Bitcoin
                </material_1.Typography>
                <material_1.Typography variant="subtitle1" noWrap>
                  BTC
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
                $56,475.99
              </material_1.Typography>
              <Text_1.default color="success">
                <b>+12.5%</b>
              </Text_1.default>
            </material_1.Box>
            <material_1.Box height={100} sx={{ ml: -1.5 }}>
              <WatchListRowChartWrapper data={price.week.bitcoin} labels={price.week.labels}/>
            </material_1.Box>
          </material_1.Box>
        </material_1.Grid>
        <material_1.Divider orientation="vertical" flexItem/>
        <material_1.Grid xs={12} md item sx={{ position: 'relative' }}>
          <material_1.Box sx={{ px: 3, pt: 3 }}>
            <LabelWrapper>
              <Label_1.default color="secondary">24h</Label_1.default>
            </LabelWrapper>
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
            <material_1.Box height={100} sx={{ ml: -1.5 }}>
              <WatchListRowChartWrapper data={price.week.ethereum} labels={price.week.labels}/>
            </material_1.Box>
          </material_1.Box>
        </material_1.Grid>
        <material_1.Divider orientation="vertical" flexItem/>
        <material_1.Grid xs={12} md item sx={{ position: 'relative' }}>
          <material_1.Box sx={{ px: 3, pt: 3 }}>
            <LabelWrapper>
              <Label_1.default color="secondary">24h</Label_1.default>
            </LabelWrapper>
            <material_1.Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img alt="ADA" src="/static/images/placeholders/logo/cardano.png"/>
              </AvatarWrapper>
              <material_1.Box>
                <material_1.Typography variant="h4" noWrap>
                  Cardano
                </material_1.Typography>
                <material_1.Typography variant="subtitle1" noWrap>
                  ADA
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
                $23.00
              </material_1.Typography>
              <Text_1.default color="error">
                <b>-0.33%</b>
              </Text_1.default>
            </material_1.Box>
            <material_1.Box height={100} sx={{ ml: -1.5 }}>
              <WatchListRowChartWrapper data={price.week.cardano} labels={price.week.labels}/>
            </material_1.Box>
          </material_1.Box>
        </material_1.Grid>
      </material_1.Grid>
      <material_1.Divider />
      <material_1.CardActions disableSpacing sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
        <material_1.Button variant="outlined">View more assets</material_1.Button>
      </material_1.CardActions>
    </material_1.Card>);
}
exports.default = WatchListRow;
//# sourceMappingURL=WatchListRow.js.map
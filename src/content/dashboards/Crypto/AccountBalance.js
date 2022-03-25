"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const TrendingUp_1 = __importDefault(require("@mui/icons-material/TrendingUp"));
const AccountBalanceChart_1 = __importDefault(require("./AccountBalanceChart"));
const Text_1 = __importDefault(require("src/components/Text"));
const AccountBalanceChartWrapper = (0, styles_1.styled)(AccountBalanceChart_1.default)(() => `
      width: 100%;
      height: 100%;
`);
const AvatarSuccess = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`);
function AccountBalance() {
    const cryptoBalance = {
        datasets: [
            {
                data: [20, 10, 40, 30],
                backgroundColor: ['#ff9900', '#1c81c2', '#333', '#5c6ac0']
            }
        ],
        labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum']
    };
    return (<material_1.Card>
      <material_1.Grid spacing={0} container>
        <material_1.Grid item xs={12} md={6}>
          <material_1.Box p={4}>
            <material_1.Typography sx={{ pb: 3 }} variant="h4">
              Account Balance
            </material_1.Typography>
            <material_1.Box>
              <material_1.Typography variant="h1" gutterBottom>
                $54,584.23
              </material_1.Typography>
              <material_1.Typography variant="h4" fontWeight="normal" color="text.secondary">
                1.0045983485234 BTC
              </material_1.Typography>
              <material_1.Box display="flex" sx={{ py: 4 }} alignItems="center">
                <AvatarSuccess sx={{ mr: 2 }} variant="rounded">
                  <TrendingUp_1.default fontSize="large"/>
                </AvatarSuccess>
                <material_1.Box>
                  <material_1.Typography variant="h4">+ $3,594.00</material_1.Typography>
                  <material_1.Typography variant="subtitle2" noWrap>
                    this month
                  </material_1.Typography>
                </material_1.Box>
              </material_1.Box>
            </material_1.Box>
            <material_1.Grid container spacing={3}>
              <material_1.Grid sm item>
                <material_1.Button fullWidth variant="outlined">
                  Send
                </material_1.Button>
              </material_1.Grid>
              <material_1.Grid sm item>
                <material_1.Button fullWidth variant="contained">
                  Receive
                </material_1.Button>
              </material_1.Grid>
            </material_1.Grid>
          </material_1.Box>
        </material_1.Grid>
        <material_1.Grid sx={{ position: 'relative' }} display="flex" alignItems="center" item xs={12} md={6}>
          <material_1.Hidden mdDown>
            <material_1.Divider absolute orientation="vertical"/>
          </material_1.Hidden>
          <material_1.Box p={4} flex={1}>
            <material_1.Grid container spacing={0}>
              <material_1.Grid xs={12} sm={5} item display="flex" justifyContent="center" alignItems="center">
                <material_1.Box style={{ height: '160px' }}>
                  <AccountBalanceChartWrapper data={cryptoBalance}/>
                </material_1.Box>
              </material_1.Grid>
              <material_1.Grid xs={12} sm={7} item display="flex" alignItems="center">
                <material_1.List disablePadding sx={{ width: '100%' }}>
                  <material_1.ListItem disableGutters>
                    <material_1.ListItemAvatar sx={{
            minWidth: '46px',
            display: 'flex',
            alignItems: 'center'
        }}>
                      <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png"/>
                    </material_1.ListItemAvatar>
                    <material_1.ListItemText primary="BTC" primaryTypographyProps={{ variant: 'h5', noWrap: true }} secondary="Bitcoin" secondaryTypographyProps={{
            variant: 'subtitle2',
            noWrap: true
        }}/>
                    <material_1.Box>
                      <material_1.Typography align="right" variant="h4" noWrap>
                        20%
                      </material_1.Typography>
                      <Text_1.default color="success">+2.54%</Text_1.default>
                    </material_1.Box>
                  </material_1.ListItem>
                  <material_1.ListItem disableGutters>
                    <material_1.ListItemAvatar sx={{
            minWidth: '46px',
            display: 'flex',
            alignItems: 'center'
        }}>
                      <img alt="XRP" src="/static/images/placeholders/logo/ripple.png"/>
                    </material_1.ListItemAvatar>
                    <material_1.ListItemText primary="XRP" primaryTypographyProps={{ variant: 'h5', noWrap: true }} secondary="Ripple" secondaryTypographyProps={{
            variant: 'subtitle2',
            noWrap: true
        }}/>
                    <material_1.Box>
                      <material_1.Typography align="right" variant="h4" noWrap>
                        10%
                      </material_1.Typography>
                      <Text_1.default color="error">-1.22%</Text_1.default>
                    </material_1.Box>
                  </material_1.ListItem>
                  <material_1.ListItem disableGutters>
                    <material_1.ListItemAvatar sx={{
            minWidth: '46px',
            display: 'flex',
            alignItems: 'center'
        }}>
                      <img alt="ADA" src="/static/images/placeholders/logo/cardano.png"/>
                    </material_1.ListItemAvatar>
                    <material_1.ListItemText primary="ADA" primaryTypographyProps={{ variant: 'h5', noWrap: true }} secondary="Cardano" secondaryTypographyProps={{
            variant: 'subtitle2',
            noWrap: true
        }}/>
                    <material_1.Box>
                      <material_1.Typography align="right" variant="h4" noWrap>
                        40%
                      </material_1.Typography>
                      <Text_1.default color="success">+10.50%</Text_1.default>
                    </material_1.Box>
                  </material_1.ListItem>
                  <material_1.ListItem disableGutters>
                    <material_1.ListItemAvatar sx={{
            minWidth: '46px',
            display: 'flex',
            alignItems: 'center'
        }}>
                      <img alt="ETH" src="/static/images/placeholders/logo/ethereum.png"/>
                    </material_1.ListItemAvatar>
                    <material_1.ListItemText primary="ETH" primaryTypographyProps={{ variant: 'h5', noWrap: true }} secondary="Ethereum" secondaryTypographyProps={{
            variant: 'subtitle2',
            noWrap: true
        }}/>
                    <material_1.Box>
                      <material_1.Typography align="right" variant="h4" noWrap>
                        30%
                      </material_1.Typography>
                      <Text_1.default color="error">-12.38%</Text_1.default>
                    </material_1.Box>
                  </material_1.ListItem>
                </material_1.List>
              </material_1.Grid>
            </material_1.Grid>
          </material_1.Box>
        </material_1.Grid>
      </material_1.Grid>
    </material_1.Card>);
}
exports.default = AccountBalance;
//# sourceMappingURL=AccountBalance.js.map
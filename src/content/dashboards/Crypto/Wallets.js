"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const AddTwoTone_1 = __importDefault(require("@mui/icons-material/AddTwoTone"));
const AvatarWrapper = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
        background: transparent;
        margin-left: -${theme.spacing(0.5)};
        margin-bottom: ${theme.spacing(1)};
        margin-top: ${theme.spacing(2)};
`);
const AvatarAddWrapper = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`);
const CardAddAction = (0, styles_1.styled)(material_1.Card)(({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`);
function Wallets() {
    return (<>
      <material_1.Box display="flex" alignItems="center" justifyContent="space-between" sx={{ pb: 3 }}>
        <material_1.Typography variant="h3">Wallets</material_1.Typography>
        <material_1.Button size="small" variant="outlined" startIcon={<AddTwoTone_1.default fontSize="small"/>}>
          Add new wallet
        </material_1.Button>
      </material_1.Box>
      <material_1.Grid container spacing={3}>
        <material_1.Grid xs={12} sm={6} md={3} item>
          <material_1.Card sx={{ px: 1 }}>
            <material_1.CardContent>
              <AvatarWrapper>
                <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png"/>
              </AvatarWrapper>
              <material_1.Typography variant="h5" noWrap>
                Bitcoin
              </material_1.Typography>
              <material_1.Typography variant="subtitle1" noWrap>
                BTC
              </material_1.Typography>
              <material_1.Box sx={{ pt: 3 }}>
                <material_1.Typography variant="h3" gutterBottom noWrap>
                  $3,586.22
                </material_1.Typography>
                <material_1.Typography variant="subtitle2" noWrap>
                  1.25843 BTC
                </material_1.Typography>
              </material_1.Box>
            </material_1.CardContent>
          </material_1.Card>
        </material_1.Grid>
        <material_1.Grid xs={12} sm={6} md={3} item>
          <material_1.Card sx={{ px: 1 }}>
            <material_1.CardContent>
              <AvatarWrapper>
                <img alt="Ripple" src="/static/images/placeholders/logo/ripple.png"/>
              </AvatarWrapper>
              <material_1.Typography variant="h5" noWrap>
                Ripple
              </material_1.Typography>
              <material_1.Typography variant="subtitle1" noWrap>
                XRP
              </material_1.Typography>
              <material_1.Box sx={{ pt: 3 }}>
                <material_1.Typography variant="h3" gutterBottom noWrap>
                  $586.83
                </material_1.Typography>
                <material_1.Typography variant="subtitle2" noWrap>
                  5,783 XRP
                </material_1.Typography>
              </material_1.Box>
            </material_1.CardContent>
          </material_1.Card>
        </material_1.Grid>
        <material_1.Grid xs={12} sm={6} md={3} item>
          <material_1.Card sx={{ px: 1 }}>
            <material_1.CardContent>
              <AvatarWrapper>
                <img alt="Cardano" src="/static/images/placeholders/logo/cardano.png"/>
              </AvatarWrapper>
              <material_1.Typography variant="h5" noWrap>
                Cardano
              </material_1.Typography>
              <material_1.Typography variant="subtitle1" noWrap>
                ADA
              </material_1.Typography>
              <material_1.Box sx={{ pt: 3 }}>
                <material_1.Typography variant="h3" gutterBottom noWrap>
                  $54,985.00
                </material_1.Typography>
                <material_1.Typography variant="subtitle2" noWrap>
                  34,985 ADA
                </material_1.Typography>
              </material_1.Box>
            </material_1.CardContent>
          </material_1.Card>
        </material_1.Grid>
        <material_1.Grid xs={12} sm={6} md={3} item>
          <material_1.Tooltip arrow title="Click to add a new wallet">
            <CardAddAction>
              <material_1.CardActionArea sx={{ px: 1 }}>
                <material_1.CardContent>
                  <AvatarAddWrapper>
                    <AddTwoTone_1.default fontSize="large"/>
                  </AvatarAddWrapper>
                </material_1.CardContent>
              </material_1.CardActionArea>
            </CardAddAction>
          </material_1.Tooltip>
        </material_1.Grid>
      </material_1.Grid>
    </>);
}
exports.default = Wallets;
//# sourceMappingURL=Wallets.js.map
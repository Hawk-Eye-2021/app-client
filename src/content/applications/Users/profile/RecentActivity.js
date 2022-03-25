"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const ShoppingBagTwoTone_1 = __importDefault(require("@mui/icons-material/ShoppingBagTwoTone"));
const FavoriteTwoTone_1 = __importDefault(require("@mui/icons-material/FavoriteTwoTone"));
const StarTwoTone_1 = __importDefault(require("@mui/icons-material/StarTwoTone"));
const AvatarPrimary = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
`);
function RecentActivity() {
    const theme = (0, material_1.useTheme)();
    return (<material_1.Card>
      <material_1.CardHeader title="Recent Activity"/>
      <material_1.Divider />
      <material_1.Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <ShoppingBagTwoTone_1.default />
        </AvatarPrimary>
        <material_1.Box pl={2} flex={1}>
          <material_1.Typography variant="h3">Orders</material_1.Typography>

          <material_1.Box pt={2} display="flex">
            <material_1.Box pr={8}>
              <material_1.Typography gutterBottom variant="caption" sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
                Total
              </material_1.Typography>
              <material_1.Typography variant="h2">485</material_1.Typography>
            </material_1.Box>
            <material_1.Box>
              <material_1.Typography gutterBottom variant="caption" sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
                Failed
              </material_1.Typography>
              <material_1.Typography variant="h2">8</material_1.Typography>
            </material_1.Box>
          </material_1.Box>
        </material_1.Box>
      </material_1.Box>
      <material_1.Divider />
      <material_1.Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <FavoriteTwoTone_1.default />
        </AvatarPrimary>
        <material_1.Box pl={2} flex={1}>
          <material_1.Typography variant="h3">Favourites</material_1.Typography>

          <material_1.Box pt={2} display="flex">
            <material_1.Box pr={8}>
              <material_1.Typography gutterBottom variant="caption" sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
                Products
              </material_1.Typography>
              <material_1.Typography variant="h2">64</material_1.Typography>
            </material_1.Box>
            <material_1.Box>
              <material_1.Typography gutterBottom variant="caption" sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
                Lists
              </material_1.Typography>
              <material_1.Typography variant="h2">15</material_1.Typography>
            </material_1.Box>
          </material_1.Box>
        </material_1.Box>
      </material_1.Box>
      <material_1.Divider />
      <material_1.Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <StarTwoTone_1.default />
        </AvatarPrimary>
        <material_1.Box pl={2} flex={1}>
          <material_1.Typography variant="h3">Reviews</material_1.Typography>

          <material_1.Box pt={2} display="flex">
            <material_1.Box pr={8}>
              <material_1.Typography gutterBottom variant="caption" sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
                Total
              </material_1.Typography>
              <material_1.Typography variant="h2">654</material_1.Typography>
            </material_1.Box>
            <material_1.Box>
              <material_1.Typography gutterBottom variant="caption" sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
                Useful
              </material_1.Typography>
              <material_1.Typography variant="h2">21</material_1.Typography>
            </material_1.Box>
          </material_1.Box>
        </material_1.Box>
      </material_1.Box>
    </material_1.Card>);
}
exports.default = RecentActivity;
//# sourceMappingURL=RecentActivity.js.map
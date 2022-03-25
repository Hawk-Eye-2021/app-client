"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_helmet_async_1 = require("react-helmet-async");
const styles_1 = require("@mui/material/styles");
const LogoSign_1 = __importDefault(require("src/components/LogoSign"));
const Hero_1 = __importDefault(require("./Hero"));
const OverviewWrapper = (0, styles_1.styled)(material_1.Box)(() => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`);
function Overview() {
    return (<OverviewWrapper>
      <react_helmet_async_1.Helmet>
        <title>Tokyo Free White React Admin Dashboard</title>
      </react_helmet_async_1.Helmet>
      <material_1.Container maxWidth="lg">
        <material_1.Box display="flex" justifyContent="center" py={5} alignItems="center">
          <LogoSign_1.default />
        </material_1.Box>
        <material_1.Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero_1.default />
        </material_1.Card>
      </material_1.Container>
    </OverviewWrapper>);
}
exports.default = Overview;
//# sourceMappingURL=index.js.map
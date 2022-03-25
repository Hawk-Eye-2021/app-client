"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageHeader_1 = __importDefault(require("./PageHeader"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Footer_1 = __importDefault(require("src/components/Footer"));
const AccountBalance_1 = __importDefault(require("./AccountBalance"));
const Wallets_1 = __importDefault(require("./Wallets"));
const AccountSecurity_1 = __importDefault(require("./AccountSecurity"));
const WatchList_1 = __importDefault(require("./WatchList"));
function DashboardCrypto() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Crypto Dashboard</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageHeader_1.default />
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <AccountBalance_1.default />
          </material_1.Grid>
          <material_1.Grid item lg={8} xs={12}>
            <Wallets_1.default />
          </material_1.Grid>
          <material_1.Grid item lg={4} xs={12}>
            <AccountSecurity_1.default />
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <WatchList_1.default />
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = DashboardCrypto;
//# sourceMappingURL=index.js.map
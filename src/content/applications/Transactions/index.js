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
const RecentOrders_1 = __importDefault(require("./RecentOrders"));
function ApplicationsTransactions() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Transactions - Applications</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageHeader_1.default />
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <RecentOrders_1.default />
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = ApplicationsTransactions;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_helmet_async_1 = require("react-helmet-async");
const PageHeader_1 = __importDefault(require("./PageHeader"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Footer_1 = __importDefault(require("src/components/Footer"));
const styles_1 = require("@mui/material/styles");
const ActivityTab_1 = __importDefault(require("./ActivityTab"));
const EditProfileTab_1 = __importDefault(require("./EditProfileTab"));
const NotificationsTab_1 = __importDefault(require("./NotificationsTab"));
const SecurityTab_1 = __importDefault(require("./SecurityTab"));
const TabsWrapper = (0, styles_1.styled)(material_1.Tabs)(() => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`);
function ManagementUserSettings() {
    const [currentTab, setCurrentTab] = (0, react_1.useState)('activity');
    const tabs = [
        { value: 'activity', label: 'Activity' },
        { value: 'edit_profile', label: 'Edit Profile' },
        { value: 'notifications', label: 'Notifications' },
        { value: 'security', label: 'Passwords/Security' }
    ];
    const handleTabsChange = (event, value) => {
        setCurrentTab(value);
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>User Settings - Applications</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageHeader_1.default />
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <TabsWrapper onChange={handleTabsChange} value={currentTab} variant="scrollable" scrollButtons="auto" textColor="primary" indicatorColor="primary">
              {tabs.map((tab) => (<material_1.Tab key={tab.value} label={tab.label} value={tab.value}/>))}
            </TabsWrapper>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            {currentTab === 'activity' && <ActivityTab_1.default />}
            {currentTab === 'edit_profile' && <EditProfileTab_1.default />}
            {currentTab === 'notifications' && <NotificationsTab_1.default />}
            {currentTab === 'security' && <SecurityTab_1.default />}
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = ManagementUserSettings;
//# sourceMappingURL=index.js.map
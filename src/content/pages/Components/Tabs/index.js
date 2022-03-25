"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const react_1 = require("react");
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const Tab_1 = __importDefault(require("@mui/material/Tab"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Footer_1 = __importDefault(require("src/components/Footer"));
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (<Box_1.default sx={{ p: 3 }}>
          <Typography_1.default>{children}</Typography_1.default>
        </Box_1.default>)}
    </div>);
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function TabsDemo() {
    const [value, setValue] = (0, react_1.useState)(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Tabs - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Tabs" subHeading="Tabs make it easy to explore and switch between different views." docs="https://material-ui.com/components/tabs/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Basic Example"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Box_1.default sx={{ width: '100%' }}>
                  <Tabs_1.default variant="scrollable" scrollButtons="auto" textColor="primary" indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab_1.default label="Item One" {...a11yProps(0)}/>
                    <Tab_1.default label="Item Two" {...a11yProps(1)}/>
                    <Tab_1.default label="Item Three" {...a11yProps(2)}/>
                  </Tabs_1.default>
                  <TabPanel value={value} index={0}>
                    Item One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </Box_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = TabsDemo;
//# sourceMappingURL=index.js.map
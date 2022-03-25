"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_helmet_async_1 = require("react-helmet-async");
const LogoSign_1 = __importDefault(require("src/components/LogoSign"));
const styles_1 = require("@mui/material/styles");
const Facebook_1 = __importDefault(require("@mui/icons-material/Facebook"));
const Twitter_1 = __importDefault(require("@mui/icons-material/Twitter"));
const Instagram_1 = __importDefault(require("@mui/icons-material/Instagram"));
const MainContent = (0, styles_1.styled)(material_1.Box)(() => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`);
function StatusMaintenance() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Status - Maintenance</title>
      </react_helmet_async_1.Helmet>
      <MainContent>
        <material_1.Container maxWidth="md">
          <LogoSign_1.default />
          <material_1.Box textAlign="center">
            <material_1.Container maxWidth="xs">
              <material_1.Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                The site is currently down for maintenance
              </material_1.Typography>
              <material_1.Typography variant="h3" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
                We apologize for any inconveniences caused
              </material_1.Typography>
            </material_1.Container>
            <img alt="Maintenance" height={250} src="/static/images/status/maintenance.svg"/>
          </material_1.Box>
          <material_1.Divider sx={{ my: 4 }}/>
          <material_1.Box display="flex" alignItems="center" justifyContent="space-between">
            <material_1.Box>
              <material_1.Typography component="span" variant="subtitle1">
                Phone:{' '}
              </material_1.Typography>
              <material_1.Typography component="span" variant="subtitle1" color="text.primary">
                + 00 1 888 555 444
              </material_1.Typography>
            </material_1.Box>
            <material_1.Box>
              <material_1.Tooltip arrow placement="top" title="Facebook">
                <material_1.IconButton color="primary">
                  <Facebook_1.default />
                </material_1.IconButton>
              </material_1.Tooltip>
              <material_1.Tooltip arrow placement="top" title="Twitter">
                <material_1.IconButton color="primary">
                  <Twitter_1.default />
                </material_1.IconButton>
              </material_1.Tooltip>
              <material_1.Tooltip arrow placement="top" title="Instagram">
                <material_1.IconButton color="primary">
                  <Instagram_1.default />
                </material_1.IconButton>
              </material_1.Tooltip>
            </material_1.Box>
          </material_1.Box>
        </material_1.Container>
      </MainContent>
    </>);
}
exports.default = StatusMaintenance;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_custom_scrollbars_2_1 = require("react-custom-scrollbars-2");
const SidebarContext_1 = require("src/contexts/SidebarContext");
const Logo_1 = __importDefault(require("src/components/Logo"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const SidebarMenu_1 = __importDefault(require("./SidebarMenu"));
const SidebarWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            position: fixed;
            z-index: 10;
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
        }
`);
const TopSection = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        display: flex;
        height: 88px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
        border-bottom: ${theme.sidebar.dividerBg} solid 1px;
`);
function Sidebar() {
    const { sidebarToggle, toggleSidebar } = (0, react_1.useContext)(SidebarContext_1.SidebarContext);
    const closeSidebar = () => toggleSidebar();
    return (<>
      <material_1.Hidden lgDown>
        <SidebarWrapper>
          <react_custom_scrollbars_2_1.Scrollbars autoHide>
            <TopSection>
              <Logo_1.default />
            </TopSection>
            <SidebarMenu_1.default />
          </react_custom_scrollbars_2_1.Scrollbars>
        </SidebarWrapper>
      </material_1.Hidden>
      <material_1.Hidden lgUp>
        <material_1.Drawer anchor="left" open={sidebarToggle} onClose={closeSidebar} variant="temporary" elevation={9}>
          <SidebarWrapper>
            <react_custom_scrollbars_2_1.Scrollbars autoHide>
              <TopSection>
                <Logo_1.default />
              </TopSection>
              <SidebarMenu_1.default />
            </react_custom_scrollbars_2_1.Scrollbars>
          </SidebarWrapper>
        </material_1.Drawer>
      </material_1.Hidden>
    </>);
}
exports.default = Sidebar;
//# sourceMappingURL=index.js.map
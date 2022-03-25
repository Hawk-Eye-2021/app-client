"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const MenuTwoTone_1 = __importDefault(require("@mui/icons-material/MenuTwoTone"));
const SidebarContext_1 = require("src/contexts/SidebarContext");
const CloseTwoTone_1 = __importDefault(require("@mui/icons-material/CloseTwoTone"));
const Userbox_1 = __importDefault(require("./Userbox"));
const Logo_1 = __importDefault(require("src/components/Logo"));
const HeaderWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: ${theme.header.background};
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`);
function Header() {
    const { sidebarToggle, toggleSidebar } = (0, react_1.useContext)(SidebarContext_1.SidebarContext);
    return (<HeaderWrapper display="flex" alignItems="center">
      <material_1.Box display="flex" alignItems="center">
        <material_1.Hidden lgUp>
          <Logo_1.default />
        </material_1.Hidden>
      </material_1.Box>
      <material_1.Box display="flex" alignItems="center">
        <Userbox_1.default />
        <material_1.Hidden lgUp>
          <material_1.Tooltip arrow title="Toggle Menu">
            <material_1.IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoTone_1.default /> : <CloseTwoTone_1.default />}
            </material_1.IconButton>
          </material_1.Tooltip>
        </material_1.Hidden>
      </material_1.Box>
    </HeaderWrapper>);
}
exports.default = Header;
//# sourceMappingURL=index.js.map
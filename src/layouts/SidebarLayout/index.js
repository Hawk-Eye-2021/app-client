"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const Sidebar_1 = __importDefault(require("./Sidebar"));
const Header_1 = __importDefault(require("./Header"));
const MainWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`);
const MainContent = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`);
const SidebarLayout = () => {
    return (<>
      <Sidebar_1.default />
      <MainWrapper>
        <Header_1.default />
        <MainContent>
          <react_router_dom_1.Outlet />
        </MainContent>
      </MainWrapper>
    </>);
};
exports.default = SidebarLayout;
//# sourceMappingURL=index.js.map
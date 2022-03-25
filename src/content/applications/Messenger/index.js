"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_helmet_async_1 = require("react-helmet-async");
const TopBarContent_1 = __importDefault(require("./TopBarContent"));
const BottomBarContent_1 = __importDefault(require("./BottomBarContent"));
const SidebarContent_1 = __importDefault(require("./SidebarContent"));
const ChatContent_1 = __importDefault(require("./ChatContent"));
const react_custom_scrollbars_2_1 = require("react-custom-scrollbars-2");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const RootWrapper = (0, styles_1.styled)(material_1.Box)(() => `
       height: 100%;
       display: flex;
`);
const Sidebar = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        width: 300px;
        background: ${theme.colors.alpha.white[100]};
        border-right: ${theme.colors.alpha.black[10]} solid 1px;
`);
const ChatWindow = (0, styles_1.styled)(material_1.Box)(() => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
`);
const ChatTopBar = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        background: ${theme.colors.alpha.white[100]};
        border-bottom: ${theme.colors.alpha.black[10]} solid 1px;
        padding: ${theme.spacing(3)};
`);
const ChatMain = (0, styles_1.styled)(material_1.Box)(() => `
        flex: 1;
`);
const ChatBottomBar = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        padding: ${theme.spacing(3)};
`);
function ApplicationsMessenger() {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            ref.current.scrollToBottom();
        }
    });
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Messenger - Applications</title>
      </react_helmet_async_1.Helmet>
      <RootWrapper>
        <Sidebar>
          <react_custom_scrollbars_2_1.Scrollbars autoHide>
            <SidebarContent_1.default />
          </react_custom_scrollbars_2_1.Scrollbars>
        </Sidebar>
        <ChatWindow>
          <ChatTopBar>
            <TopBarContent_1.default />
          </ChatTopBar>
          <ChatMain>
            <react_custom_scrollbars_2_1.Scrollbars ref={ref} autoHide>
              <ChatContent_1.default />
            </react_custom_scrollbars_2_1.Scrollbars>
          </ChatMain>
          <ChatBottomBar>
            <BottomBarContent_1.default />
          </ChatBottomBar>
        </ChatWindow>
      </RootWrapper>
    </>);
}
exports.default = ApplicationsMessenger;
//# sourceMappingURL=index.js.map
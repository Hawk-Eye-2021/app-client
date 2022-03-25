"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarProvider = exports.SidebarContext = void 0;
const react_1 = require("react");
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.SidebarContext = (0, react_1.createContext)({});
const SidebarProvider = ({ children }) => {
    const [sidebarToggle, setSidebarToggle] = (0, react_1.useState)(false);
    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    };
    return (<exports.SidebarContext.Provider value={{ sidebarToggle, toggleSidebar }}>
      {children}
    </exports.SidebarContext.Provider>);
};
exports.SidebarProvider = SidebarProvider;
//# sourceMappingURL=SidebarContext.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const react_dom_1 = __importDefault(require("react-dom"));
require("src/utils/chart");
const serviceWorker = __importStar(require("./serviceWorker"));
const react_helmet_async_1 = require("react-helmet-async");
const react_router_dom_1 = require("react-router-dom");
require("nprogress/nprogress.css");
const SidebarContext_1 = require("./contexts/SidebarContext");
react_dom_1.default.render(<react_helmet_async_1.HelmetProvider>
    <SidebarContext_1.SidebarProvider>
      <react_router_dom_1.BrowserRouter>
        <App_1.default />
      </react_router_dom_1.BrowserRouter>
    </SidebarContext_1.SidebarProvider>
  </react_helmet_async_1.HelmetProvider>, document.getElementById('root'));
serviceWorker.unregister();
//# sourceMappingURL=index.js.map
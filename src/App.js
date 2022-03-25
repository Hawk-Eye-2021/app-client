"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const router_1 = __importDefault(require("./router"));
const AdapterDateFns_1 = __importDefault(require("@mui/lab/AdapterDateFns"));
const LocalizationProvider_1 = __importDefault(require("@mui/lab/LocalizationProvider"));
const notistack_1 = require("notistack");
const ThemeProvider_1 = __importDefault(require("./theme/ThemeProvider"));
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store/store"));
const SnackbarUtils_1 = require("./utils/SnackbarUtils");
const App = () => {
    const content = (0, react_router_dom_1.useRoutes)(router_1.default);
    return (<react_redux_1.Provider store={store_1.default}>
            <notistack_1.SnackbarProvider maxSnack={4} autoHideDuration={3000} anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}>
                <SnackbarUtils_1.SnackbarUtilsConfigurator />
                <ThemeProvider_1.default>
                    <LocalizationProvider_1.default dateAdapter={AdapterDateFns_1.default}>
                        <material_1.CssBaseline />
                        {content}
                    </LocalizationProvider_1.default>
                </ThemeProvider_1.default>
            </notistack_1.SnackbarProvider>
        </react_redux_1.Provider>);
};
exports.default = App;
//# sourceMappingURL=App.js.map
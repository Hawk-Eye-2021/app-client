"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const user_1 = require("./slice/user");
const theme_1 = require("./slice/theme");
const react_redux_1 = require("react-redux");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        user: user_1.user.reducer,
        theme: theme_1.theme.reducer,
    }
});
exports.useAppSelector = react_redux_1.useSelector;
exports.default = store;
//# sourceMappingURL=store.js.map
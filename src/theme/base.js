"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeCreator = void 0;
const PureLightTheme_1 = require("./schemes/PureLightTheme");
function themeCreator(theme) {
    return themeMap[theme];
}
exports.themeCreator = themeCreator;
const themeMap = {
    PureLightTheme: PureLightTheme_1.PureLightTheme
};
//# sourceMappingURL=base.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const Search_1 = __importDefault(require("./Search"));
const Notifications_1 = __importDefault(require("./Notifications"));
function HeaderButtons() {
    return (<material_1.Box sx={{ mr: 1 }}>
      <Search_1.default />
      <material_1.Box sx={{ mx: .5 }} component="span">
        <Notifications_1.default />
      </material_1.Box>
    </material_1.Box>);
}
exports.default = HeaderButtons;
//# sourceMappingURL=index.js.map
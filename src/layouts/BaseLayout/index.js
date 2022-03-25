"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_router_dom_1 = require("react-router-dom");
const BaseLayout = ({ children }) => {
    return <>{children || <react_router_dom_1.Outlet />}</>;
};
BaseLayout.propTypes = {
    children: prop_types_1.default.node
};
exports.default = BaseLayout;
//# sourceMappingURL=index.js.map
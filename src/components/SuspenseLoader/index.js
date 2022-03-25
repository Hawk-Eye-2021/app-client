"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const nprogress_1 = __importDefault(require("nprogress"));
const material_1 = require("@mui/material");
function SuspenseLoader() {
    (0, react_1.useEffect)(() => {
        nprogress_1.default.start();
        return () => {
            nprogress_1.default.done();
        };
    }, []);
    return (<material_1.Box sx={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%' }} display="flex" alignItems="center" justifyContent="center">
      <material_1.CircularProgress size={64} disableShrink thickness={3}/>
    </material_1.Box>);
}
exports.default = SuspenseLoader;
//# sourceMappingURL=index.js.map
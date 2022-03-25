"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const prop_types_1 = __importDefault(require("prop-types"));
function MyDialog({ open, onClose, title, children, width, actions }) {
    return (<Dialog_1.default onClose={onClose} fullWidth maxWidth={width} open={open}>
            <DialogTitle_1.default>
                {title}
            </DialogTitle_1.default>
            <DialogContent_1.default style={{ padding: "20px 40px" }}>
                {children}
            </DialogContent_1.default>
            <DialogActions_1.default>
                {actions}
            </DialogActions_1.default>
        </Dialog_1.default>);
}
MyDialog.propTypes = {
    open: prop_types_1.default.bool.isRequired,
    onClose: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string.isRequired,
    width: prop_types_1.default.oneOf(['xm', 'sm', "md", "lg", "xl"]).isRequired,
    actions: prop_types_1.default.node
};
exports.default = MyDialog;
//# sourceMappingURL=index.js.map
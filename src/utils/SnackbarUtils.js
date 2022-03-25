"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackbarUtilsConfigurator = void 0;
const notistack_1 = require("notistack");
let useSnackbarRef;
const SnackbarUtilsConfigurator = () => {
    useSnackbarRef = (0, notistack_1.useSnackbar)();
    return null;
};
exports.SnackbarUtilsConfigurator = SnackbarUtilsConfigurator;
const SnackbarUtils = {
    success(msg) {
        this.toast(msg, 'success');
    },
    warning(msg) {
        this.toast(msg, 'warning');
    },
    info(msg) {
        this.toast(msg, 'info');
    },
    error(msg) {
        this.toast(msg, 'error');
    },
    toast(msg, variant = 'default') {
        useSnackbarRef.enqueueSnackbar(msg, { variant });
    }
};
exports.default = SnackbarUtils;
//# sourceMappingURL=SnackbarUtils.js.map
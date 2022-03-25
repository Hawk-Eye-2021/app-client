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
const Dialog_1 = __importDefault(require("../../../../components/Dialog"));
const ThemeAutocomplete_1 = __importDefault(require("./ThemeAutocomplete"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const react_redux_1 = require("react-redux");
const React = __importStar(require("react"));
const theme_1 = require("../../../../store/slice/theme");
function AddThemeDialog({ open, onClose }) {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [value, setValue] = React.useState(null);
    const dispatch = (0, react_redux_1.useDispatch)();
    const addThemeForUser = () => {
        dispatch((0, theme_1.postTheme)(user.id, value, onClose));
    };
    const onAutocompleteChange = (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                name: newValue,
            });
        }
        else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
                name: newValue.inputValue,
            });
        }
        else {
            setValue(newValue);
        }
    };
    return (<Dialog_1.default title={"Agregar Tema"} onClose={onClose} open={open} width={"sm"} actions={<>
                          <Button_1.default onClick={onClose} color={"secondary"}>
                              Cancelar
                          </Button_1.default>
                          <Button_1.default onClick={addThemeForUser} disabled={!value}>
                              Agregar
                          </Button_1.default>
                      </>}>
            <ThemeAutocomplete_1.default onChange={onAutocompleteChange} value={value}/>
        </Dialog_1.default>);
}
exports.default = AddThemeDialog;
//# sourceMappingURL=AddThemeDialog.js.map
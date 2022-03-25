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
const React = __importStar(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const Autocomplete_1 = __importStar(require("@mui/material/Autocomplete"));
const react_1 = require("react");
const http_1 = __importDefault(require("../../../../http/http"));
const filter = (0, Autocomplete_1.createFilterOptions)();
function ThemeAutocomplete({ onChange, value }) {
    const [themes, setThemes] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        http_1.default.get(`/themes`)
            .then(res => {
            setThemes(res.data);
            setLoading(false);
        });
    }, []);
    return (<Autocomplete_1.default value={value} loading={loading} onChange={onChange} filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option.name);
            if (inputValue !== '' && !isExisting) {
                filtered.push({
                    inputValue,
                    name: `Agregar "${inputValue}"`,
                });
            }
            return filtered;
        }} selectOnFocus clearOnBlur handleHomeEndKeys options={themes} getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
                return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
                return option.inputValue;
            }
            // Regular option
            return option.name;
        }} renderOption={(props, option) => <li {...props}>{option.name}</li>} sx={{ width: 300 }} freeSolo renderInput={(params) => (<TextField_1.default {...params} label="Buscar Tema"/>)}/>);
}
exports.default = ThemeAutocomplete;
//# sourceMappingURL=ThemeAutocomplete.js.map
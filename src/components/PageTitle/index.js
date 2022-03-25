"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const AddTwoTone_1 = __importDefault(require("@mui/icons-material/AddTwoTone"));
const material_1 = require("@mui/material");
const PageTitle = ({ heading = '', subHeading = '', docs = '', ...rest }) => {
    return (<material_1.Grid container justifyContent="space-between" alignItems="center" {...rest}>
            <material_1.Grid item>
                <material_1.Typography variant="h3" component="h3" gutterBottom>
                    {heading}
                </material_1.Typography>
                <material_1.Typography variant="subtitle2">
                    {subHeading}
                </material_1.Typography>
            </material_1.Grid>
            <material_1.Grid item>
                <material_1.Button href={docs} target="_blank" rel="noopener noreferrer" sx={{ mt: { xs: 2, md: 0 } }} variant="contained" startIcon={<AddTwoTone_1.default fontSize="small"/>}>
                    {heading} Documentation
                </material_1.Button>
            </material_1.Grid>
        </material_1.Grid>);
};
PageTitle.propTypes = {
    heading: prop_types_1.default.string,
    subHeading: prop_types_1.default.string,
    docs: prop_types_1.default.string,
};
exports.default = PageTitle;
//# sourceMappingURL=index.js.map
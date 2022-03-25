"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const prop_types_1 = __importDefault(require("prop-types"));
const styles_1 = require("@mui/material/styles");
const material_2 = require("@mui/material");
const PageTitle = (0, styles_1.styled)(material_2.Box)(({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`);
const PageTitleWrapper = ({ children }) => {
    return (<>
      <PageTitle>
        <material_1.Container maxWidth="lg">
          {children}
        </material_1.Container>
      </PageTitle>
    </>);
};
PageTitleWrapper.propTypes = {
    children: prop_types_1.default.node.isRequired
};
exports.default = PageTitleWrapper;
//# sourceMappingURL=index.js.map
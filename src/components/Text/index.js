"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const styles_1 = require("@mui/material/styles");
const TextWrapper = (0, styles_1.styled)('span')(({ theme }) => `
      
      &.MuiText {

        &-black {
          color: ${theme.palette.common.black}
        }

        &-primary {
          color: ${theme.palette.primary.main}
        }
        
        &-secondary {
          color: ${theme.palette.secondary.main}
        }
        
        &-success {
          color: ${theme.palette.success.main}
        }
        
        &-warning {
          color: ${theme.palette.warning.main}
        }
              
        &-error {
          color: ${theme.palette.error.main}
        }
        
        &-info {
          color: ${theme.palette.info.main}
        }
      }
`);
const Text = ({ className = '', color = 'secondary', children, ...rest }) => {
    return (<TextWrapper className={'MuiText-' + color} {...rest}>
      {children}
    </TextWrapper>);
};
Text.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf([
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'info',
        'black'
    ])
};
exports.default = Text;
//# sourceMappingURL=index.js.map
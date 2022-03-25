"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/material/styles");
const LogoWrapper = (0, styles_1.styled)(react_router_dom_1.Link)(({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`);
const LogoSignWrapper = (0, styles_1.styled)(material_1.Box)(() => `
        width: 52px;
        height: 38px;
`);
const LogoSign = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        background: ${theme.general.reactFrameworkColor};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

        &:after, 
        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -1px;
            right: -20px;
            transform: rotate(0deg);
            border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
            background: ${theme.palette.primary.main};
            right: auto;
            left: 0;
            top: 20px;
        }

        &:after {
            background: ${theme.palette.secondary.main};
        }
`);
const LogoSignInner = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`);
function Logo() {
    return (<material_1.Tooltip title="Tokyo Free White React Admin Dashboard" arrow>
      <LogoWrapper to="/overview">
        <LogoSignWrapper>
          <LogoSign>
            <LogoSignInner />
          </LogoSign>
        </LogoSignWrapper>
      </LogoWrapper>
    </material_1.Tooltip>);
}
exports.default = Logo;
//# sourceMappingURL=index.js.map
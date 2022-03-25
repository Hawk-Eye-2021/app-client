"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const clsx_1 = __importDefault(require("clsx"));
const SidebarContext_1 = require("src/contexts/SidebarContext");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const ExpandLessTwoTone_1 = __importDefault(require("@mui/icons-material/ExpandLessTwoTone"));
const ExpandMoreTwoTone_1 = __importDefault(require("@mui/icons-material/ExpandMoreTwoTone"));
const SidebarMenuItem = ({ children, link, icon: Icon, badge, open: openParent, active, name, ...rest }) => {
    const [menuToggle, setMenuToggle] = (0, react_1.useState)(openParent);
    const { toggleSidebar } = (0, react_1.useContext)(SidebarContext_1.SidebarContext);
    const toggleMenu = () => {
        setMenuToggle((Open) => !Open);
    };
    if (children) {
        return (<material_1.ListItem component="div" className="Mui-children" key={name} {...rest}>
        <material_1.Button className={(0, clsx_1.default)({ 'Mui-active': menuToggle })} startIcon={Icon && <Icon />} endIcon={menuToggle ? <ExpandLessTwoTone_1.default /> : <ExpandMoreTwoTone_1.default />} onClick={toggleMenu}>
          {name}
        </material_1.Button>
        <material_1.Collapse in={menuToggle}>{children}</material_1.Collapse>
      </material_1.ListItem>);
    }
    return (<material_1.ListItem component="div" key={name} {...rest}>
      <material_1.Button activeClassName="Mui-active" component={react_router_dom_1.NavLink} onClick={toggleSidebar} to={link} startIcon={Icon && <Icon />}>
        {name}
        {badge && <material_1.Badge badgeContent={badge}/>}
      </material_1.Button>
    </material_1.ListItem>);
};
SidebarMenuItem.propTypes = {
    children: prop_types_1.default.node,
    active: prop_types_1.default.bool,
    link: prop_types_1.default.string,
    icon: prop_types_1.default.elementType,
    badge: prop_types_1.default.string,
    open: prop_types_1.default.bool,
    name: prop_types_1.default.string.isRequired
};
SidebarMenuItem.defaultProps = {
    open: false,
    active: false,
};
exports.default = SidebarMenuItem;
//# sourceMappingURL=item.js.map
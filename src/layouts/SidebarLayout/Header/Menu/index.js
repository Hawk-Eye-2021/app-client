"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/material/styles");
const ExpandMoreTwoTone_1 = __importDefault(require("@mui/icons-material/ExpandMoreTwoTone"));
const ListWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`);
function HeaderMenu() {
    const ref = (0, react_1.useRef)(null);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<>
      <ListWrapper>
        <material_1.List disablePadding component={material_1.Box} display="flex">
          <material_1.ListItem classes={{ root: 'MuiListItem-indicators' }} button component={react_router_dom_1.NavLink} to="/components/buttons">
            <material_1.ListItemText primaryTypographyProps={{ noWrap: true }} primary="Buttons"/>
          </material_1.ListItem>
          <material_1.ListItem classes={{ root: 'MuiListItem-indicators' }} button component={react_router_dom_1.NavLink} to="/components/forms">
            <material_1.ListItemText primaryTypographyProps={{ noWrap: true }} primary="Forms"/>
          </material_1.ListItem>
          <material_1.ListItem classes={{ root: 'MuiListItem-indicators' }} button ref={ref} onClick={handleOpen}>
            <material_1.ListItemText primaryTypographyProps={{ noWrap: true }} primary={<material_1.Box display="flex" alignItems="center">
                  Others
                  <material_1.Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoTone_1.default fontSize="small"/>
                  </material_1.Box>
                </material_1.Box>}/>
          </material_1.ListItem>
        </material_1.List>
      </ListWrapper>
      <material_1.Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <material_1.MenuItem sx={{ px: 3 }} component={react_router_dom_1.NavLink} to="/overview">
          Overview
        </material_1.MenuItem>
        <material_1.MenuItem sx={{ px: 3 }} component={react_router_dom_1.NavLink} to="/components/tabs">
          Tabs
        </material_1.MenuItem>
        <material_1.MenuItem sx={{ px: 3 }} component={react_router_dom_1.NavLink} to="/components/cards">
          Cards
        </material_1.MenuItem>
        <material_1.MenuItem sx={{ px: 3 }} component={react_router_dom_1.NavLink} to="/components/modals">
          Modals
        </material_1.MenuItem>
      </material_1.Menu>
    </>);
}
exports.default = HeaderMenu;
//# sourceMappingURL=index.js.map
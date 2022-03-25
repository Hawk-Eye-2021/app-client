"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const DeleteTwoTone_1 = __importDefault(require("@mui/icons-material/DeleteTwoTone"));
const MoreVertTwoTone_1 = __importDefault(require("@mui/icons-material/MoreVertTwoTone"));
const ButtonError = (0, styles_1.styled)(material_1.Button)(({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `);
function BulkActions() {
    const [onMenuOpen, menuOpen] = (0, react_1.useState)(false);
    const moreRef = (0, react_1.useRef)(null);
    const openMenu = () => {
        menuOpen(true);
    };
    const closeMenu = () => {
        menuOpen(false);
    };
    return (<>
      <material_1.Box display="flex" alignItems="center" justifyContent="space-between">
        <material_1.Box display="flex" alignItems="center">
          <material_1.Typography variant="h5" color="text.secondary">
            Bulk actions:
          </material_1.Typography>
          <ButtonError sx={{ ml: 1 }} startIcon={<DeleteTwoTone_1.default />} variant="contained">
            Delete
          </ButtonError>
        </material_1.Box>
        <material_1.IconButton color="primary" onClick={openMenu} ref={moreRef} sx={{ ml: 2, p: 1 }}>
          <MoreVertTwoTone_1.default />
        </material_1.IconButton>
      </material_1.Box>

      <material_1.Menu keepMounted anchorEl={moreRef.current} open={onMenuOpen} onClose={closeMenu} anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
        }} transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
        }}>
        <material_1.List sx={{ p: 1 }} component="nav">
          <material_1.ListItem button>
            <material_1.ListItemText primary="Bulk delete selected"/>
          </material_1.ListItem>
          <material_1.ListItem button>
            <material_1.ListItemText primary="Bulk edit selected"/>
          </material_1.ListItem>
        </material_1.List>
      </material_1.Menu>
    </>);
}
exports.default = BulkActions;
//# sourceMappingURL=BulkActions.js.map
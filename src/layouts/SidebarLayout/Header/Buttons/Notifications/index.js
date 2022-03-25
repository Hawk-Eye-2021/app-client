"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = require("react");
const NotificationsActiveTwoTone_1 = __importDefault(require("@mui/icons-material/NotificationsActiveTwoTone"));
const styles_1 = require("@mui/material/styles");
const date_fns_1 = require("date-fns");
const NotificationsBadge = (0, styles_1.styled)(material_1.Badge)(({ theme }) => `
    
    .MuiBadge-badge {
        background-color: ${(0, material_1.alpha)(theme.palette.error.main, 0.1)};
        color: ${theme.palette.error.main};
        min-width: 16px; 
        height: 16px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${(0, material_1.alpha)(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`);
function HeaderNotifications() {
    const ref = (0, react_1.useRef)(null);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<>
      <material_1.Tooltip arrow title="Notifications">
        <material_1.IconButton color="primary" ref={ref} onClick={handleOpen}>
          <NotificationsBadge badgeContent={1} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}>
            <NotificationsActiveTwoTone_1.default />
          </NotificationsBadge>
        </material_1.IconButton>
      </material_1.Tooltip>
      <material_1.Popover anchorEl={ref.current} onClose={handleClose} open={isOpen} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }} transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}>
        <material_1.Box sx={{ p: 2 }} display="flex" alignItems="center" justifyContent="space-between">
          <material_1.Typography variant="h5">Notifications</material_1.Typography>
        </material_1.Box>
        <material_1.Divider />
        <material_1.List sx={{ p: 0 }}>
          <material_1.ListItem sx={{ p: 2, minWidth: 350, display: { xs: 'block', sm: 'flex' } }}>
            <material_1.Box flex="1">
              <material_1.Box display="flex" justifyContent="space-between">
                <material_1.Typography sx={{ fontWeight: 'bold' }}>
                  Messaging Platform
                </material_1.Typography>
                <material_1.Typography variant="caption" sx={{ textTransform: 'none' }}>
                  {(0, date_fns_1.formatDistance)((0, date_fns_1.subDays)(new Date(), 3), new Date(), {
            addSuffix: true
        })}
                </material_1.Typography>
              </material_1.Box>
              <material_1.Typography component="span" variant="body2" color="text.secondary">
                {' '}
                new messages in your inbox
              </material_1.Typography>
            </material_1.Box>
          </material_1.ListItem>
        </material_1.List>
      </material_1.Popover>
    </>);
}
exports.default = HeaderNotifications;
//# sourceMappingURL=index.js.map
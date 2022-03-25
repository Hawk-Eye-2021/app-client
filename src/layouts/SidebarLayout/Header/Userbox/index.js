"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const ExpandMoreTwoTone_1 = __importDefault(require("@mui/icons-material/ExpandMoreTwoTone"));
const LockOpenTwoTone_1 = __importDefault(require("@mui/icons-material/LockOpenTwoTone"));
const react_redux_1 = require("react-redux");
const colors_1 = require("@mui/material/colors");
const UserBoxButton = (0, styles_1.styled)(material_1.Button)(({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`);
const MenuUserBox = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`);
const UserBoxText = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`);
const UserBoxLabel = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`);
function HeaderUserbox() {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const ref = (0, react_1.useRef)(null);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const avatarColor = colors_1.deepOrange[500];
    return (<>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <material_1.Avatar sx={{ bgcolor: avatarColor }}>
          {user.name.charAt(0)}
        </material_1.Avatar>
        <material_1.Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
          </UserBoxText>
        </material_1.Hidden>
        <material_1.Hidden smDown>
          <ExpandMoreTwoTone_1.default sx={{ ml: 1 }}/>
        </material_1.Hidden>
      </UserBoxButton>
      <material_1.Popover anchorEl={ref.current} onClose={handleClose} open={isOpen} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }} transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}>
        {/*<MenuUserBox sx={{ minWidth: 210 }} display="flex">*/}
        {/*  <Avatar sx={{ bgcolor: avatarColor }}>*/}
        {/*    {user.name.charAt(0)}*/}
        {/*  </Avatar>*/}
        {/*  <UserBoxText>*/}
        {/*    <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>*/}
        {/*  </UserBoxText>*/}
        {/*</MenuUserBox>*/}
        {/*<Divider sx={{ mb: 0 }} />*/}
        {/*<List sx={{ p: 1 }} component="nav">*/}
        {/*  <ListItem button to="/management/profile/details" component={NavLink}>*/}
        {/*    <AccountBoxTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="My Profile" />*/}
        {/*  </ListItem>*/}
        {/*  <ListItem*/}
        {/*    button*/}
        {/*    to="/dashboards/messenger"*/}
        {/*    component={NavLink}*/}
        {/*  >*/}
        {/*    <InboxTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="Messenger" />*/}
        {/*  </ListItem>*/}
        {/*  <ListItem*/}
        {/*    button*/}
        {/*    to="/management/profile/settings"*/}
        {/*    component={NavLink}*/}
        {/*  >*/}
        {/*    <AccountTreeTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="Account Settings" />*/}
        {/*  </ListItem>*/}
        {/*</List>*/}
        {/*<Divider />*/}
        <material_1.Box sx={{ m: 1 }}>
          <material_1.Button color="primary" fullWidth>
            <LockOpenTwoTone_1.default sx={{ mr: 1 }}/>
            Cerrar Sesión
          </material_1.Button>
        </material_1.Box>
      </material_1.Popover>
    </>);
}
exports.default = HeaderUserbox;
//# sourceMappingURL=index.js.map
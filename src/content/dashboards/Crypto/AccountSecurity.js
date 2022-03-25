"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const LockTwoTone_1 = __importDefault(require("@mui/icons-material/LockTwoTone"));
const PhoneLockedTwoTone_1 = __importDefault(require("@mui/icons-material/PhoneLockedTwoTone"));
const EmailTwoTone_1 = __importDefault(require("@mui/icons-material/EmailTwoTone"));
const Text_1 = __importDefault(require("src/components/Text"));
const AvatarWrapperError = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`);
const AvatarWrapperSuccess = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`);
const AvatarWrapperWarning = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`);
function AccountSecurity() {
    const [checked, setChecked] = (0, react_1.useState)(['phone_verification']);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (<material_1.Card>
      <material_1.CardHeader title="Account Security"/>
      <material_1.Divider />
      <material_1.List disablePadding>
        <material_1.ListItem sx={{ py: 2 }}>
          <material_1.ListItemAvatar>
            <AvatarWrapperError>
              <LockTwoTone_1.default fontSize="medium"/>
            </AvatarWrapperError>
          </material_1.ListItemAvatar>
          <material_1.ListItemText primary={<Text_1.default color="black">2FA Authentication</Text_1.default>} primaryTypographyProps={{
            variant: 'body1',
            fontWeight: 'bold',
            color: 'textPrimary',
            gutterBottom: true,
            noWrap: true
        }} secondary={<Text_1.default color="error">Disabled</Text_1.default>} secondaryTypographyProps={{ variant: 'body2', noWrap: true }}/>
          <material_1.Switch edge="end" color="primary" onChange={handleToggle('2fa')} checked={checked.indexOf('2fa') !== -1}/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem sx={{ py: 2 }}>
          <material_1.ListItemAvatar>
            <AvatarWrapperSuccess>
              <PhoneLockedTwoTone_1.default fontSize="medium"/>
            </AvatarWrapperSuccess>
          </material_1.ListItemAvatar>
          <material_1.ListItemText primary={<Text_1.default color="black">Phone Verification</Text_1.default>} primaryTypographyProps={{
            variant: 'body1',
            fontWeight: 'bold',
            color: 'textPrimary',
            gutterBottom: true,
            noWrap: true
        }} secondary={<Text_1.default color="success">Active</Text_1.default>} secondaryTypographyProps={{ variant: 'body2', noWrap: true }}/>
          <material_1.Switch edge="end" color="primary" onChange={handleToggle('phone_verification')} checked={checked.indexOf('phone_verification') !== -1}/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem sx={{ py: 2 }}>
          <material_1.ListItemAvatar>
            <AvatarWrapperWarning>
              <EmailTwoTone_1.default fontSize="medium"/>
            </AvatarWrapperWarning>
          </material_1.ListItemAvatar>
          <material_1.ListItemText primary={<Text_1.default color="black">Recovery Email</Text_1.default>} primaryTypographyProps={{
            variant: 'body1',
            fontWeight: 'bold',
            color: 'textPrimary',
            gutterBottom: true,
            noWrap: true
        }} secondary={<Text_1.default color="warning">Not completed</Text_1.default>} secondaryTypographyProps={{ variant: 'body2', noWrap: true }}/>
          <material_1.Switch edge="end" color="primary" onChange={handleToggle('recovery_email')} checked={checked.indexOf('recovery_email') !== -1}/>
        </material_1.ListItem>
      </material_1.List>
    </material_1.Card>);
}
exports.default = AccountSecurity;
//# sourceMappingURL=AccountSecurity.js.map
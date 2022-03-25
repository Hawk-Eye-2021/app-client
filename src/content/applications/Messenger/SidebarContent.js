"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const date_fns_1 = require("date-fns");
const SettingsTwoTone_1 = __importDefault(require("@mui/icons-material/SettingsTwoTone"));
const SearchTwoTone_1 = __importDefault(require("@mui/icons-material/SearchTwoTone"));
const Label_1 = __importDefault(require("src/components/Label"));
const CheckTwoTone_1 = __importDefault(require("@mui/icons-material/CheckTwoTone"));
const AlarmTwoTone_1 = __importDefault(require("@mui/icons-material/AlarmTwoTone"));
const react_router_dom_1 = require("react-router-dom");
const AvatarSuccess = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
          background-color: ${theme.colors.success.lighter};
          color: ${theme.colors.success.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
          margin-left: auto;
          margin-right: auto;
    `);
const MeetingBox = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
          background-color: ${(0, material_1.lighten)(theme.colors.alpha.black[10], 0.5)};
          margin: ${theme.spacing(2)} 0;
          border-radius: ${theme.general.borderRadius};
          padding: ${theme.spacing(2)};
    `);
const RootWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        padding: ${theme.spacing(2.5)};
  `);
const ListItemWrapper = (0, styles_1.styled)(material_1.ListItemButton)(({ theme }) => `
        &.MuiButtonBase-root {
            margin: ${theme.spacing(1)} 0;
        }
  `);
const TabsContainerWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
                margin-right: ${theme.spacing(3)};
                font-size: ${theme.typography.pxToRem(16)};
                color: ${theme.colors.alpha.black[50]};

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected:hover,
            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
            }
        }
  `);
function SidebarContent() {
    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg',
        jobtitle: 'Software Developer'
    };
    const [state, setState] = (0, react_1.useState)({
        invisible: true
    });
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };
    const [currentTab, setCurrentTab] = (0, react_1.useState)('all');
    const tabs = [
        { value: 'all', label: 'All' },
        { value: 'unread', label: 'Unread' },
        { value: 'archived', label: 'Archived' }
    ];
    const handleTabsChange = (event, value) => {
        setCurrentTab(value);
    };
    return (<RootWrapper>
      <material_1.Box display="flex" alignItems="flex-start">
        <material_1.Avatar alt={user.name} src={user.avatar}/>
        <material_1.Box sx={{ ml: 1.5, flex: 1 }}>
          <material_1.Box display="flex" alignItems="flex-start" justifyContent="space-between">
            <material_1.Box>
              <material_1.Typography variant="h5" noWrap>
                {user.name}
              </material_1.Typography>
              <material_1.Typography variant="subtitle1" noWrap>
                {user.jobtitle}
              </material_1.Typography>
            </material_1.Box>
            <material_1.IconButton sx={{ p: 1 }} size="small" color="primary">
              <SettingsTwoTone_1.default fontSize="small"/>
            </material_1.IconButton>
          </material_1.Box>

          <material_1.FormControlLabel control={<material_1.Switch checked={state.invisible} onChange={handleChange} name="invisible" color="primary"/>} label="Invisible"/>
        </material_1.Box>
      </material_1.Box>

      <material_1.TextField sx={{ mt: 2, mb: 1 }} size="small" fullWidth InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
              <SearchTwoTone_1.default />
            </material_1.InputAdornment>)
        }} placeholder="Search..."/>

      <material_1.Typography sx={{ mb: 1, mt: 2 }} variant="h3">
        Chats
      </material_1.Typography>

      <TabsContainerWrapper>
        <material_1.Tabs onChange={handleTabsChange} value={currentTab} variant="scrollable" scrollButtons="auto" textColor="primary" indicatorColor="primary">
          {tabs.map((tab) => (<material_1.Tab key={tab.value} label={tab.label} value={tab.value}/>))}
        </material_1.Tabs>
      </TabsContainerWrapper>

      <material_1.Box mt={2}>
        {currentTab === 'all' && (<material_1.List disablePadding component="div">
            <ListItemWrapper selected>
              <material_1.ListItemAvatar>
                <material_1.Avatar src="/static/images/avatars/1.jpg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText sx={{ mr: 1 }} primaryTypographyProps={{
                color: 'textPrimary',
                variant: 'h5',
                noWrap: true
            }} secondaryTypographyProps={{
                color: 'textSecondary',
                noWrap: true
            }} primary="Zain Baptista" secondary="Hey there, how are you today? Is it ok if I call you?"/>
              <Label_1.default color="primary">
                <b>2</b>
              </Label_1.default>
            </ListItemWrapper>
            <ListItemWrapper>
              <material_1.ListItemAvatar>
                <material_1.Avatar src="/static/images/avatars/2.jpg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText sx={{ mr: 1 }} primaryTypographyProps={{
                color: 'textPrimary',
                variant: 'h5',
                noWrap: true
            }} secondaryTypographyProps={{
                color: 'textSecondary',
                noWrap: true
            }} primary="Kierra Herwitz" secondary="Hi! Did you manage to send me those documents"/>
            </ListItemWrapper>
            <ListItemWrapper>
              <material_1.ListItemAvatar>
                <material_1.Avatar src="/static/images/avatars/1.jpg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText sx={{ mr: 1 }} primaryTypographyProps={{
                color: 'textPrimary',
                variant: 'h5',
                noWrap: true
            }} secondaryTypographyProps={{
                color: 'textSecondary',
                noWrap: true
            }} primary="Craig Vaccaro" secondary="Ola, I still haven't received the program schedule"/>
            </ListItemWrapper>
            <ListItemWrapper>
              <material_1.ListItemAvatar>
                <material_1.Avatar src="/static/images/avatars/4.jpg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText sx={{ mr: 1 }} primaryTypographyProps={{
                color: 'textPrimary',
                variant: 'h5',
                noWrap: true
            }} secondaryTypographyProps={{
                color: 'textSecondary',
                noWrap: true
            }} primary="Adison Press" secondary="I recently did some buying on Amazon and now I'm stuck"/>
              <Label_1.default color="primary">
                <b>8</b>
              </Label_1.default>
            </ListItemWrapper>
          </material_1.List>)}
        {currentTab === 'unread' && (<material_1.List disablePadding component="div">
            <ListItemWrapper>
              <material_1.ListItemAvatar>
                <material_1.Avatar src="/static/images/avatars/1.jpg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText sx={{ mr: 1 }} primaryTypographyProps={{
                color: 'textPrimary',
                variant: 'h5',
                noWrap: true
            }} secondaryTypographyProps={{
                color: 'textSecondary',
                noWrap: true
            }} primary="Zain Baptista" secondary="Hey there, how are you today? Is it ok if I call you?"/>
              <Label_1.default color="primary">
                <b>2</b>
              </Label_1.default>
            </ListItemWrapper>
            <ListItemWrapper>
              <material_1.ListItemAvatar>
                <material_1.Avatar src="/static/images/avatars/4.jpg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText sx={{ mr: 1 }} primaryTypographyProps={{
                color: 'textPrimary',
                variant: 'h5',
                noWrap: true
            }} secondaryTypographyProps={{
                color: 'textSecondary',
                noWrap: true
            }} primary="Adison Press" secondary="I recently did some buying on Amazon and now I'm stuck"/>
              <Label_1.default color="primary">
                <b>8</b>
              </Label_1.default>
            </ListItemWrapper>
          </material_1.List>)}
        {currentTab === 'archived' && (<material_1.Box pb={3}>
            <material_1.Divider sx={{ mb: 3 }}/>
            <AvatarSuccess>
              <CheckTwoTone_1.default />
            </AvatarSuccess>
            <material_1.Typography sx={{ mt: 2, textAlign: 'center' }} variant="subtitle2">
              Hurray! There are no archived chats!
            </material_1.Typography>
            <material_1.Divider sx={{ mt: 3 }}/>
          </material_1.Box>)}
      </material_1.Box>
      <material_1.Box display="flex" pb={1} mt={4} alignItems="center">
        <material_1.Typography sx={{ mr: 1 }} variant="h3">
          Meetings
        </material_1.Typography>
        <Label_1.default color="success">
          <b>2</b>
        </Label_1.default>
      </material_1.Box>
      <MeetingBox>
        <material_1.Typography variant="h4">Daily Design Meeting</material_1.Typography>

        <material_1.Box py={3} display="flex" alignItems="flex-start">
          <AlarmTwoTone_1.default />
          <material_1.Box pl={1}>
            <material_1.Typography variant="subtitle2" sx={{ lineHeight: 1 }} color="text.primary">
              10:00 - 11:30
            </material_1.Typography>
            <material_1.Typography variant="subtitle1">
              {(0, date_fns_1.formatDistance)((0, date_fns_1.subMinutes)(new Date(), 12), new Date(), {
            addSuffix: true
        })}
            </material_1.Typography>
          </material_1.Box>
        </material_1.Box>
        <material_1.Box display="flex" alignItems="center" justifyContent="space-between">
          <material_1.AvatarGroup>
            <material_1.Tooltip arrow title="View profile for Remy Sharp">
              <material_1.Avatar sx={{ width: 28, height: 28 }} component={react_router_dom_1.Link} to="#" alt="Remy Sharp" src="/static/images/avatars/1.jpg"/>
            </material_1.Tooltip>
            <material_1.Tooltip arrow title="View profile for Travis Howard">
              <material_1.Avatar sx={{ width: 28, height: 28 }} component={react_router_dom_1.Link} to="#" alt="Travis Howard" src="/static/images/avatars/2.jpg"/>
            </material_1.Tooltip>
            <material_1.Tooltip arrow title="View profile for Craig Vaccaro">
              <material_1.Avatar sx={{ width: 28, height: 28 }} component={react_router_dom_1.Link} to="#" alt="Craig Vaccaro" src="/static/images/avatars/1.jpg"/>
            </material_1.Tooltip>
          </material_1.AvatarGroup>

          <material_1.Button variant="contained" size="small">
            Attend
          </material_1.Button>
        </material_1.Box>
      </MeetingBox>

      <MeetingBox>
        <material_1.Typography variant="h4">Investors Council Meeting</material_1.Typography>

        <material_1.Box py={3} display="flex" alignItems="flex-start">
          <AlarmTwoTone_1.default />
          <material_1.Box pl={1}>
            <material_1.Typography variant="subtitle2" sx={{ lineHeight: 1 }} color="text.primary">
              14:30 - 16:15
            </material_1.Typography>
            <material_1.Typography variant="subtitle1">
              {(0, date_fns_1.formatDistance)((0, date_fns_1.subHours)(new Date(), 4), new Date(), {
            addSuffix: true
        })}
            </material_1.Typography>
          </material_1.Box>
        </material_1.Box>
        <material_1.Box display="flex" alignItems="center" justifyContent="space-between">
          <material_1.AvatarGroup>
            <material_1.Tooltip arrow title="View profile for Travis Howard">
              <material_1.Avatar sx={{ width: 28, height: 28 }} component={react_router_dom_1.Link} to="#" alt="Travis Howard" src="/static/images/avatars/4.jpg"/>
            </material_1.Tooltip>
            <material_1.Tooltip arrow title="View profile for Craig Vaccaro">
              <material_1.Avatar sx={{ width: 28, height: 28 }} component={react_router_dom_1.Link} to="#" alt="Craig Vaccaro" src="/static/images/avatars/5.jpg"/>
            </material_1.Tooltip>
          </material_1.AvatarGroup>

          <material_1.Button variant="contained" size="small">
            Attend
          </material_1.Button>
        </material_1.Box>
      </MeetingBox>
    </RootWrapper>);
}
exports.default = SidebarContent;
//# sourceMappingURL=SidebarContent.js.map
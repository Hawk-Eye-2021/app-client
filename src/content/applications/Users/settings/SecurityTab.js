"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const DoneTwoTone_1 = __importDefault(require("@mui/icons-material/DoneTwoTone"));
const DeleteTwoTone_1 = __importDefault(require("@mui/icons-material/DeleteTwoTone"));
const date_fns_1 = require("date-fns");
const ButtonError = (0, styles_1.styled)(material_1.Button)(({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `);
const AvatarSuccess = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`);
const AvatarWrapper = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`);
function SecurityTab() {
    const theme = (0, material_1.useTheme)();
    const [page, setPage] = (0, react_1.useState)(2);
    const [rowsPerPage, setRowsPerPage] = (0, react_1.useState)(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const logs = [
        {
            id: 1,
            browser: ' Safari/537.36',
            ipaddress: '3.70.73.142',
            location: 'United States',
            date: (0, date_fns_1.subDays)(new Date(), 2).getTime()
        },
        {
            id: 2,
            browser: 'Chrome/36.0.1985.67',
            ipaddress: '138.13.136.179',
            location: 'China',
            date: (0, date_fns_1.subDays)(new Date(), 6).getTime()
        },
        {
            id: 3,
            browser: 'Googlebot/2.1',
            ipaddress: '119.229.170.253',
            location: 'China',
            date: (0, date_fns_1.subHours)(new Date(), 15).getTime()
        },
        {
            id: 4,
            browser: 'AppleWebKit/535.1',
            ipaddress: '206.8.99.49',
            location: 'Philippines',
            date: (0, date_fns_1.subDays)(new Date(), 4).getTime()
        },
        {
            id: 5,
            browser: 'Mozilla/5.0',
            ipaddress: '235.40.59.85',
            location: 'China',
            date: (0, date_fns_1.subWeeks)(new Date(), 3).getTime()
        }
    ];
    return (<material_1.Grid container spacing={3}>
      <material_1.Grid item xs={12}>
        <material_1.Box pb={2}>
          <material_1.Typography variant="h3">Social Accounts</material_1.Typography>
          <material_1.Typography variant="subtitle2">
            Manage connected social accounts options
          </material_1.Typography>
        </material_1.Box>
        <material_1.Card>
          <material_1.List>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemAvatar sx={{ pr: 2 }}>
                <AvatarWrapper src="/static/images/logo/google.svg"/>
              </material_1.ListItemAvatar>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Google" secondary="A Google account hasn’t been yet added to your account"/>
              <material_1.Button color="secondary" size="large" variant="contained">
                Connect
              </material_1.Button>
            </material_1.ListItem>
          </material_1.List>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12}>
        <material_1.Card>
          <material_1.List>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemAvatar sx={{ pr: 2 }}>
                <AvatarSuccess>
                  <DoneTwoTone_1.default />
                </AvatarSuccess>
              </material_1.ListItemAvatar>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Facebook" secondary="Your Facebook account has been successfully connected"/>
              <ButtonError size="large" variant="contained">
                Revoke access
              </ButtonError>
            </material_1.ListItem>
            <material_1.Divider component="li"/>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemAvatar sx={{ pr: 2 }}>
                <AvatarSuccess>
                  <DoneTwoTone_1.default />
                </AvatarSuccess>
              </material_1.ListItemAvatar>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Twitter" secondary="Your Twitter account was last syncronized 6 days ago"/>
              <ButtonError size="large" variant="contained">
                Revoke access
              </ButtonError>
            </material_1.ListItem>
          </material_1.List>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12}>
        <material_1.Box pb={2}>
          <material_1.Typography variant="h3">Security</material_1.Typography>
          <material_1.Typography variant="subtitle2">
            Change your security preferences below
          </material_1.Typography>
        </material_1.Box>
        <material_1.Card>
          <material_1.List>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Change Password" secondary="You can change your password here"/>
              <material_1.Button size="large" variant="outlined">
                Change password
              </material_1.Button>
            </material_1.ListItem>
            <material_1.Divider component="li"/>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Two-Factor Authentication" secondary="Enable PIN verification for all sign in attempts"/>
              <material_1.Switch color="primary"/>
            </material_1.ListItem>
          </material_1.List>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12}>
        <material_1.Card>
          <material_1.CardHeader subheaderTypographyProps={{}} titleTypographyProps={{}} title="Access Logs" subheader="Recent sign in activity logs"/>
          <material_1.Divider />
          <material_1.TableContainer>
            <material_1.Table>
              <material_1.TableHead>
                <material_1.TableRow>
                  <material_1.TableCell>Browser</material_1.TableCell>
                  <material_1.TableCell>IP Address</material_1.TableCell>
                  <material_1.TableCell>Location</material_1.TableCell>
                  <material_1.TableCell>Date/Time</material_1.TableCell>
                  <material_1.TableCell align="right">Actions</material_1.TableCell>
                </material_1.TableRow>
              </material_1.TableHead>
              <material_1.TableBody>
                {logs.map((log) => (<material_1.TableRow key={log.id} hover>
                    <material_1.TableCell>{log.browser}</material_1.TableCell>
                    <material_1.TableCell>{log.ipaddress}</material_1.TableCell>
                    <material_1.TableCell>{log.location}</material_1.TableCell>
                    <material_1.TableCell>
                      {(0, date_fns_1.format)(log.date, 'dd MMMM, yyyy - h:mm:ss a')}
                    </material_1.TableCell>
                    <material_1.TableCell align="right">
                      <material_1.Tooltip placement="top" title="Delete" arrow>
                        <material_1.IconButton sx={{
                '&:hover': {
                    background: theme.colors.error.lighter
                },
                color: theme.palette.error.main
            }} color="inherit" size="small">
                          <DeleteTwoTone_1.default fontSize="small"/>
                        </material_1.IconButton>
                      </material_1.Tooltip>
                    </material_1.TableCell>
                  </material_1.TableRow>))}
              </material_1.TableBody>
            </material_1.Table>
          </material_1.TableContainer>
          <material_1.Box p={2}>
            <material_1.TablePagination component="div" count={100} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}/>
          </material_1.Box>
        </material_1.Card>
      </material_1.Grid>
    </material_1.Grid>);
}
exports.default = SecurityTab;
//# sourceMappingURL=SecurityTab.js.map
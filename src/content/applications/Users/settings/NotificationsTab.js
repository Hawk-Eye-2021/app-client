"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
function NotificationsTab() {
    const [state, setState] = (0, react_1.useState)({
        checkedA: true,
        checkedB: false,
        checkedC: true,
        checkedD: false
    });
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };
    return (<material_1.Grid container spacing={3}>
      <material_1.Grid item xs={12}>
        <material_1.Box pb={2}>
          <material_1.Typography variant="h3">Account</material_1.Typography>
          <material_1.Typography variant="subtitle2">
            Choose what notifications you want to receive
          </material_1.Typography>
        </material_1.Box>
        <material_1.Card>
          <material_1.List>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Widthdraw Activity" secondary="Receive an email when a widthdrawal is made"/>
              <material_1.Switch color="primary" checked={state.checkedA} onChange={handleChange} name="checkedA"/>
            </material_1.ListItem>
            <material_1.Divider component="li"/>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Weekly Report" secondary="Receive account status weekly report in your inbox"/>
              <material_1.Switch color="primary" checked={state.checkedB} onChange={handleChange} name="checkedB"/>
            </material_1.ListItem>
          </material_1.List>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12}>
        <material_1.Box pb={2}>
          <material_1.Typography variant="h3">Orders</material_1.Typography>
          <material_1.Typography variant="subtitle2">
            Receive email notifications related to your orders activity
          </material_1.Typography>
        </material_1.Box>
        <material_1.Card>
          <material_1.List>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Failed Payment" secondary="Get a message when a payment fails"/>
              <material_1.Switch color="primary" checked={state.checkedC} onChange={handleChange} name="checkedC"/>
            </material_1.ListItem>
            <material_1.Divider component="li"/>
            <material_1.ListItem sx={{ p: 3 }}>
              <material_1.ListItemText primaryTypographyProps={{ variant: 'h5', gutterBottom: true }} secondaryTypographyProps={{
            variant: 'subtitle2',
            lineHeight: 1
        }} primary="Order Status Update" secondary="Whenever an order is updated, get a notification on your phone"/>
              <material_1.Switch color="primary" checked={state.checkedD} onChange={handleChange} name="checkedD"/>
            </material_1.ListItem>
          </material_1.List>
        </material_1.Card>
      </material_1.Grid>
    </material_1.Grid>);
}
exports.default = NotificationsTab;
//# sourceMappingURL=NotificationsTab.js.map
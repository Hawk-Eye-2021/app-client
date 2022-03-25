"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Button_1 = __importDefault(require("@mui/material/Button"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const Person_1 = __importDefault(require("@mui/icons-material/Person"));
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const colors_1 = require("@mui/material/colors");
const Footer_1 = __importDefault(require("src/components/Footer"));
const emails = ['username@gmail.com', 'user02@gmail.com'];
function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleListItemClick = (value) => {
        onClose(value);
    };
    return (<Dialog_1.default onClose={handleClose} open={open}>
      <DialogTitle_1.default>Set backup account</DialogTitle_1.default>
      <List_1.default sx={{ pt: 0 }}>
        {emails.map((email) => (<ListItem_1.default button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar_1.default>
              <Avatar_1.default sx={{ bgcolor: colors_1.blue[100], color: colors_1.blue[600] }}>
                <Person_1.default />
              </Avatar_1.default>
            </ListItemAvatar_1.default>
            <ListItemText_1.default primary={email}/>
          </ListItem_1.default>))}

        <ListItem_1.default autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar_1.default>
            <Avatar_1.default>
              <Add_1.default />
            </Avatar_1.default>
          </ListItemAvatar_1.default>
          <ListItemText_1.default primary="Add account"/>
        </ListItem_1.default>
      </List_1.default>
    </Dialog_1.default>);
}
SimpleDialog.propTypes = {
    onClose: prop_types_1.default.func.isRequired,
    open: prop_types_1.default.bool.isRequired,
    selectedValue: prop_types_1.default.string.isRequired,
};
function Modals() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(emails[1]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Modals - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Modals" subHeading="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks." docs="https://material-ui.com/components/dialogs/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Basic Dialog"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Typography_1.default variant="subtitle1" component="div">
                  Selected: {selectedValue}
                </Typography_1.default>
                <br />
                <Button_1.default variant="outlined" onClick={handleClickOpen}>
                  Open simple dialog
                </Button_1.default>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}/>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Modals;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const AttachFileTwoTone_1 = __importDefault(require("@mui/icons-material/AttachFileTwoTone"));
const SendTwoTone_1 = __importDefault(require("@mui/icons-material/SendTwoTone"));
const DividerWrapper = (0, styles_1.styled)(material_1.Divider)(({ theme }) => `
        height: 40px !important;
        margin: 0 ${theme.spacing(2)};
        align-self: center;
`);
const Input = (0, styles_1.styled)('input')({
    display: 'none'
});
function BottomBarContent() {
    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg'
    };
    return (<material_1.Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <material_1.Hidden mdDown>
        <material_1.Avatar alt={user.name} src={user.avatar}/>
        <DividerWrapper orientation="vertical" flexItem/>
      </material_1.Hidden>
      <material_1.Box sx={{ flex: 1, mr: 2 }}>
        <material_1.TextField hiddenLabel fullWidth placeholder="Write here your message..."/>
      </material_1.Box>
      <material_1.Tooltip arrow placement="top" title="Choose an emoji">
        <material_1.IconButton color="primary">😀</material_1.IconButton>
      </material_1.Tooltip>
      <Input accept="image/*" id="messenger-upload-file" type="file"/>
      <material_1.Tooltip arrow placement="top" title="Attach a file">
        <label htmlFor="messenger-upload-file">
          <material_1.IconButton color="primary" component="span">
            <AttachFileTwoTone_1.default />
          </material_1.IconButton>
        </label>
      </material_1.Tooltip>
      <material_1.Hidden mdDown>
        <DividerWrapper orientation="vertical" flexItem/>
        <material_1.Button startIcon={<SendTwoTone_1.default />} variant="contained">
          Send
        </material_1.Button>
      </material_1.Hidden>
    </material_1.Card>);
}
exports.default = BottomBarContent;
//# sourceMappingURL=BottomBarContent.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const AddTwoTone_1 = __importDefault(require("@mui/icons-material/AddTwoTone"));
function PageHeader() {
    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg'
    };
    return (<material_1.Grid container justifyContent="space-between" alignItems="center">
      <material_1.Grid item>
        <material_1.Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </material_1.Typography>
        <material_1.Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </material_1.Typography>
      </material_1.Grid>
      <material_1.Grid item>
        <material_1.Button sx={{ mt: { xs: 2, md: 0 } }} variant="contained" startIcon={<AddTwoTone_1.default fontSize="small"/>}>
          Create transaction
        </material_1.Button>
      </material_1.Grid>
    </material_1.Grid>);
}
exports.default = PageHeader;
//# sourceMappingURL=PageHeader.js.map
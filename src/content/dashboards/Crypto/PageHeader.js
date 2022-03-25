"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const store_1 = require("../../../store/store");
function PageHeader() {
    const user = (0, store_1.useAppSelector)((state => state.user.user));
    const theme = (0, styles_1.useTheme)();
    return (<material_1.Grid container alignItems="center">
      <material_1.Grid item>
        <material_1.Avatar sx={{ mr: 2, width: theme.spacing(8), height: theme.spacing(8) }} variant="rounded" alt={user.name} src={""}/>
      </material_1.Grid>
      <material_1.Grid item>
        <material_1.Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.name}!
        </material_1.Typography>
        <material_1.Typography variant="subtitle2">
          Today is a good day to start trading crypto assets!
        </material_1.Typography>
      </material_1.Grid>
    </material_1.Grid>);
}
exports.default = PageHeader;
//# sourceMappingURL=PageHeader.js.map
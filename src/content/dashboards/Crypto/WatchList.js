"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const ViewWeekTwoTone_1 = __importDefault(require("@mui/icons-material/ViewWeekTwoTone"));
const TableRowsTwoTone_1 = __importDefault(require("@mui/icons-material/TableRowsTwoTone"));
const WatchListColumn1_1 = __importDefault(require("./WatchListColumn1"));
const WatchListColumn2_1 = __importDefault(require("./WatchListColumn2"));
const WatchListColumn3_1 = __importDefault(require("./WatchListColumn3"));
const WatchListRow_1 = __importDefault(require("./WatchListRow"));
const EmptyResultsWrapper = (0, styles_1.styled)('img')(({ theme }) => `
      max-width: 100%;
      width: ${theme.spacing(66)};
      height: ${theme.spacing(34)};
`);
function WatchList() {
    const [tabs, setTab] = (0, react_1.useState)('watch_list_columns');
    const handleViewOrientation = (event, newValue) => {
        setTab(newValue);
    };
    return (<>
      <material_1.Box display="flex" alignItems="center" justifyContent="space-between" sx={{ pb: 3 }}>
        <material_1.Typography variant="h3">Watch List</material_1.Typography>
        <material_1.ToggleButtonGroup value={tabs} exclusive onChange={handleViewOrientation}>
          <material_1.ToggleButton disableRipple value="watch_list_columns">
            <ViewWeekTwoTone_1.default />
          </material_1.ToggleButton>
          <material_1.ToggleButton disableRipple value="watch_list_rows">
            <TableRowsTwoTone_1.default />
          </material_1.ToggleButton>
        </material_1.ToggleButtonGroup>
      </material_1.Box>
      <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
        {tabs === 'watch_list_columns' && (<>
            <material_1.Grid item lg={4} xs={12}>
              <WatchListColumn1_1.default />
            </material_1.Grid>
            <material_1.Grid item lg={4} xs={12}>
              <WatchListColumn2_1.default />
            </material_1.Grid>
            <material_1.Grid item lg={4} xs={12}>
              <WatchListColumn3_1.default />
            </material_1.Grid>
          </>)}

        {tabs === 'watch_list_rows' && (<material_1.Grid item xs={12}>
            <WatchListRow_1.default />
          </material_1.Grid>)}

        {!tabs && (<material_1.Grid item xs={12}>
            <material_1.Card sx={{ textAlign: 'center', p: 3 }}>
              <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg"/>

              <material_1.Typography align="center" variant="h2" fontWeight="normal" color="text.secondary" sx={{ mt: 3 }} gutterBottom>
                Click something, anything!
              </material_1.Typography>
              <material_1.Button variant="contained" size="large" sx={{ mt: 4 }}>
                Maybe, a button?
              </material_1.Button>
            </material_1.Card>
          </material_1.Grid>)}
      </material_1.Grid>
    </>);
}
exports.default = WatchList;
//# sourceMappingURL=WatchList.js.map
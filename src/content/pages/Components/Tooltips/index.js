"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const Footer_1 = __importDefault(require("src/components/Footer"));
function Tooltips() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Tooltips - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Tooltips" subHeading="Tooltips display informative text when users hover over, focus on, or tap an element." docs="https://material-ui.com/components/tooltips/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Positioning"/>
              <material_1.Divider />
              <material_1.CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box_1.default sx={{ width: 500 }}>
                  <material_1.Grid container justifyContent="center">
                    <material_1.Grid item>
                      <Tooltip_1.default arrow title="Add" placement="top-start">
                        <Button_1.default>top-start</Button_1.default>
                      </Tooltip_1.default>
                      <Tooltip_1.default arrow title="Add" placement="top">
                        <Button_1.default>top</Button_1.default>
                      </Tooltip_1.default>
                      <Tooltip_1.default arrow title="Add" placement="top-end">
                        <Button_1.default>top-end</Button_1.default>
                      </Tooltip_1.default>
                    </material_1.Grid>
                  </material_1.Grid>
                  <material_1.Grid container justifyContent="center">
                    <material_1.Grid item xs={6}>
                      <Tooltip_1.default arrow title="Add" placement="left-start">
                        <Button_1.default>left-start</Button_1.default>
                      </Tooltip_1.default>
                      <br />
                      <Tooltip_1.default arrow title="Add" placement="left">
                        <Button_1.default>left</Button_1.default>
                      </Tooltip_1.default>
                      <br />
                      <Tooltip_1.default arrow title="Add" placement="left-end">
                        <Button_1.default>left-end</Button_1.default>
                      </Tooltip_1.default>
                    </material_1.Grid>
                    <material_1.Grid item container xs={6} alignItems="flex-end" direction="column">
                      <material_1.Grid item>
                        <Tooltip_1.default arrow title="Add" placement="right-start">
                          <Button_1.default>right-start</Button_1.default>
                        </Tooltip_1.default>
                      </material_1.Grid>
                      <material_1.Grid item>
                        <Tooltip_1.default arrow title="Add" placement="right">
                          <Button_1.default>right</Button_1.default>
                        </Tooltip_1.default>
                      </material_1.Grid>
                      <material_1.Grid item>
                        <Tooltip_1.default arrow title="Add" placement="right-end">
                          <Button_1.default>right-end</Button_1.default>
                        </Tooltip_1.default>
                      </material_1.Grid>
                    </material_1.Grid>
                  </material_1.Grid>
                  <material_1.Grid container justifyContent="center">
                    <material_1.Grid item>
                      <Tooltip_1.default arrow title="Add" placement="bottom-start">
                        <Button_1.default>bottom-start</Button_1.default>
                      </Tooltip_1.default>
                      <Tooltip_1.default arrow title="Add" placement="bottom">
                        <Button_1.default>bottom</Button_1.default>
                      </Tooltip_1.default>
                      <Tooltip_1.default arrow title="Add" placement="bottom-end">
                        <Button_1.default>bottom-end</Button_1.default>
                      </Tooltip_1.default>
                    </material_1.Grid>
                  </material_1.Grid>
                </Box_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Tooltips;
//# sourceMappingURL=index.js.map
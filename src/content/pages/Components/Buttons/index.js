"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Footer_1 = __importDefault(require("src/components/Footer"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const ArrowDownward_1 = __importDefault(require("@mui/icons-material/ArrowDownward"));
function Buttons() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Buttons - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Buttons" subHeading="Buttons allow users to take actions, and make choices, with a single tap." docs="https://material-ui.com/components/buttons/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Contained Buttons"/>
              <material_1.Divider />
              <material_1.CardContent>
                <material_1.Button sx={{ margin: 1 }} variant="contained">Default</material_1.Button>
                <material_1.Button sx={{ margin: 1 }} variant="contained" color="primary">
                  Primary
                </material_1.Button>
                <material_1.Button sx={{ margin: 1 }} variant="contained" color="secondary">
                  Secondary
                </material_1.Button>
                <material_1.Button sx={{ margin: 1 }} variant="contained" disabled>
                  Disabled
                </material_1.Button>
                <material_1.Button sx={{ margin: 1 }} variant="contained" color="primary" href="#contained-buttons">
                  Link
                </material_1.Button>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Text Buttons"/>
              <material_1.Divider />
              <material_1.CardContent>
                <material_1.Button sx={{ margin: 1 }}>Default</material_1.Button>
                <material_1.Button sx={{ margin: 1 }} color="primary">Primary</material_1.Button>
                <material_1.Button sx={{ margin: 1 }} color="secondary">Secondary</material_1.Button>
                <material_1.Button sx={{ margin: 1 }} disabled>Disabled</material_1.Button>
                <material_1.Button sx={{ margin: 1 }} href="#text-buttons" color="primary">
                  Link
                </material_1.Button>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Outlined Buttons"/>
              <material_1.Divider />
              <material_1.CardContent>
                <material_1.Button variant="outlined" sx={{ margin: 1 }}>Default</material_1.Button>
                <material_1.Button variant="outlined" sx={{ margin: 1 }} color="primary">
                  Primary
                </material_1.Button>
                <material_1.Button variant="outlined" sx={{ margin: 1 }} color="secondary">
                  Secondary
                </material_1.Button>
                <material_1.Button variant="outlined" sx={{ margin: 1 }} disabled>
                  Disabled
                </material_1.Button>
                <material_1.Button variant="outlined" sx={{ margin: 1 }} color="primary" href="#outlined-buttons">
                  Link
                </material_1.Button>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Sizes"/>
              <material_1.Divider />
              <material_1.CardContent>
                <div>
                  <div>
                    <material_1.Button size="small" sx={{ margin: 1 }}>
                      Small
                    </material_1.Button>
                    <material_1.Button size="medium" sx={{ margin: 1 }}>
                      Medium
                    </material_1.Button>
                    <material_1.Button size="large" sx={{ margin: 1 }}>
                      Large
                    </material_1.Button>
                  </div>
                  <div>
                    <material_1.Button variant="outlined" sx={{ margin: 1 }} size="small" color="primary">
                      Small
                    </material_1.Button>
                    <material_1.Button variant="outlined" sx={{ margin: 1 }} size="medium" color="primary">
                      Medium
                    </material_1.Button>
                    <material_1.Button variant="outlined" sx={{ margin: 1 }} size="large" color="primary">
                      Large
                    </material_1.Button>
                  </div>
                  <div>
                    <material_1.Button sx={{ margin: 1 }} variant="contained" size="small" color="primary">
                      Small
                    </material_1.Button>
                    <material_1.Button sx={{ margin: 1 }} variant="contained" size="medium" color="primary">
                      Medium
                    </material_1.Button>
                    <material_1.Button sx={{ margin: 1 }} variant="contained" size="large" color="primary">
                      Large
                    </material_1.Button>
                  </div>
                  <div>
                    <material_1.IconButton aria-label="delete" sx={{ margin: 1 }} size="small">
                      <ArrowDownward_1.default fontSize="inherit"/>
                    </material_1.IconButton>
                    <material_1.IconButton aria-label="delete" sx={{ margin: 1 }}>
                      <Delete_1.default fontSize="small"/>
                    </material_1.IconButton>
                    <material_1.IconButton aria-label="delete" sx={{ margin: 1 }}>
                      <Delete_1.default />
                    </material_1.IconButton>
                    <material_1.IconButton aria-label="delete" sx={{ margin: 1 }}>
                      <Delete_1.default fontSize="large"/>
                    </material_1.IconButton>
                  </div>
                </div>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Buttons;
//# sourceMappingURL=index.js.map
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
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const colors_1 = require("@mui/material/colors");
const Folder_1 = __importDefault(require("@mui/icons-material/Folder"));
const Pageview_1 = __importDefault(require("@mui/icons-material/Pageview"));
const Assignment_1 = __importDefault(require("@mui/icons-material/Assignment"));
function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
}
function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
function Avatars() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Avatars - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Avatars" subHeading="Avatars are found throughout material design with uses in everything from tables to dialog menus." docs="https://material-ui.com/components/avatars/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Images"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Stack_1.default direction="row" spacing={2}>
                  <Avatar_1.default alt="Remy Sharp" src="/static/images/avatars/1.jpg"/>
                  <Avatar_1.default alt="Travis Howard" src="/static/images/avatars/2.jpg"/>
                  <Avatar_1.default alt="Cindy Baker" src="/static/images/avatars/3.jpg"/>
                </Stack_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Letters"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Stack_1.default direction="row" spacing={2}>
                  <Avatar_1.default>H</Avatar_1.default>
                  <Avatar_1.default sx={{ bgcolor: colors_1.deepOrange[500] }}>N</Avatar_1.default>
                  <Avatar_1.default sx={{ bgcolor: colors_1.deepPurple[500] }}>OP</Avatar_1.default>
                </Stack_1.default>
                <material_1.Divider sx={{ my: 5 }}/>
                <Stack_1.default direction="row" spacing={2}>
                  <Avatar_1.default {...stringAvatar('Kent Dodds')}/>
                  <Avatar_1.default {...stringAvatar('Jed Watson')}/>
                  <Avatar_1.default {...stringAvatar('Tim Neutkens')}/>
                </Stack_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Sizes"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Stack_1.default direction="row" spacing={2}>
                  <Avatar_1.default alt="Remy Sharp" src="/static/images/avatars/4.jpg" sx={{ width: 24, height: 24 }}/>
                  <Avatar_1.default alt="Remy Sharp" src="/static/images/avatars/5.jpg"/>
                  <Avatar_1.default alt="Remy Sharp" src="/static/images/avatars/3.jpg" sx={{ width: 56, height: 56 }}/>
                </Stack_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Icons"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Stack_1.default direction="row" spacing={2}>
                  <Avatar_1.default>
                    <Folder_1.default />
                  </Avatar_1.default>
                  <Avatar_1.default sx={{ bgcolor: colors_1.pink[500] }}>
                    <Pageview_1.default />
                  </Avatar_1.default>
                  <Avatar_1.default sx={{ bgcolor: colors_1.green[500] }}>
                    <Assignment_1.default />
                  </Avatar_1.default>
                </Stack_1.default>
                <material_1.Divider sx={{ my: 5 }}/>
                <Stack_1.default direction="row" spacing={2}>
                  <Avatar_1.default sx={{ bgcolor: colors_1.deepOrange[500] }} variant="square">
                    N
                  </Avatar_1.default>
                  <Avatar_1.default sx={{ bgcolor: colors_1.green[500] }} variant="rounded">
                    <Assignment_1.default />
                  </Avatar_1.default>
                </Stack_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Avatars;
//# sourceMappingURL=index.js.map
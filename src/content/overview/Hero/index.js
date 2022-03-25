"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/material/styles");
const TypographyH1 = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`);
const TypographyH2 = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`);
const LabelWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`);
const MuiAvatar = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`);
const TsAvatar = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`);
function Hero() {
    return (<material_1.Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <material_1.Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
        <material_1.Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.1.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Tokyo Free White React Admin Dashboard
          </TypographyH1>
          <TypographyH2 sx={{ lineHeight: 1.5, pb: 4 }} variant="h4" color="text.secondary" fontWeight="normal">
            High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes
          </TypographyH2>
          <material_1.Button component={react_router_dom_1.Link} to="/dashboards/crypto" size="large" variant="contained">
            Browse Live Preview
          </material_1.Button>
          <material_1.Button sx={{ ml: 2 }} component="a" target="_blank" rel="noopener" href="https://bloomui.com/product/tokyo-free-white-react-typescript-material-ui-admin-dashboard" size="large" variant="text">
            Key Features
          </material_1.Button>
          <material_1.Grid container spacing={3} mt={5}>
            <material_1.Grid item md={6}>
              <MuiAvatar>
                <img src="/static/images/logo/material-ui.svg" alt="Material-UI"/>
              </MuiAvatar>
              <material_1.Typography variant="h4">
                <material_1.Box sx={{ pb: 2 }}><b>Powered by Material-UI</b></material_1.Box><material_1.Typography component="span" variant="subtitle2"> - A simple and customizable component library to build faster, beautiful, andaccessible React apps.</material_1.Typography>
              </material_1.Typography>
            </material_1.Grid>
            <material_1.Grid item md={6}>
              <TsAvatar>
                <img src="/static/images/logo/typescript.svg" alt="Typescript"/>
              </TsAvatar>
              <material_1.Typography variant="h4">
                <material_1.Box sx={{ pb: 2 }}><b>Built with Typescript</b></material_1.Box><material_1.Typography component="span" variant="subtitle2"> - Tokyo Free White features a modern technology stack and is built with React + Typescript.</material_1.Typography>
              </material_1.Typography>
            </material_1.Grid>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Grid>
    </material_1.Container>);
}
exports.default = Hero;
//# sourceMappingURL=index.js.map
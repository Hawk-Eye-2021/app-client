"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_helmet_async_1 = require("react-helmet-async");
const RefreshTwoTone_1 = __importDefault(require("@mui/icons-material/RefreshTwoTone"));
const LoadingButton_1 = __importDefault(require("@mui/lab/LoadingButton"));
const styles_1 = require("@mui/material/styles");
const GridWrapper = (0, styles_1.styled)(material_1.Grid)(({ theme }) => `
    background: ${theme.colors.gradients.black1};
`);
const MainContent = (0, styles_1.styled)(material_1.Box)(() => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`);
const TypographyPrimary = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`);
const TypographySecondary = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`);
function Status500() {
    const [pending, setPending] = (0, react_1.useState)(false);
    function handleClick() {
        setPending(true);
    }
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Status - 500</title>
      </react_helmet_async_1.Helmet>
      <MainContent>
        <material_1.Grid container sx={{ height: '100%' }} alignItems="stretch" spacing={0}>
          <material_1.Grid xs={12} md={6} alignItems="center" display="flex" justifyContent="center" item>
            <material_1.Container maxWidth="sm">
              <material_1.Box textAlign="center">
                <img alt="500" height={260} src="/static/images/status/500.svg"/>
                <material_1.Typography variant="h2" sx={{ my: 2 }}>
                  There was an error, please try again later
                </material_1.Typography>
                <material_1.Typography variant="h4" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
                  The server encountered an internal error and was not able to complete your request
                </material_1.Typography>
                <LoadingButton_1.default onClick={handleClick} loading={pending} variant="outlined" color="primary" startIcon={<RefreshTwoTone_1.default />}>
                  Refresh view
                </LoadingButton_1.default>
                <material_1.Button href="/overview" variant="contained" sx={{ ml: 1 }}>
                  Go back
                </material_1.Button>
              </material_1.Box>
            </material_1.Container>
          </material_1.Grid>
          <material_1.Hidden mdDown>
            <GridWrapper xs={12} md={6} alignItems="center" display="flex" justifyContent="center" item>
              <material_1.Container maxWidth="sm">
                <material_1.Box textAlign="center">
                  <TypographyPrimary variant="h1" sx={{ my: 2 }}>
                    Tokyo Free White React Admin Dashboard
                  </TypographyPrimary>
                  <TypographySecondary variant="h4" fontWeight="normal" sx={{ mb: 4 }}>
                    High performance React template built with lots of powerful Material-UI components across multiple product niches for fast &amp; perfect apps development processes.
                  </TypographySecondary>
                  <material_1.Button href="/overview" size="large" variant="contained">
                    Overview
                  </material_1.Button>
                </material_1.Box>
              </material_1.Container>
            </GridWrapper>
          </material_1.Hidden>
        </material_1.Grid>
      </MainContent>
    </>);
}
exports.default = Status500;
//# sourceMappingURL=index.js.map
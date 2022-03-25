"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_helmet_async_1 = require("react-helmet-async");
const SearchTwoTone_1 = __importDefault(require("@mui/icons-material/SearchTwoTone"));
const styles_1 = require("@mui/material/styles");
const MainContent = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`);
const OutlinedInputWrapper = (0, styles_1.styled)(material_1.OutlinedInput)(({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`);
const ButtonSearch = (0, styles_1.styled)(material_1.Button)(({ theme }) => `
    margin-right: -${theme.spacing(1)};
`);
function Status404() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Status - 404</title>
      </react_helmet_async_1.Helmet>
      <MainContent>
        <material_1.Container maxWidth="md">
          <material_1.Box textAlign="center">
            <img alt="404" height={180} src="/static/images/status/404.svg"/>
            <material_1.Typography variant="h2" sx={{ my: 2 }}>
              The page you were looking for doesn't exist.
            </material_1.Typography>
            <material_1.Typography variant="h4" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
              It's on us, we moved the content to a different page. The search below should help!
            </material_1.Typography>
          </material_1.Box>
          <material_1.Container maxWidth="sm">
            <material_1.Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <material_1.FormControl variant="outlined" fullWidth>
                <OutlinedInputWrapper type="text" placeholder="Search terms here..." endAdornment={<material_1.InputAdornment position="end">
                      <ButtonSearch variant="contained" size="small">
                        Search
                      </ButtonSearch>
                    </material_1.InputAdornment>} startAdornment={<material_1.InputAdornment position="start">
                      <SearchTwoTone_1.default />
                    </material_1.InputAdornment>}/>
              </material_1.FormControl>
              <material_1.Divider sx={{ my: 4 }}>OR</material_1.Divider>
              <material_1.Button href="/overview" variant="outlined">
                Go to homepage
              </material_1.Button>
            </material_1.Card>
          </material_1.Container>
        </material_1.Container>
      </MainContent>
    </>);
}
exports.default = Status404;
//# sourceMappingURL=index.js.map
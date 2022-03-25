"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_helmet_async_1 = require("react-helmet-async");
const LogoSign_1 = __importDefault(require("src/components/LogoSign"));
const styles_1 = require("@mui/material/styles");
const Facebook_1 = __importDefault(require("@mui/icons-material/Facebook"));
const Twitter_1 = __importDefault(require("@mui/icons-material/Twitter"));
const Instagram_1 = __importDefault(require("@mui/icons-material/Instagram"));
const MailTwoTone_1 = __importDefault(require("@mui/icons-material/MailTwoTone"));
const MainContent = (0, styles_1.styled)(material_1.Box)(() => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`);
const TypographyH1 = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
  font-size: ${theme.typography.pxToRem(75)};
`);
const TypographyH3 = (0, styles_1.styled)(material_1.Typography)(({ theme }) => `
  color: ${theme.colors.alpha.black[50]};
`);
const OutlinedInputWrapper = (0, styles_1.styled)(material_1.OutlinedInput)(({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`);
const ButtonNotify = (0, styles_1.styled)(material_1.Button)(({ theme }) => `
    margin-right: -${theme.spacing(1)};
`);
function StatusComingSoon() {
    const calculateTimeLeft = () => {
        const difference = +new Date(`2022`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = (0, react_1.useState)(calculateTimeLeft());
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });
    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(<material_1.Box textAlign="center" px={3}>
        <TypographyH1 variant="h1">{timeLeft[interval]}</TypographyH1>
        <TypographyH3 variant="h3">{interval}</TypographyH3>
      </material_1.Box>);
    });
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Status - Coming Soon</title>
      </react_helmet_async_1.Helmet>
      <MainContent>
        <material_1.Container maxWidth="md">
          <LogoSign_1.default />
          <material_1.Box textAlign="center" mb={3}>
            <material_1.Container maxWidth="xs">
              <material_1.Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
                Coming Soon
              </material_1.Typography>
              <material_1.Typography variant="h3" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
                We're working on implementing the last features before our launch!
              </material_1.Typography>
            </material_1.Container>
            <img alt="Coming Soon" height={200} src="/static/images/status/coming-soon.svg"/>
          </material_1.Box>

          <material_1.Box display="flex" justifyContent="center">
            {timerComponents.length ? timerComponents : <>Time's up!</>}
          </material_1.Box>

          <material_1.Container maxWidth="sm">
            <material_1.Box sx={{ textAlign: 'center', p: 4 }}>
              <material_1.FormControl variant="outlined" fullWidth>
                <OutlinedInputWrapper type="text" placeholder="Enter your email address here..." endAdornment={<material_1.InputAdornment position="end">
                      <ButtonNotify variant="contained" size="small">
                        Notify Me
                      </ButtonNotify>
                    </material_1.InputAdornment>} startAdornment={<material_1.InputAdornment position="start">
                      <MailTwoTone_1.default />
                    </material_1.InputAdornment>}/>
                <material_1.FormHelperText>
                  We'll email you once our website is launched!
                </material_1.FormHelperText>
              </material_1.FormControl>
              <material_1.Divider sx={{ my: 4 }}/>
              <material_1.Box sx={{ textAlign: 'center' }}>
                <material_1.Tooltip arrow placement="top" title="Facebook">
                  <material_1.IconButton color="primary">
                    <Facebook_1.default />
                  </material_1.IconButton>
                </material_1.Tooltip>
                <material_1.Tooltip arrow placement="top" title="Twitter">
                  <material_1.IconButton color="primary">
                    <Twitter_1.default />
                  </material_1.IconButton>
                </material_1.Tooltip>
                <material_1.Tooltip arrow placement="top" title="Instagram">
                  <material_1.IconButton color="primary">
                    <Instagram_1.default />
                  </material_1.IconButton>
                </material_1.Tooltip>
              </material_1.Box>
            </material_1.Box>
          </material_1.Container>
        </material_1.Container>
      </MainContent>
    </>);
}
exports.default = StatusComingSoon;
//# sourceMappingURL=index.js.map
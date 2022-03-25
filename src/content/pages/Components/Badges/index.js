"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const react_1 = require("react");
const Footer_1 = __importDefault(require("src/components/Footer"));
const ButtonGroup_1 = __importDefault(require("@mui/material/ButtonGroup"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const Remove_1 = __importDefault(require("@mui/icons-material/Remove"));
const Mail_1 = __importDefault(require("@mui/icons-material/Mail"));
const Switch_1 = __importDefault(require("@mui/material/Switch"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Badge_1 = __importDefault(require("@mui/material/Badge"));
const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box_1.default component="span" sx={shapeStyles}/>;
const circle = (<Box_1.default component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}/>);
function Badges() {
    const [count, setCount] = (0, react_1.useState)(1);
    const [invisible, setInvisible] = (0, react_1.useState)(false);
    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Badges - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Badges" subHeading="Badge generates a small badge to the top-right of its child(ren)." docs="https://material-ui.com/components/badges/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Shapes"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Stack_1.default spacing={3} direction="row">
                  <Badge_1.default color="secondary" badgeContent=" ">
                    {rectangle}
                  </Badge_1.default>
                  <Badge_1.default color="secondary" badgeContent=" " variant="dot">
                    {rectangle}
                  </Badge_1.default>
                  <Badge_1.default color="secondary" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge_1.default>
                  <Badge_1.default color="secondary" overlap="circular" badgeContent=" " variant="dot">
                    {circle}
                  </Badge_1.default>
                </Stack_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Badges Visibility"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Box_1.default sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: 2,
            },
            '& .MuiBadge-root': {
                marginRight: 4,
            },
        }}>
                  <div>
                    <Badge_1.default color="secondary" badgeContent={count}>
                      <Mail_1.default />
                    </Badge_1.default>
                    <ButtonGroup_1.default>
                      <Button_1.default aria-label="reduce" onClick={() => {
            setCount(Math.max(count - 1, 0));
        }}>
                        <Remove_1.default fontSize="small"/>
                      </Button_1.default>
                      <Button_1.default aria-label="increase" onClick={() => {
            setCount(count + 1);
        }}>
                        <Add_1.default fontSize="small"/>
                      </Button_1.default>
                    </ButtonGroup_1.default>
                  </div>
                  <div>
                    <Badge_1.default color="secondary" variant="dot" invisible={invisible}>
                      <Mail_1.default />
                    </Badge_1.default>
                    <FormControlLabel_1.default sx={{ color: 'text.primary' }} control={<Switch_1.default checked={!invisible} onChange={handleBadgeVisibility}/>} label="Show Badge"/>
                  </div>
                </Box_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Colors"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Stack_1.default spacing={2} direction="row">
                  <Badge_1.default badgeContent={4} color="secondary">
                    <Mail_1.default color="action"/>
                  </Badge_1.default>
                  <Badge_1.default badgeContent={4} color="success">
                    <Mail_1.default color="action"/>
                  </Badge_1.default>
                </Stack_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Badges;
//# sourceMappingURL=index.js.map
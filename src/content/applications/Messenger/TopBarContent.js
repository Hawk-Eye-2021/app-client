"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const date_fns_1 = require("date-fns");
const CallTwoTone_1 = __importDefault(require("@mui/icons-material/CallTwoTone"));
const VideoCameraFrontTwoTone_1 = __importDefault(require("@mui/icons-material/VideoCameraFrontTwoTone"));
const InfoTwoTone_1 = __importDefault(require("@mui/icons-material/InfoTwoTone"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const SearchTwoTone_1 = __importDefault(require("@mui/icons-material/SearchTwoTone"));
const ColorLensTwoTone_1 = __importDefault(require("@mui/icons-material/ColorLensTwoTone"));
const NotificationsOffTwoTone_1 = __importDefault(require("@mui/icons-material/NotificationsOffTwoTone"));
const EmojiEmotionsTwoTone_1 = __importDefault(require("@mui/icons-material/EmojiEmotionsTwoTone"));
const CancelTwoTone_1 = __importDefault(require("@mui/icons-material/CancelTwoTone"));
const BlockTwoTone_1 = __importDefault(require("@mui/icons-material/BlockTwoTone"));
const WarningTwoTone_1 = __importDefault(require("@mui/icons-material/WarningTwoTone"));
const DescriptionTwoTone_1 = __importDefault(require("@mui/icons-material/DescriptionTwoTone"));
const RootWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        @media (min-width: ${theme.breakpoints.values.md}px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
`);
const ListItemIconWrapper = (0, styles_1.styled)(material_1.ListItemIcon)(({ theme }) => `
        min-width: 36px;
        color: ${theme.colors.primary.light};
`);
const AccordionSummaryWrapper = (0, styles_1.styled)(material_1.AccordionSummary)(({ theme }) => `
        &.Mui-expanded {
          min-height: 48px;
        }

        .MuiAccordionSummary-content.Mui-expanded {
          margin: 12px 0;
        }

        .MuiSvgIcon-root {
          transition: ${theme.transitions.create(['color'])};
        }

        &.MuiButtonBase-root {

          margin-bottom: ${theme.spacing(0.5)};

          &:last-child {
            margin-bottom: 0;
          }

          &.Mui-expanded,
          &:hover {
            background: ${theme.colors.alpha.black[10]};

            .MuiSvgIcon-root {
              color: ${theme.colors.primary.main};
            }
          }
        }
`);
function TopBarContent() {
    const theme = (0, styles_1.useTheme)();
    const [mobileOpen, setMobileOpen] = (0, react_1.useState)(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [expanded, setExpanded] = (0, react_1.useState)('section1');
    const handleChange = (section) => (_event, isExpanded) => {
        setExpanded(isExpanded ? section : false);
    };
    return (<>
      <RootWrapper>
        <material_1.Box sx={{ display: { sm: 'flex' } }} alignItems="center">
          <material_1.Avatar variant="rounded" sx={{ width: 50, height: 50 }} alt="Zain Baptista" src="/static/images/avatars/2.jpg"/>
          <material_1.Box sx={{ pl: { sm: 1.5 }, pt: { xs: 1.5, sm: 0 } }}>
            <material_1.Typography variant="h4" gutterBottom>
              Zain Baptista
            </material_1.Typography>
            <material_1.Typography variant="subtitle2">
              {(0, date_fns_1.formatDistance)((0, date_fns_1.subMinutes)(new Date(), 8), new Date(), {
            addSuffix: true
        })}
            </material_1.Typography>
          </material_1.Box>
        </material_1.Box>
        <material_1.Box sx={{
            mt: { xs: 3, md: 0 }
        }}>
          <material_1.Tooltip placement="bottom" title="Start a voice call">
            <material_1.IconButton color="primary">
              <CallTwoTone_1.default />
            </material_1.IconButton>
          </material_1.Tooltip>
          <material_1.Tooltip placement="bottom" title="Start a video call">
            <material_1.IconButton color="primary">
              <VideoCameraFrontTwoTone_1.default />
            </material_1.IconButton>
          </material_1.Tooltip>
          <material_1.Tooltip placement="bottom" title="Conversation information">
            <material_1.IconButton color="primary" onClick={handleDrawerToggle}>
              <InfoTwoTone_1.default />
            </material_1.IconButton>
          </material_1.Tooltip>
        </material_1.Box>
      </RootWrapper>
      <material_1.Drawer variant="temporary" anchor={theme.direction === 'rtl' ? 'left' : 'right'} open={mobileOpen} onClose={handleDrawerToggle} elevation={9}>
        <material_1.Box sx={{ minWidth: 360 }} p={2}>
          <material_1.Box sx={{ textAlign: 'center' }}>
            <material_1.Avatar sx={{
            mx: 'auto',
            my: 2,
            width: theme.spacing(12),
            height: theme.spacing(12)
        }} variant="rounded" alt="Zain Baptista" src="/static/images/avatars/2.jpg"/>
            <material_1.Typography variant="h4">Zain Baptista</material_1.Typography>
            <material_1.Typography variant="subtitle2">
              Active{' '}
              {(0, date_fns_1.formatDistance)((0, date_fns_1.subMinutes)(new Date(), 7), new Date(), {
            addSuffix: true
        })}
            </material_1.Typography>
          </material_1.Box>
          <material_1.Divider sx={{ my: 3 }}/>

          <material_1.Accordion expanded={expanded === 'section1'} onChange={handleChange('section1')}>
            <AccordionSummaryWrapper expandIcon={<ExpandMore_1.default />}>
              <material_1.Typography variant="h5">Customize Chat</material_1.Typography>
            </AccordionSummaryWrapper>
            <material_1.AccordionDetails sx={{ p: 0 }}>
              <material_1.List component="nav">
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <SearchTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Search in Conversation" primaryTypographyProps={{ variant: 'h5' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <ColorLensTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Change Theme Styling" primaryTypographyProps={{ variant: 'h5' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <EmojiEmotionsTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Choose Default Emoji" primaryTypographyProps={{ variant: 'h5' }}/>
                </material_1.ListItem>
              </material_1.List>
            </material_1.AccordionDetails>
          </material_1.Accordion>
          <material_1.Accordion expanded={expanded === 'section2'} onChange={handleChange('section2')}>
            <AccordionSummaryWrapper expandIcon={<ExpandMore_1.default />}>
              <material_1.Typography variant="h5">Privacy & Support</material_1.Typography>
            </AccordionSummaryWrapper>
            <material_1.AccordionDetails sx={{ p: 0 }}>
              <material_1.List component="nav">
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <NotificationsOffTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Turn off notifications" primaryTypographyProps={{ variant: 'h5' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <CancelTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Ignore all messages" primaryTypographyProps={{ variant: 'h5' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <BlockTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Block user" primaryTypographyProps={{ variant: 'h5' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <WarningTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="Something's Wrong" primaryTypographyProps={{ variant: 'h5' }} secondary="Report the conversation and provide feedback" secondaryTypographyProps={{ variant: 'subtitle1' }}/>
                </material_1.ListItem>
              </material_1.List>
            </material_1.AccordionDetails>
          </material_1.Accordion>
          <material_1.Accordion expanded={expanded === 'section3'} onChange={handleChange('section3')}>
            <AccordionSummaryWrapper expandIcon={<ExpandMore_1.default />}>
              <material_1.Typography variant="h5">Shared Files</material_1.Typography>
            </AccordionSummaryWrapper>
            <material_1.AccordionDetails sx={{ p: 0 }}>
              <material_1.List component="nav">
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="HolidayPictures.zip" primaryTypographyProps={{ variant: 'h5' }} secondary="You opened in the past year" secondaryTypographyProps={{ variant: 'subtitle1' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="2021Screenshot.jpg" primaryTypographyProps={{ variant: 'h5' }} secondary="You edited this file yesterday" secondaryTypographyProps={{ variant: 'subtitle1' }}/>
                </material_1.ListItem>
                <material_1.ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoTone_1.default />
                  </ListItemIconWrapper>
                  <material_1.ListItemText primary="PresentationDeck.pdf" primaryTypographyProps={{ variant: 'h5' }} secondary="Never opened" secondaryTypographyProps={{ variant: 'subtitle1' }}/>
                </material_1.ListItem>
              </material_1.List>
            </material_1.AccordionDetails>
          </material_1.Accordion>
        </material_1.Box>
      </material_1.Drawer>
    </>);
}
exports.default = TopBarContent;
//# sourceMappingURL=TopBarContent.js.map
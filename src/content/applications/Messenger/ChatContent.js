"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const date_fns_1 = require("date-fns");
const ScheduleTwoTone_1 = __importDefault(require("@mui/icons-material/ScheduleTwoTone"));
const DividerWrapper = (0, styles_1.styled)(material_1.Divider)(({ theme }) => `
      .MuiDivider-wrapper {
        text-transform: none;
        background: ${theme.palette.background.default};
        font-size: ${theme.typography.pxToRem(13)};
        color: ${theme.colors.alpha.black[50]};
      }
`);
const CardWrapperPrimary = (0, styles_1.styled)(material_1.Card)(({ theme }) => `
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      padding: ${theme.spacing(2)};
      border-radius: ${theme.general.borderRadiusXl};
      border-top-right-radius: ${theme.general.borderRadius};
      max-width: 380px;
      display: inline-flex;
`);
const CardWrapperSecondary = (0, styles_1.styled)(material_1.Card)(({ theme }) => `
      background: ${theme.colors.alpha.black[10]};
      color: ${theme.colors.alpha.black[100]};
      padding: ${theme.spacing(2)};
      border-radius: ${theme.general.borderRadiusXl};
      border-top-left-radius: ${theme.general.borderRadius};
      max-width: 380px;
      display: inline-flex;
`);
function ChatContent() {
    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg'
    };
    return (<material_1.Box p={3}>
      <DividerWrapper>
        {(0, date_fns_1.format)((0, date_fns_1.subDays)(new Date(), 3), 'MMMM dd yyyy')}
      </DividerWrapper>

      <material_1.Box display="flex" alignItems="flex-start" justifyContent="flex-start" py={3}>
        <material_1.Avatar variant="rounded" sx={{ width: 50, height: 50 }} alt="Zain Baptista" src="/static/images/avatars/2.jpg"/>
        <material_1.Box display="flex" alignItems="flex-start" flexDirection="column" justifyContent="flex-start" ml={2}>
          <CardWrapperSecondary>
            Hi. Can you send me the missing invoices asap?
          </CardWrapperSecondary>
          <material_1.Typography variant="subtitle1" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
            <ScheduleTwoTone_1.default sx={{ mr: 0.5 }} fontSize="small"/>
            {(0, date_fns_1.formatDistance)((0, date_fns_1.subHours)(new Date(), 115), new Date(), {
            addSuffix: true
        })}
          </material_1.Typography>
        </material_1.Box>
      </material_1.Box>

      <material_1.Box display="flex" alignItems="flex-start" justifyContent="flex-end" py={3}>
        <material_1.Box display="flex" alignItems="flex-end" flexDirection="column" justifyContent="flex-end" mr={2}>
          <CardWrapperPrimary>
            Yes, I'll email them right now. I'll let you know once the remaining
            invoices are done.
          </CardWrapperPrimary>
          <material_1.Typography variant="subtitle1" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
            <ScheduleTwoTone_1.default sx={{ mr: 0.5 }} fontSize="small"/>
            {(0, date_fns_1.formatDistance)((0, date_fns_1.subHours)(new Date(), 125), new Date(), {
            addSuffix: true
        })}
          </material_1.Typography>
        </material_1.Box>
        <material_1.Avatar variant="rounded" sx={{ width: 50, height: 50 }} alt={user.name} src={user.avatar}/>
      </material_1.Box>
      <DividerWrapper>
        {(0, date_fns_1.format)((0, date_fns_1.subDays)(new Date(), 5), 'MMMM dd yyyy')}
      </DividerWrapper>

      <material_1.Box display="flex" alignItems="flex-start" justifyContent="flex-end" py={3}>
        <material_1.Box display="flex" alignItems="flex-end" flexDirection="column" justifyContent="flex-end" mr={2}>
          <CardWrapperPrimary>Hey! Are you there?</CardWrapperPrimary>
          <CardWrapperPrimary sx={{ mt: 2 }}>
            Heeeelloooo????
          </CardWrapperPrimary>
          <material_1.Typography variant="subtitle1" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
            <ScheduleTwoTone_1.default sx={{ mr: 0.5 }} fontSize="small"/>
            {(0, date_fns_1.formatDistance)((0, date_fns_1.subHours)(new Date(), 60), new Date(), {
            addSuffix: true
        })}
          </material_1.Typography>
        </material_1.Box>
        <material_1.Avatar variant="rounded" sx={{ width: 50, height: 50 }} alt={user.name} src={user.avatar}/>
      </material_1.Box>
      <DividerWrapper>Today</DividerWrapper>
      <material_1.Box display="flex" alignItems="flex-start" justifyContent="flex-start" py={3}>
        <material_1.Avatar variant="rounded" sx={{ width: 50, height: 50 }} alt="Zain Baptista" src="/static/images/avatars/2.jpg"/>
        <material_1.Box display="flex" alignItems="flex-start" flexDirection="column" justifyContent="flex-start" ml={2}>
          <CardWrapperSecondary>Hey there!</CardWrapperSecondary>
          <CardWrapperSecondary sx={{ mt: 1 }}>
            How are you? Is it ok if I call you?
          </CardWrapperSecondary>
          <material_1.Typography variant="subtitle1" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
            <ScheduleTwoTone_1.default sx={{ mr: 0.5 }} fontSize="small"/>
            {(0, date_fns_1.formatDistance)((0, date_fns_1.subMinutes)(new Date(), 6), new Date(), {
            addSuffix: true
        })}
          </material_1.Typography>
        </material_1.Box>
      </material_1.Box>
      <material_1.Box display="flex" alignItems="flex-start" justifyContent="flex-end" py={3}>
        <material_1.Box display="flex" alignItems="flex-end" flexDirection="column" justifyContent="flex-end" mr={2}>
          <CardWrapperPrimary>
            Hello, I just got my Amazon order shipped and I’m very happy about
            that.
          </CardWrapperPrimary>
          <CardWrapperPrimary sx={{ mt: 1 }}>
            Can you confirm?
          </CardWrapperPrimary>
          <material_1.Typography variant="subtitle1" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
            <ScheduleTwoTone_1.default sx={{ mr: 0.5 }} fontSize="small"/>
            {(0, date_fns_1.formatDistance)((0, date_fns_1.subMinutes)(new Date(), 8), new Date(), {
            addSuffix: true
        })}
          </material_1.Typography>
        </material_1.Box>
        <material_1.Avatar variant="rounded" sx={{ width: 50, height: 50 }} alt={user.name} src={user.avatar}/>
      </material_1.Box>
    </material_1.Box>);
}
exports.default = ChatContent;
//# sourceMappingURL=ChatContent.js.map
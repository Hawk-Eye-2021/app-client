"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const ListWrapper = (0, styles_1.styled)(material_1.List)(() => `
      .MuiListItem-root {
        border-radius: 0;
        margin: 0;
      }
`);
function PopularTags() {
    const theme = (0, material_1.useTheme)();
    return (<material_1.Card sx={{ height: '100%' }}>
      <material_1.CardHeader title="Popular Tags"/>
      <material_1.Divider />
      <ListWrapper disablePadding>
        <material_1.ListItem sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
        }} button>
          <material_1.ListItemText primary="#HTML"/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
        }} button>
          <material_1.ListItemText primary="#software_development"/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
        }} button>
          <material_1.ListItemText primary="#TrendingInfuencers"/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
        }} button>
          <material_1.ListItemText primary="#investorsWatch2022"/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListSubheader>
          <material_1.Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
            Groups
          </material_1.Typography>
        </material_1.ListSubheader>
        <material_1.Divider />
        <material_1.ListItem button>
          <material_1.ListItemAvatar>
            <material_1.Avatar sx={{
            width: 38,
            height: 38,
            background: `${theme.colors.info.main}`,
            color: `${theme.palette.info.contrastText}`
        }}>
              WD
            </material_1.Avatar>
          </material_1.ListItemAvatar>
          <material_1.ListItemText primaryTypographyProps={{
            variant: 'h5',
            color: `${theme.colors.alpha.black[100]}`
        }} primary="Web Designers Lounge"/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem button>
          <material_1.ListItemAvatar>
            <material_1.Avatar sx={{
            width: 38,
            height: 38,
            background: `${theme.colors.alpha.black[100]}`,
            color: `${theme.colors.alpha.white[100]}`
        }}>
              D
            </material_1.Avatar>
          </material_1.ListItemAvatar>
          <material_1.ListItemText primaryTypographyProps={{
            variant: 'h5',
            color: `${theme.colors.alpha.black[100]}`
        }} primary="Writer’s Digest Daily"/>
        </material_1.ListItem>
        <material_1.Divider />
        <material_1.ListItem button>
          <material_1.ListItemAvatar>
            <material_1.Avatar sx={{ width: 38, height: 38 }} src="/static/images/logo/google.svg"/>
          </material_1.ListItemAvatar>
          <material_1.ListItemText primaryTypographyProps={{
            variant: 'h5',
            color: `${theme.colors.alpha.black[100]}`
        }} primary="Google Developers"/>
        </material_1.ListItem>
      </ListWrapper>
    </material_1.Card>);
}
exports.default = PopularTags;
//# sourceMappingURL=PopularTags.js.map
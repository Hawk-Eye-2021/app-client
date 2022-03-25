"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const ArrowBackTwoTone_1 = __importDefault(require("@mui/icons-material/ArrowBackTwoTone"));
const ArrowForwardTwoTone_1 = __importDefault(require("@mui/icons-material/ArrowForwardTwoTone"));
const UploadTwoTone_1 = __importDefault(require("@mui/icons-material/UploadTwoTone"));
const MoreHorizTwoTone_1 = __importDefault(require("@mui/icons-material/MoreHorizTwoTone"));
const Input = (0, styles_1.styled)('input')({
    display: 'none'
});
const AvatarWrapper = (0, styles_1.styled)(material_1.Card)(({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`);
const ButtonUploadWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`);
const CardCover = (0, styles_1.styled)(material_1.Card)(({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`);
const CardCoverAction = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`);
const ProfileCover = ({ user }) => {
    return (<>
      <material_1.Box display="flex" mb={3}>
        <material_1.Tooltip arrow placement="top" title="Go back">
          <material_1.IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoTone_1.default />
          </material_1.IconButton>
        </material_1.Tooltip>
        <material_1.Box>
          <material_1.Typography variant="h3" component="h3" gutterBottom>
            Profile for {user.name}
          </material_1.Typography>
          <material_1.Typography variant="subtitle2">
            This is a profile page. Easy to modify, always blazing fast
          </material_1.Typography>
        </material_1.Box>
      </material_1.Box>
      <CardCover>
        <material_1.CardMedia image={user.coverImg}/>
        <CardCoverAction>
          <Input accept="image/*" id="change-cover" multiple type="file"/>
          <label htmlFor="change-cover">
            <material_1.Button startIcon={<UploadTwoTone_1.default />} variant="contained" component="span">
              Change cover
            </material_1.Button>
          </label>
        </CardCoverAction>
      </CardCover>
      <AvatarWrapper>
        <material_1.Avatar variant="rounded" alt={user.name} src={user.avatar}/>
        <ButtonUploadWrapper>
          <Input accept="image/*" id="icon-button-file" name="icon-button-file" type="file"/>
          <label htmlFor="icon-button-file">
            <material_1.IconButton component="span" color="primary">
              <UploadTwoTone_1.default />
            </material_1.IconButton>
          </label>
        </ButtonUploadWrapper>
      </AvatarWrapper>
      <material_1.Box py={2} pl={2} mb={3}>
        <material_1.Typography gutterBottom variant="h4">
          {user.name}
        </material_1.Typography>
        <material_1.Typography variant="subtitle2">{user.description}</material_1.Typography>
        <material_1.Typography sx={{ py: 2 }} variant="subtitle2" color="text.primary">
          {user.jobtitle} | {user.location} | {user.followers} followers
        </material_1.Typography>
        <material_1.Box display={{ xs: 'block', md: 'flex' }} alignItems="center" justifyContent="space-between">
          <material_1.Box>
            <material_1.Button size="small" variant="contained">
              Follow
            </material_1.Button>
            <material_1.Button size="small" sx={{ mx: 1 }} variant="outlined">
              View website
            </material_1.Button>
            <material_1.IconButton color="primary" sx={{ p: 0.5 }}>
              <MoreHorizTwoTone_1.default />
            </material_1.IconButton>
          </material_1.Box>
          <material_1.Button sx={{ mt: { xs: 2, md: 0 } }} size="small" variant="text" endIcon={<ArrowForwardTwoTone_1.default />}>
            See all {' '}
            {user.followers}
            {' '}
            connections
          </material_1.Button>
        </material_1.Box>
      </material_1.Box>
    </>);
};
ProfileCover.propTypes = {
    // @ts-ignore
    user: prop_types_1.default.object.isRequired
};
exports.default = ProfileCover;
//# sourceMappingURL=ProfileCover.js.map
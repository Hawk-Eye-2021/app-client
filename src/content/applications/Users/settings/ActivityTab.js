"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const MoreHorizTwoTone_1 = __importDefault(require("@mui/icons-material/MoreHorizTwoTone"));
const ThumbUpAltTwoTone_1 = __importDefault(require("@mui/icons-material/ThumbUpAltTwoTone"));
const CommentTwoTone_1 = __importDefault(require("@mui/icons-material/CommentTwoTone"));
const ShareTwoTone_1 = __importDefault(require("@mui/icons-material/ShareTwoTone"));
const Text_1 = __importDefault(require("src/components/Text"));
const CardActionsWrapper = (0, styles_1.styled)(material_1.CardActions)(({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`);
function ActivityTab() {
    return (<material_1.Card>
      <material_1.CardHeader avatar={<material_1.Avatar src="/static/images/avatars/5.jpg"/>} action={<material_1.IconButton color="primary">
            <MoreHorizTwoTone_1.default fontSize="medium"/>
          </material_1.IconButton>} titleTypographyProps={{ variant: 'h4' }} subheaderTypographyProps={{ variant: 'subtitle2' }} title="Allison Lipshutz" subheader={<>
            Managing Partner, <material_1.Link href="#" underline="hover">#software</material_1.Link>,{' '}
            <material_1.Link href="#" underline="hover">#managers</material_1.Link>, Google Inc.
          </>}/>
      <material_1.Box px={3} pb={2}>
        <material_1.Typography variant="h4" fontWeight="normal">
          Welcome to organizing your remote office for maximum productivity.
        </material_1.Typography>
      </material_1.Box>
      <material_1.CardMedia sx={{ minHeight: 280 }} image="/static/images/placeholders/covers/6.jpg" title="Card Cover"/>
      <material_1.Box p={3}>
        <material_1.Typography variant="h2" sx={{ pb: 1 }}>
          Organizing Your Remote Office for Maximum Productivity
        </material_1.Typography>
        <material_1.Typography variant="subtitle2">
          <material_1.Link href="#" underline="hover">example.com</material_1.Link> • 4 mins read
        </material_1.Typography>
      </material_1.Box>
      <material_1.Divider />
      <CardActionsWrapper sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
        <material_1.Box>
          <material_1.Button startIcon={<ThumbUpAltTwoTone_1.default />} variant="contained">
            Like
          </material_1.Button>
          <material_1.Button startIcon={<CommentTwoTone_1.default />} variant="outlined" sx={{ mx: 2 }}>
            Comment
          </material_1.Button>
          <material_1.Button startIcon={<ShareTwoTone_1.default />} variant="outlined">
            Share
          </material_1.Button>
        </material_1.Box>
        <material_1.Box sx={{ mt: { xs: 2, md: 0 } }}>
          <material_1.Typography variant="subtitle2" component="span">
            <Text_1.default color="black">
              <b>485</b>
            </Text_1.default>{' '}
            reactions •{' '}
            <Text_1.default color="black">
              <b>63</b>
            </Text_1.default>{' '}
            comments
          </material_1.Typography>
        </material_1.Box>
      </CardActionsWrapper>
    </material_1.Card>);
}
exports.default = ActivityTab;
//# sourceMappingURL=ActivityTab.js.map
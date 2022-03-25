"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const react_1 = require("react");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Footer_1 = __importDefault(require("src/components/Footer"));
const CardActions_1 = __importDefault(require("@mui/material/CardActions"));
const styles_1 = require("@mui/material/styles");
const Button_1 = __importDefault(require("@mui/material/Button"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const CardMedia_1 = __importDefault(require("@mui/material/CardMedia"));
const Collapse_1 = __importDefault(require("@mui/material/Collapse"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const colors_1 = require("@mui/material/colors");
const Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
const Share_1 = __importDefault(require("@mui/icons-material/Share"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
const ExpandMore = (0, styles_1.styled)((props) => {
    const { expand, ...other } = props;
    return <IconButton_1.default {...other}/>;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const bull = (<Box_1.default component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box_1.default>);
function Cards() {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Cards - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Cards" subHeading="Cards contain content and actions about a single subject." docs="https://material-ui.com/components/cards/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Basic"/>
              <material_1.Divider />
              <material_1.CardContent>
                <material_1.Card sx={{ minWidth: 275 }}>
                  <material_1.CardContent>
                    <Typography_1.default sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Word of the Day
                    </Typography_1.default>
                    <Typography_1.default variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography_1.default>
                    <Typography_1.default sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography_1.default>
                    <Typography_1.default variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography_1.default>
                  </material_1.CardContent>
                  <CardActions_1.default>
                    <Button_1.default size="small">Learn More</Button_1.default>
                  </CardActions_1.default>
                </material_1.Card>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Complex Example"/>
              <material_1.Divider />
              <material_1.CardContent>
                <material_1.Card sx={{ maxWidth: 345 }}>
                  <material_1.CardHeader avatar={<Avatar_1.default sx={{ bgcolor: colors_1.red[500] }} aria-label="recipe">
                        R
                      </Avatar_1.default>} action={<IconButton_1.default aria-label="settings">
                        <MoreVert_1.default />
                      </IconButton_1.default>} title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
                  <CardMedia_1.default sx={{
            height: 0,
            paddingTop: '56.25%', // 16:9
        }} image="/static/images/placeholders/covers/1.jpg" title="Paella dish"/>
                  <material_1.CardContent>
                    <Typography_1.default variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography_1.default>
                  </material_1.CardContent>
                  <CardActions_1.default disableSpacing>
                    <IconButton_1.default aria-label="add to favorites">
                      <Favorite_1.default />
                    </IconButton_1.default>
                    <IconButton_1.default aria-label="share">
                      <Share_1.default />
                    </IconButton_1.default>
                    <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                      <ExpandMore_1.default />
                    </ExpandMore>
                  </CardActions_1.default>
                  <Collapse_1.default in={expanded} timeout="auto" unmountOnExit>
                    <material_1.CardContent>
                      <Typography_1.default paragraph>Method:</Typography_1.default>
                      <Typography_1.default paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography_1.default>
                      <Typography_1.default paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography_1.default>
                      <Typography_1.default paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography_1.default>
                      <Typography_1.default>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography_1.default>
                    </material_1.CardContent>
                  </Collapse_1.default>
                </material_1.Card>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Media"/>
              <material_1.Divider />
              <material_1.CardContent>
                <material_1.Card sx={{ maxWidth: 345 }}>
                  <CardMedia_1.default sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile"/>
                  <material_1.CardContent>
                    <Typography_1.default gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography_1.default>
                    <Typography_1.default variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography_1.default>
                  </material_1.CardContent>
                  <CardActions_1.default>
                    <Button_1.default size="small">Share</Button_1.default>
                    <Button_1.default size="small">Learn More</Button_1.default>
                  </CardActions_1.default>
                </material_1.Card>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Cards;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const AddTwoTone_1 = __importDefault(require("@mui/icons-material/AddTwoTone"));
function Feed() {
    const feed = [
        {
            name: 'Munroe Dacks',
            jobtitle: 'Senior Cost Accountant',
            company: 'Trudoo',
            avatar: '/static/images/avatars/1.jpg'
        },
        {
            name: 'Gunilla Canario',
            jobtitle: 'Associate Professor',
            company: 'Buzzdog',
            avatar: '/static/images/avatars/2.jpg'
        },
        {
            name: 'Rowena Geistmann',
            jobtitle: 'Pharmacist',
            company: 'Yozio',
            avatar: '/static/images/avatars/3.jpg'
        },
        {
            name: 'Ede Stoving',
            jobtitle: 'VP Product Management',
            company: 'Cogibox',
            avatar: '/static/images/avatars/4.jpg'
        },
        {
            name: 'Crissy Spere',
            jobtitle: 'Social Worker',
            company: 'Babbleblab',
            avatar: '/static/images/avatars/5.jpg'
        },
        {
            name: 'Michel Greatbanks',
            jobtitle: 'Research Assistant III',
            company: 'Aimbu',
            avatar: '/static/images/avatars/6.jpg'
        }
    ];
    return (<material_1.Card>
      <material_1.CardHeader title="Followers Feed"/>
      <material_1.Divider />
      <material_1.Box p={2}>
        <material_1.Grid container spacing={0}>
          {feed.map((_feed) => (<material_1.Grid key={_feed.name} item xs={12} sm={6} lg={4}>
              <material_1.Box p={3} display="flex" alignItems="flex-start">
                <material_1.Avatar src={_feed.avatar}/>
                <material_1.Box pl={2}>
                  <material_1.Typography gutterBottom variant="subtitle2">
                    {_feed.company}
                  </material_1.Typography>
                  <material_1.Typography variant="h4" gutterBottom>
                    {_feed.name}
                  </material_1.Typography>
                  <material_1.Typography color="text.primary" sx={{ pb: 2 }}>
                    {_feed.jobtitle}
                  </material_1.Typography>
                  <material_1.Button variant="outlined" size="small" startIcon={<AddTwoTone_1.default />}>
                    Follow
                  </material_1.Button>
                </material_1.Box>
              </material_1.Box>
            </material_1.Grid>))}
        </material_1.Grid>
      </material_1.Box>
    </material_1.Card>);
}
exports.default = Feed;
//# sourceMappingURL=Feed.js.map
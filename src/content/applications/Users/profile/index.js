"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const Footer_1 = __importDefault(require("src/components/Footer"));
const material_1 = require("@mui/material");
const ProfileCover_1 = __importDefault(require("./ProfileCover"));
const RecentActivity_1 = __importDefault(require("./RecentActivity"));
const Feed_1 = __importDefault(require("./Feed"));
const PopularTags_1 = __importDefault(require("./PopularTags"));
const MyCards_1 = __importDefault(require("./MyCards"));
const Addresses_1 = __importDefault(require("./Addresses"));
function ManagementUserProfile() {
    const user = {
        savedCards: 7,
        name: 'Catherine Pike',
        coverImg: '/static/images/placeholders/covers/5.jpg',
        avatar: '/static/images/avatars/4.jpg',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage',
        jobtitle: 'Web Developer',
        location: 'Barcelona, Spain',
        followers: '465'
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>User Details - Management</title>
      </react_helmet_async_1.Helmet>
      <material_1.Container sx={{ mt: 3 }} maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12} md={8}>
            <ProfileCover_1.default user={user}/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={4}>
            <RecentActivity_1.default />
          </material_1.Grid>
          <material_1.Grid item xs={12} md={8}>
            <Feed_1.default />
          </material_1.Grid>
          <material_1.Grid item xs={12} md={4}>
            <PopularTags_1.default />
          </material_1.Grid>
          <material_1.Grid item xs={12} md={7}>
            <MyCards_1.default />
          </material_1.Grid>
          <material_1.Grid item xs={12} md={5}>
            <Addresses_1.default />
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = ManagementUserProfile;
//# sourceMappingURL=index.js.map
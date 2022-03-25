"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = __importDefault(require("@mui/material/Grid"));
require("./ThemeDetail.scss");
const Contents_1 = __importDefault(require("./Contents"));
const react_helmet_async_1 = require("react-helmet-async");
const react_redux_1 = require("react-redux");
function ThemeDetail() {
    const selectedTheme = (0, react_redux_1.useSelector)((state) => state.theme.selectedTheme);
    return (<>
            <react_helmet_async_1.Helmet>
                <title>Detalle tema</title>
            </react_helmet_async_1.Helmet>
            <Grid_1.default display={"flex"} direction="row" spacing={3} padding={3} className={"gridContainer"} container>
                <Grid_1.default sm={12} md={8} item>
                    <div className={"gridItem"}>
                        <Contents_1.default themeId={selectedTheme.id} themeName={selectedTheme.name}/>
                    </div>
                </Grid_1.default>
                <Grid_1.default sm={12} md={4} item>
                    <div className={"gridItem"}>
                        <div className={"graph-wrapper"}>
                            <iframe src={`https://hawk-eye-metabase.herokuapp.com/public/question/39949d2b-f27b-4013-a9c8-aeb5a33ddc25?theme_id=${selectedTheme.id}`} frameBorder="0" height={"100%"} width={"100%"} allowTransparency/>
                        </div>
                        <div className={"graph-wrapper"}>
                            <iframe src={`https://hawk-eye-metabase.herokuapp.com/public/question/39949d2b-f27b-4013-a9c8-aeb5a33ddc25?theme_id=${selectedTheme.id}`} frameBorder="0" height={"100%"} width={"100%"} allowTransparency/>
                        </div>
                    </div>
                </Grid_1.default>
            </Grid_1.default>
        </>);
}
exports.default = ThemeDetail;
//# sourceMappingURL=index.js.map
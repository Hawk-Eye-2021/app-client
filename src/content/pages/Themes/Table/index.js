"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_helmet_async_1 = require("react-helmet-async");
const material_1 = require("@mui/material");
const Table_1 = __importDefault(require("../../../../components/Table"));
const react_redux_1 = require("react-redux");
const AddThemeDialog_1 = __importDefault(require("./AddThemeDialog"));
const theme_1 = require("../../../../store/slice/theme");
const react_router_dom_1 = require("react-router-dom");
function ThemesTable() {
    const [openAddThemeModal, setOpenAddThemeModal] = (0, react_1.useState)(false);
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const themeState = (0, react_redux_1.useSelector)((state) => state.theme);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, theme_1.getThemesFromUser)(user.id));
    }, []);
    const handleDeleteTheme = (theme) => {
        dispatch((0, theme_1.deleteTheme)(user.id, theme));
    };
    const handleViewTheme = (theme) => {
        dispatch((0, theme_1.viewTheme)(theme));
        navigate('/app/theme/detail');
    };
    return (<>
            <react_helmet_async_1.Helmet>
                <title>Temas</title>
            </react_helmet_async_1.Helmet>
            <material_1.Container maxWidth="lg">
                <AddThemeDialog_1.default open={openAddThemeModal} onClose={() => setOpenAddThemeModal(false)}/>
                <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3} paddingTop={3} paddingBottom={3}>
                    <material_1.Grid item xs={12}>
                        <Table_1.default title={"Temas"} columns={[{ title: "ID", key: "id" }, { title: "Nombre", key: "name" }]} rows={themeState.userThemes} addAction={() => setOpenAddThemeModal(true)} deleteAction={handleDeleteTheme} viewAction={handleViewTheme}/>
                    </material_1.Grid>
                </material_1.Grid>
            </material_1.Container>
        </>);
}
exports.default = ThemesTable;
//# sourceMappingURL=index.js.map
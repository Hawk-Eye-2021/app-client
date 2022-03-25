"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const SidebarLayout_1 = __importDefault(require("src/layouts/SidebarLayout"));
const BaseLayout_1 = __importDefault(require("src/layouts/BaseLayout"));
const SuspenseLoader_1 = __importDefault(require("src/components/SuspenseLoader"));
const Loader = (Component) => (props) => (<react_1.Suspense fallback={<SuspenseLoader_1.default />}>
    <Component {...props}/>
  </react_1.Suspense>);
// Pages
const Overview = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/overview')))));
// Dashboards
const Crypto = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/dashboards/Crypto')))));
// Applications
const Messenger = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/applications/Messenger')))));
const Transactions = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/applications/Transactions')))));
const UserProfile = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/applications/Users/profile')))));
const UserSettings = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/applications/Users/settings')))));
// Components
const Buttons = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Buttons')))));
const Modals = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Modals')))));
const Accordions = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Accordions')))));
const Tabs = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Tabs')))));
const Badges = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Badges')))));
const Tooltips = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Tooltips')))));
const Avatars = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Avatars')))));
const Cards = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Cards')))));
const Forms = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Components/Forms')))));
// Status
const Status404 = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Status/Status404')))));
const Status500 = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Status/Status500')))));
const StatusComingSoon = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Status/ComingSoon')))));
const StatusMaintenance = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Status/Maintenance')))));
//Themes
const Themes = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Themes/Table')))));
const ThemeDetail = Loader((0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('src/content/pages/Themes/Detail')))));
const routes = [
    {
        path: '*',
        element: <BaseLayout_1.default />,
        children: [
            {
                path: '/',
                element: <Overview />
            },
            {
                path: "app",
                element: (<SidebarLayout_1.default />),
                children: [
                    {
                        path: '/themes',
                        element: <Themes />,
                    },
                    {
                        path: "/theme/detail",
                        element: <ThemeDetail />
                    }
                ]
            },
            {
                path: 'overview',
                element: (<react_router_dom_1.Navigate to="/" replace/>)
            },
            {
                path: 'status',
                children: [
                    {
                        path: '/',
                        element: (<react_router_dom_1.Navigate to="404" replace/>)
                    },
                    {
                        path: '404',
                        element: <Status404 />
                    },
                    {
                        path: '500',
                        element: <Status500 />
                    },
                    {
                        path: 'maintenance',
                        element: <StatusMaintenance />
                    },
                    {
                        path: 'coming-soon',
                        element: <StatusComingSoon />
                    },
                ]
            },
            {
                path: '*',
                element: <Status404 />
            },
        ]
    },
    {
        path: 'dashboards',
        element: (<SidebarLayout_1.default />),
        children: [
            {
                path: '/',
                element: (<react_router_dom_1.Navigate to="/dashboards/crypto" replace/>)
            },
            {
                path: 'crypto',
                element: <Crypto />
            },
            {
                path: 'messenger',
                element: <Messenger />
            }
        ]
    },
    {
        path: 'management',
        element: (<SidebarLayout_1.default />),
        children: [
            {
                path: '/',
                element: (<react_router_dom_1.Navigate to="/management/transactions" replace/>)
            },
            {
                path: 'transactions',
                element: <Transactions />
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '/',
                        element: (<react_router_dom_1.Navigate to="details" replace/>)
                    },
                    {
                        path: 'details',
                        element: <UserProfile />
                    },
                    {
                        path: 'settings',
                        element: <UserSettings />
                    },
                ]
            }
        ]
    },
    {
        path: 'components',
        element: (<SidebarLayout_1.default />),
        children: [
            {
                path: '/',
                element: (<react_router_dom_1.Navigate to="/components/buttons" replace/>)
            },
            {
                path: 'buttons',
                element: <Buttons />
            },
            {
                path: 'modals',
                element: <Modals />
            },
            {
                path: 'accordions',
                element: <Accordions />
            },
            {
                path: 'tabs',
                element: <Tabs />
            },
            {
                path: 'badges',
                element: <Badges />
            },
            {
                path: 'tooltips',
                element: <Tooltips />
            },
            {
                path: 'avatars',
                element: <Avatars />
            },
            {
                path: 'cards',
                element: <Cards />
            },
            {
                path: 'forms',
                element: <Forms />
            },
        ]
    }
];
exports.default = routes;
//# sourceMappingURL=router.js.map
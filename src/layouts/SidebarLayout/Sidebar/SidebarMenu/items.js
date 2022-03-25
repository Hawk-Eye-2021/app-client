"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DesignServicesTwoTone_1 = __importDefault(require("@mui/icons-material/DesignServicesTwoTone"));
const BrightnessLowTwoTone_1 = __importDefault(require("@mui/icons-material/BrightnessLowTwoTone"));
const MmsTwoTone_1 = __importDefault(require("@mui/icons-material/MmsTwoTone"));
const TableChartTwoTone_1 = __importDefault(require("@mui/icons-material/TableChartTwoTone"));
const AccountCircleTwoTone_1 = __importDefault(require("@mui/icons-material/AccountCircleTwoTone"));
const BallotTwoTone_1 = __importDefault(require("@mui/icons-material/BallotTwoTone"));
const BeachAccessTwoTone_1 = __importDefault(require("@mui/icons-material/BeachAccessTwoTone"));
const EmojiEventsTwoTone_1 = __importDefault(require("@mui/icons-material/EmojiEventsTwoTone"));
const FilterVintageTwoTone_1 = __importDefault(require("@mui/icons-material/FilterVintageTwoTone"));
const HowToVoteTwoTone_1 = __importDefault(require("@mui/icons-material/HowToVoteTwoTone"));
const LocalPharmacyTwoTone_1 = __importDefault(require("@mui/icons-material/LocalPharmacyTwoTone"));
const RedeemTwoTone_1 = __importDefault(require("@mui/icons-material/RedeemTwoTone"));
const SettingsTwoTone_1 = __importDefault(require("@mui/icons-material/SettingsTwoTone"));
const TrafficTwoTone_1 = __importDefault(require("@mui/icons-material/TrafficTwoTone"));
const VerifiedUserTwoTone_1 = __importDefault(require("@mui/icons-material/VerifiedUserTwoTone"));
const SummarizeTwoTone_1 = __importDefault(require("@mui/icons-material/SummarizeTwoTone"));
const menuItems = [
    {
        heading: '',
        items: [
            {
                name: 'Temas',
                link: '/app/themes',
                icon: SummarizeTwoTone_1.default
            }
        ]
    },
    {
        heading: '',
        items: [
            {
                name: 'Overview',
                link: '/overview',
                icon: DesignServicesTwoTone_1.default
            }
        ]
    },
    {
        heading: 'Dashboards',
        items: [
            {
                name: 'Crypto',
                link: '/dashboards/crypto',
                icon: BrightnessLowTwoTone_1.default
            },
            {
                name: 'Messenger',
                icon: MmsTwoTone_1.default,
                link: '/dashboards/messenger'
            },
        ]
    },
    {
        heading: 'Management',
        items: [
            {
                name: 'Transactions',
                icon: TableChartTwoTone_1.default,
                link: '/management/transactions'
            },
            {
                name: 'User Profile',
                icon: AccountCircleTwoTone_1.default,
                link: '/management/profile',
                items: [
                    {
                        name: 'Profile Details',
                        link: '/management/profile/details'
                    },
                    {
                        name: 'User Settings',
                        link: '/management/profile/settings'
                    }
                ]
            }
        ]
    },
    {
        heading: 'Components',
        items: [
            {
                name: 'Buttons',
                icon: BallotTwoTone_1.default,
                link: '/components/buttons'
            },
            {
                name: 'Modals',
                icon: BeachAccessTwoTone_1.default,
                link: '/components/modals'
            },
            {
                name: 'Accordions',
                icon: EmojiEventsTwoTone_1.default,
                link: '/components/accordions'
            },
            {
                name: 'Tabs',
                icon: FilterVintageTwoTone_1.default,
                link: '/components/tabs'
            },
            {
                name: 'Badges',
                icon: HowToVoteTwoTone_1.default,
                link: '/components/badges'
            },
            {
                name: 'Tooltips',
                icon: LocalPharmacyTwoTone_1.default,
                link: '/components/tooltips'
            },
            {
                name: 'Avatars',
                icon: RedeemTwoTone_1.default,
                link: '/components/avatars'
            },
            {
                name: 'Cards',
                icon: SettingsTwoTone_1.default,
                link: '/components/cards'
            },
            {
                name: 'Forms',
                icon: TrafficTwoTone_1.default,
                link: '/components/forms'
            },
        ]
    },
    {
        heading: 'Extra Pages',
        items: [
            {
                name: 'Status',
                icon: VerifiedUserTwoTone_1.default,
                link: '/status',
                items: [
                    {
                        name: 'Error 404',
                        link: '/status/404'
                    },
                    {
                        name: 'Error 500',
                        link: '/status/500'
                    },
                    {
                        name: 'Maintenance',
                        link: '/status/maintenance'
                    },
                    {
                        name: 'Coming Soon',
                        link: '/status/coming-soon'
                    }
                ]
            }
        ]
    }
];
exports.default = menuItems;
//# sourceMappingURL=items.js.map
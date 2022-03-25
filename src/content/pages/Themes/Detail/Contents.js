"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const prop_types_1 = __importDefault(require("prop-types"));
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
require("./ThemeDetail.scss");
const Label_1 = __importDefault(require("../../../../components/Label"));
const dummyContents = [
    {
        id: "1",
        title: "Argentina es el mejor pais del mundo segun el FMI",
        url: "Arial 12",
        sourceId: "1",
        sentiments: [{ themeId: "1", sentiment: "positive" }]
    },
    {
        id: "2",
        title: "Argentina figura en el top 3 de paises con mejores paisajes del mundo",
        url: "www.florayfauna.com",
        sourceId: "1",
        sentiments: [{ themeId: "1", sentiment: "positive" }]
    },
    {
        id: "3",
        title: "Argentina es el peor pais del mundo para vivir en pandemia",
        url: "Cualquier medio oficialista",
        sourceId: "1",
        sentiments: [{ themeId: "1", sentiment: "negative" }]
    },
    {
        id: "4",
        title: "Argentina es un pais con muchas provincias",
        url: "Blog de Mati",
        sourceId: "1",
        sentiments: [{ themeId: "1", sentiment: "neutral" }]
    },
];
function Contents({ themeId, themeName }) {
    const getSentimentLabel = (sentiments) => {
        const themeSentiment = sentiments.find(contentSentiments => contentSentiments.themeId === themeId);
        if (!sentiments.length || !themeSentiment)
            return null;
        const map = {
            negative: {
                text: 'Negativo',
                color: 'error'
            },
            positive: {
                text: 'Positivo',
                color: 'success'
            },
            neutral: {
                text: 'Neutral',
                color: 'warning'
            }
        };
        const { text, color } = map[themeSentiment.sentiment];
        return <Label_1.default color={color}>{text}</Label_1.default>;
    };
    return (<material_1.Card className={"contents-card"}>
            <material_1.CardHeader title={`Contenidos del tema - ${themeName}`}/>
            <material_1.Divider />
            <material_1.CardContent className={"card-body"}>
                {dummyContents.concat(dummyContents).concat(dummyContents).concat(dummyContents).concat(dummyContents).concat(dummyContents).map((content, index) => {
            return (<>
                                <Accordion_1.default key={`accordion-${index}`}>
                                    <AccordionSummary_1.default expandIcon={<ExpandMore_1.default />} aria-controls={`panel-content-${content.id}`} id={`panel-content-${content.id}`}>
                                        <div className={"contentTitle"}>
                                            <div className={"title"}>
                                                <material_1.Tooltip title={content.title}>
                                                    <Typography_1.default className={"truncate"}>
                                                        {content.title}
                                                    </Typography_1.default>
                                                </material_1.Tooltip>
                                            </div>
                                            <div className={"sentiment"}>
                                                <Typography_1.default>
                                                    {getSentimentLabel(content.sentiments)}
                                                </Typography_1.default>
                                            </div>
                                        </div>
                                    </AccordionSummary_1.default>
                                    <AccordionDetails_1.default>
                                        <Typography_1.default>
                                            {content.url}
                                        </Typography_1.default>
                                    </AccordionDetails_1.default>
                                </Accordion_1.default>
                                <material_1.Divider />
                            </>);
        })}
            </material_1.CardContent>
        </material_1.Card>);
}
Contents.propTypes = {
    themeId: prop_types_1.default.string.isRequired,
    themeName: prop_types_1.default.string.isRequired
};
exports.default = Contents;
//# sourceMappingURL=Contents.js.map
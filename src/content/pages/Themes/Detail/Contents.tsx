import {Card, CardContent, CardHeader, Divider, Tooltip} from "@mui/material"
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {ContentWithSentiment} from "../../../../dto/ContentDTO";
import {SourceDTO} from "../../../../dto/SourceDTO";
import "./ThemeDetail.scss";
import Label from "../../../../components/Label";
import {Link} from "react-router-dom";

function Contents({
                      themeName,
                      contents,
                      sources
                  }: { themeName: string, contents: ContentWithSentiment[], sources: SourceDTO[] }) {

    const getSourceLabel = (sourceId: string): JSX.Element => {

        return <Label>{sources.find(({id}) => id === sourceId).name}</Label>
    }

    const getSentimentLabel = (sentiment: string): JSX.Element => {


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

        const {text, color}: any = map[sentiment];

        return <Label color={color}>{text}</Label>;
    };

    return (
        <Card className={"contents-card"}>
            <CardHeader title={`Contenidos del tema - ${themeName}`}/>
            <Divider/>
            <CardContent className={"card-body"}>
                {
                    contents.map((content, index) => {
                        return (
                            <>
                                <div className={"content"} onClick={() => {console.log("asd"); window.open(content.url, "_blank")}}>
                                    <div className={"title"}>
                                            <Tooltip title={content.title}>
                                                <Typography className={"truncate"}>
                                                    {content.title}
                                                </Typography>
                                            </Tooltip>
                                    </div>
                                    <div className={"contentLabels"}>
                                        <div className={"source contentLabel"}>
                                            <Typography>
                                                {getSourceLabel(content.sourceId)}
                                            </Typography>
                                        </div>
                                        <div className={"sentiment contentLabel"}>
                                            <Typography>
                                                {getSentimentLabel(content.sentiment)}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <Divider/>
                            </>
                        )
                    })
                }
            </CardContent>
        </Card>
    )
}

Contents.propTypes = {
    themeId: PropTypes.string.isRequired,
    themeName: PropTypes.string.isRequired,
    contents: PropTypes.array,
    sources: PropTypes.array
}
export default Contents
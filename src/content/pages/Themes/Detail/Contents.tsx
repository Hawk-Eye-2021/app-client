import {
    Avatar,
    Card,
    CardHeader,
    Divider,
    List,
    ListItem,
    ListItemAvatar, ListItemIcon,
    ListItemText, Tooltip
} from "@mui/material"
import {ContentWithSentiment} from "../../../../dto/ContentDTO";
import {SourceDTO} from "../../../../dto/SourceDTO";
import "./ThemeDetail.scss";
import Text from "../../../../components/Text";
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es.json'
import PropTypes from "prop-types";
import ContentsFilter from './ContentsFilter';
import { useEffect, useState } from 'react';

TimeAgo.addDefaultLocale(es)

function Contents({
                      themeName,
                      contents,
                      sources
                  }: { themeName: string, contents: ContentWithSentiment[], sources: SourceDTO[] }) {

    const [filterSources, setFilterSources] = useState(sources.map(s => s.id));
    const [filterText, setFilterText] = useState('');
    const [filteredContents, setFilteredContents] = useState([]);


    useEffect(() => {
        setFilteredContents(contents.filter((content) => {
            // Is a content of the filtered sources
            // or title includes filtered text (is text is empty it is ignored)
            return filterSources.includes(content.sourceId) &&
              (filterText ? content.title.toLowerCase().includes(filterText.toLowerCase()) : true)
        }))
    }, [filterSources, filterText])

    const getSourceIcon = (sourceId: string): JSX.Element => {

        return <Avatar
          variant={'square'}
            src={sources.find(s => s.id === sourceId).icon}
        />
    }

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    const byDate = ((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })


    const getSentimentDisplay = (sentiment: string): { color: "error" | "success" | "warning", text: string } => {


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

        return map[sentiment];

    };

    return (
        <Card className={'contentsCard'}>
            <CardHeader title={`Contenidos del tema - ${themeName}`}
                        action={<ContentsFilter sources={sources}
                                                filterSources={filterSources}
                                                setFilterSources={setFilterSources}
                                                filterText={filterText}
                                                setFilterText={setFilterText}/>}/>
            <Divider/>
            <List disablePadding >
                {
                    filteredContents && filteredContents.length > 0 ?
                    filteredContents.sort(byDate).map(content => [
                            <ListItem button={true} sx={{py: 2}} onClick={() => window.open(content.url, "blank_")}>
                                <ListItemAvatar>
                                    {getSourceIcon(content.sourceId)}
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Text color="black">{content.title}</Text>}
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        fontWeight: 'bold',
                                        color: 'textPrimary',
                                        gutterBottom: true,
                                        noWrap: false
                                    }}
                                    secondary={<Text
                                        color={getSentimentDisplay(content.sentiment).color}>{toTitleCase(getSentimentDisplay(content.sentiment).text)}</Text>}
                                    secondaryTypographyProps={{variant: 'body2', noWrap: true}}
                                />
                                <Tooltip title={new Date(content.createdAt).toLocaleDateString() + " " + new Date(content.createdAt).toLocaleTimeString()}>
                                    <ListItemIcon>

                                        <ReactTimeAgo date={new Date(content.createdAt)} tooltip={false}/>

                                    </ListItemIcon>
                                </Tooltip>
                            </ListItem>,
                            <Divider/>
                        ]
                    ) :
                      <div className={"errorMessageContainer"}>
                          <span>No hay contenidos disponisbles</span>
                      </div>
                }
            </List>
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
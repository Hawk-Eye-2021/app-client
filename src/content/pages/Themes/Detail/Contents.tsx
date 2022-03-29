import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText, Switch,
    Tooltip
} from "@mui/material"
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {ContentWithSentiment} from "../../../../dto/ContentDTO";
import {SourceDTO} from "../../../../dto/SourceDTO";
import "./ThemeDetail.scss";
import Label from "../../../../components/Label";
import {Link} from "react-router-dom";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import Text from "../../../../components/Text";
import PhoneLockedTwoToneIcon from "@mui/icons-material/PhoneLockedTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {styled} from "@mui/material/styles";
const AvatarWrapperError = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const AvatarWrapperWarning = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);

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
                            // <>
                            //     <div className={"content"} onClick={() => {console.log("asd"); window.open(content.url, "_blank")}}>
                            //         <div className={"title"}>
                            //                 <Tooltip title={content.title}>
                            //                     <Typography className={"truncate"}>
                            //                         {content.title}
                            //                     </Typography>
                            //                 </Tooltip>
                            //         </div>
                            //         <div className={"contentLabels"}>
                            //             <div className={"source contentLabel"}>
                            //                 <Typography>
                            //                     {getSourceLabel(content.sourceId)}
                            //                 </Typography>
                            //             </div>
                            //             <div className={"sentiment contentLabel"}>
                            //                 <Typography>
                            //                     {getSentimentLabel(content.sentiment)}
                            //                 </Typography>
                            //             </div>
                            //         </div>
                            //     </div>
                            //     <Divider/>
                            // </>
                            <Card>
                                <CardHeader title="Account Security" />
                                <Divider />
                                <List disablePadding>
                                    <ListItem sx={{ py: 2 }}>
                                        <ListItemAvatar>
                                            <AvatarWrapperError>
                                                <LockTwoToneIcon fontSize="medium" />
                                            </AvatarWrapperError>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<Text color="black">2FA Authentication</Text>}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                fontWeight: 'bold',
                                                color: 'textPrimary',
                                                gutterBottom: true,
                                                noWrap: true
                                            }}
                                            secondary={<Text color="error">Disabled</Text>}
                                            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
                                        />
                                        <Switch
                                            edge="end"
                                            color="primary"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{ py: 2 }}>
                                        <ListItemAvatar>
                                            <AvatarWrapperSuccess>
                                                <PhoneLockedTwoToneIcon fontSize="medium" />
                                            </AvatarWrapperSuccess>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<Text color="black">Phone Verification</Text>}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                fontWeight: 'bold',
                                                color: 'textPrimary',
                                                gutterBottom: true,
                                                noWrap: true
                                            }}
                                            secondary={<Text color="success">Active</Text>}
                                            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
                                        />
                                        <Switch
                                            edge="end"
                                            color="primary"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{ py: 2 }}>
                                        <ListItemAvatar>
                                            <AvatarWrapperWarning>
                                                <EmailTwoToneIcon fontSize="medium" />
                                            </AvatarWrapperWarning>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<Text color="black">Recovery Email</Text>}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                fontWeight: 'bold',
                                                color: 'textPrimary',
                                                gutterBottom: true,
                                                noWrap: true
                                            }}
                                            secondary={<Text color="warning">Not completed</Text>}
                                            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
                                        />
                                        <Switch
                                            edge="end"
                                            color="primary"
                                        />
                                    </ListItem>
                                </List>
                            </Card>
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
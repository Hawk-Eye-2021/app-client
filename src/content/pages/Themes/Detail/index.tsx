import Grid from "@mui/material/Grid";
import "./ThemeDetail.scss"
import Contents from "./Contents";
import {Helmet} from "react-helmet-async";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {useEffect, useState} from "react";
import http from "../../../../http/http";
import {ContentWithSentiment} from "../../../../dto/ContentDTO";
import {SourceDTO} from "../../../../dto/SourceDTO";
import SuspenseLoader from "../../../../components/SuspenseLoader";

function ThemeDetail() {

    const selectedTheme = useSelector((state: RootState) => state.theme.selectedTheme);

    // contents
    const [contents, setContents]: [ContentWithSentiment[], ((value) => void)] = useState([])
    const getContents = () => {
        http
            .get(`/themes/${selectedTheme.id}/contents`)
            .then(({data}) => setContents(data))
    }
    useEffect(() => {
        getContents()
    }, [selectedTheme])


    // sources
    const [sources, setSources]: [SourceDTO[], ((value) => void)] = useState([])
    const getSources = () => {
        http.get('/sources')
            .then(({data}) => setSources(data))
    }
    useEffect(() => {
        getSources()
    }, [])

    // loading
    const loading = !sources.length || !contents.length
    return (
        <>
            <Helmet>
                <title>Detalle tema</title>
            </Helmet>
            {loading && <SuspenseLoader/>}
            {!loading &&
                <Grid
                    display={"flex"}
                    direction="row"
                    spacing={3}
                    padding={3}
                    className={"gridContainer"}
                    container
                >
                    <Grid sm={12} md={8} item>
                        <div className={"gridItem"}>
                            <Contents themeId={selectedTheme.id} themeName={selectedTheme.name} contents={contents}
                                      sources={sources}/>
                        </div>
                    </Grid>
                    <Grid sm={12} md={4} item>
                        <div className={"gridItem"}>
                            <div className={"graph-wrapper"}>
                                <iframe
                                    src={`https://hawk-eye-metabase.herokuapp.com/public/question/39949d2b-f27b-4013-a9c8-aeb5a33ddc25?theme_id=${selectedTheme.id}`}
                                    frameBorder="0"
                                    height={"100%"}
                                    width={"100%"}
                                    allowTransparency
                                />
                            </div>
                            <div className={"graph-wrapper"}>
                                <iframe
                                    src={`https://hawk-eye-metabase.herokuapp.com/public/question/39949d2b-f27b-4013-a9c8-aeb5a33ddc25?theme_id=${selectedTheme.id}`}
                                    frameBorder="0"
                                    height={"100%"}
                                    width={"100%"}
                                    allowTransparency
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            }
        </>

    )
}


export default ThemeDetail
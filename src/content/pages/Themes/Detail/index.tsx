import Grid from "@mui/material/Grid";
import "./ThemeDetail.scss"
import Contents from "./Contents";
import {Helmet} from "react-helmet-async";
import {useEffect, useState} from "react";
import http from "../../../../http/http";
import {ContentWithSentiment} from "../../../../dto/ContentDTO";
import {SourceDTO} from "../../../../dto/SourceDTO";
import SuspenseLoader from "../../../../components/SuspenseLoader";
import {useParams} from "react-router";

function ThemeDetail() {

    let params = useParams();
    let themeId = params.themeId

    //theme
    const [theme, setTheme] = useState(undefined)
    const getTheme = () => {
        http
            .get(`/themes/${themeId}`)
            .then(({data}) => setTheme(data))
    }

    useEffect(() => {
        getTheme()
    }, [themeId])

    // contents
    const [contents, setContents]: [ContentWithSentiment[], ((value) => void)] = useState([])
    const getContents = () => {
        http
            .get(`/themes/${themeId}/contents`)
            .then(({data}) => setContents(data))
    }
    useEffect(() => {
        getContents()
    }, [themeId])


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
    const loading = !sources.length || !contents.length || !theme
    return (
        <>
            <Helmet>
                <title>Detalle tema</title>
            </Helmet>
            {loading && <SuspenseLoader/>}
            {!loading &&
            <Grid container spacing={3} padding={3}>
                <Grid item width={'100%'} className={'contentsContainer'}>
                    <Contents themeId={themeId} themeName={theme.name} contents={contents}
                              sources={sources}/>
                </Grid>
                <Grid item className={'metabaseContainer'}>
                    <iframe
                        src={`http://hawk-eye-metabase.herokuapp.com/public/dashboard/c5ecfb05-d03d-4eb7-b1ae-5516450e89ad?theme_id=${themeId}#hide_parameters=theme_id&titled=false`}
                        frameBorder={"0"}
                        allowTransparency
                        style={{width: '100%', height: '100%'}}
                    />
                </Grid>
            </Grid>
            }
        </>

    )
}


export default ThemeDetail
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {Container, Grid} from "@mui/material";
import MyTable from "../../../../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import AddThemeDialog from "./AddThemeDialog";
import {deleteTheme, getThemesFromUser, viewTheme} from "../../../../store/slice/theme";
import { useNavigate } from "react-router-dom";

function ThemesTable() {

    const [openAddThemeModal, setOpenAddThemeModal] = useState<boolean>(false);

    const user = useSelector((state: RootState) => state.user.user);
    const themeState = useSelector((state: RootState) => state.theme);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getThemesFromUser(user.id))
    }, [dispatch, user.id])

    const handleDeleteTheme = (theme) => {
        dispatch(deleteTheme(user.id, theme))
    }

    const handleViewTheme = (theme) => {
        dispatch(viewTheme(theme));
        navigate(`/app/theme/${theme.id}`)
    }

    return (
        <>
            <Helmet>
                <title>Temas</title>
            </Helmet>
            <Container maxWidth="lg">
                <AddThemeDialog open={openAddThemeModal}
                                onClose={() => setOpenAddThemeModal(false)}/>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                    paddingTop={3}
                    paddingBottom={3}
                >
                    <Grid item xs={12}>
                        <MyTable title={"Temas"}
                                 columns={[
                                    {title: "ID", key: "id"},
                                    {title: "Nombre", key: "name"},
                                    {title: "# Positivos", key: "positive", color: 'success'},
                                    {title: "# Neutrales", key: "neutral", color: 'warning'},
                                    {title: "# Negativos", key: "negative", color: 'error'},
                                 ]}
                                 rows={themeState.userThemes}
                                 filterRows={["name"]}
                                 addAction={() => setOpenAddThemeModal(true)}
                                 deleteAction={handleDeleteTheme}
                                 viewAction={handleViewTheme}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ThemesTable
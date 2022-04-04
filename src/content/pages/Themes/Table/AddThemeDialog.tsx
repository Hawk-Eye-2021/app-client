import MyDialog from "../../../../components/Dialog";
import ThemeAutocomplete, {ThemeOptionType} from "./ThemeAutocomplete";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import * as React from "react";
import {postTheme} from "../../../../store/slice/theme";
import {useEffect, useState} from "react";
import SuspenseLoader from "../../../../components/SuspenseLoader";


function AddThemeDialog({open, onClose}) {
    const user = useSelector((state: RootState) => state.user.user);
    const [value, setValue] = useState<ThemeOptionType | null>(null);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(false)
        setValue(null)
    }, [open])

    const addThemeForUser = () => {
        dispatch(postTheme(user.id, value, onClose, setLoading))
    }

    const onAutocompleteChange = (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                name: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
                name: newValue.inputValue,
            });
        } else {
            setValue(newValue);
        }
    }

    return (
        <MyDialog title={"Agregar Tema"}
                  onClose={onClose}
                  open={open}
                  width={"sm"}
                  actions={
                      <>

                          {!loading && <>
                              <Button onClick={onClose} color={"secondary"}>
                                  Cancelar
                              </Button>
                              <Button onClick={addThemeForUser} disabled={!value}>
                                  Agregar
                              </Button>
                          </>}

                      </>
                  }
        >
            {loading && <SuspenseLoader/>}
            {!loading &&  <ThemeAutocomplete onChange={onAutocompleteChange}
                                             user={user}
                                             value={value}/> }
        </MyDialog>
    )
}

export default AddThemeDialog
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewTheme = exports.deleteTheme = exports.postTheme = exports.getThemesFromUser = exports.theme = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const http_1 = __importDefault(require("../../http/http"));
const SnackbarUtils_1 = __importDefault(require("src/utils/SnackbarUtils"));
exports.theme = (0, toolkit_1.createSlice)({
    name: 'theme',
    initialState: {
        userThemes: [],
        getUserThemesStatus: 'loading',
        selectedTheme: { id: "1", name: "Mauricio Macri" }
    },
    reducers: {
        setUserThemes: (state, action) => {
            state.userThemes = action.payload;
        },
        addUserTheme: (state, action) => {
            state.userThemes.push(action.payload);
        },
        removeUserTheme: (state, action) => {
            state.userThemes = state.userThemes.filter((theme) => theme.id !== action.payload);
        },
        setUserThemesStatus: (state, action) => {
            state.getUserThemesStatus = action.payload;
        },
        selectTheme: (state, action) => {
            state.selectedTheme = action.payload;
        }
    }
});
const getThemesFromUser = (id) => (dispatch) => {
    http_1.default.get(`/users/${id}/themes`)
        .then(res => {
        dispatch(exports.theme.actions.setUserThemes(res.data));
        dispatch(exports.theme.actions.setUserThemesStatus('success'));
    })
        .catch(() => {
        dispatch(exports.theme.actions.setUserThemesStatus('error'));
    });
};
exports.getThemesFromUser = getThemesFromUser;
const postTheme = (userId, value, closeModal) => (dispatch) => {
    if (value && value.id) {
        http_1.default.post(`/users/${userId}/themes`, { themeId: value.id })
            .then(() => {
            dispatch(exports.theme.actions.addUserTheme({ ...value }));
            closeModal();
            SnackbarUtils_1.default.success("Se agregó el tema exitosamente!");
        })
            .catch(() => {
            SnackbarUtils_1.default.error("Ocurrió un error al agregar el tema!");
        });
    }
    else {
        http_1.default.post(`/themes`, { name: value.name })
            .then(res => {
            http_1.default.post(`/users/${userId}/themes`, { themeId: res.data.id })
                .then(() => {
                dispatch(exports.theme.actions.addUserTheme(res.data));
                closeModal();
                SnackbarUtils_1.default.success("Se agregó el tema exitosamente!");
            })
                .catch(() => {
                SnackbarUtils_1.default.error("Ocurrió un error al agregar el tema!");
            });
        })
            .catch(() => {
            SnackbarUtils_1.default.error("Ocurrió un error al agregar el tema!");
        });
    }
};
exports.postTheme = postTheme;
const deleteTheme = (userId, themeToDelete) => (dispatch) => {
    http_1.default.delete(`/users/${userId}/themes/${themeToDelete.id}`)
        .then(() => {
        dispatch(exports.theme.actions.removeUserTheme(themeToDelete.id));
        SnackbarUtils_1.default.success(`Se borró el tema ${themeToDelete.name}`);
    })
        .catch(() => {
        SnackbarUtils_1.default.error(`Ocurrió un error al borrar el tema ${themeToDelete.name}`);
    });
};
exports.deleteTheme = deleteTheme;
const viewTheme = (selectedTheme) => (dispatch) => {
    dispatch(exports.theme.actions.selectTheme(selectedTheme));
};
exports.viewTheme = viewTheme;
//# sourceMappingURL=theme.js.map
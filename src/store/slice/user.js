"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.user = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState: {
        user: { id: "1", name: "Matias Miodosky" }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        }
    }
});
//# sourceMappingURL=user.js.map
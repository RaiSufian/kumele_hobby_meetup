import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mode: false,
}
export const styleModer = createSlice({
    name: "mode",
    initialState,
    reducers: {

        lightMode: (state, action) => {
            state.mode = false;
        },
        darkMode: (state, action) => {
            state.mode = true;
        }
    },
})

export const {lightMode,  darkMode} = styleModer.actions;
export default styleModer.reducer;

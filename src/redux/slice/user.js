import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status: 0,
}

export const userData = createSlice({
    name: "user",
    initialState,
    reducers: {

        updateLevel: (state, action) => {
            console.log("status is update");
            state.status = action.payload;
        },
    },

});
export const { updateLevel } = userData.actions;
export default userData.reducer;
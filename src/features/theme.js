import { createSlice } from '@reduxjs/toolkit'

const color = ""

const themeSlice = createSlice({
    name: "theme",
    initialState: { value: color },
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
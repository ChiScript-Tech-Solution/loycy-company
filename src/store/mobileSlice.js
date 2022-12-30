import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isMenuOn: false,
}

const menuSlice = createSlice({
    name: 'mobilemenu',
    initialState,
    reducers: {
        openMenu: (state, action) => {
            state.isMenuOn = true;
        },

        closeMenu: (state, action) => {
            state.isMenuOn = false;
        }
    },
});

export const {openMenu, closeMenu} = menuSlice.actions;
export const getMenuStatus = (state) => state.mobilemenu.isMenuOn;
export default menuSlice.reducer;
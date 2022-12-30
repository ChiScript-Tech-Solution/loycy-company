
import { configureStore } from '@reduxjs/toolkit';
import mobilemenuReducer from "./mobileSlice";

const store = configureStore ({
    reducer : {
        mobilemenu: mobilemenuReducer,
    }
});


export default store
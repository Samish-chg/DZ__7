import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import slice from './Slice'
export const store = configureStore({
    reducer:{
        slice
    }
})
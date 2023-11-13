import{configureStrore}from "@reduxjs/toolkit";
import authSlice from "./authSlice";
export default configureStrore({
    reducer:{
        auth:authSlice

    }
})
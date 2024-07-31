import { createSlice } from "@reduxjs/toolkit";
import data from "../Database/db";

const product=createSlice({
    name:'product',
    initialState:data,
    reducers:{

    }
})

export default product.reducer
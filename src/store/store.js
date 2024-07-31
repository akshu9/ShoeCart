import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import productReducer from './product'
import userReducer from './user'
import toggleReducer from './theme'
const store=configureStore({
    reducer:{
        cart:cartReducer,
        product: productReducer,
        user:userReducer,
        theme:toggleReducer
    }
    
})
export default store
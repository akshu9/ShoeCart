import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const slice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const existItem=state.find(item=>item.id===action.payload.id)
            if(existItem){
                existItem.quantity+=1

            }
            else{
            console.log(action.payload)
            state.push({...action.payload, quantity:1})
        }},
        removeFromCart(state,action){
            const existItem=state.find(item=>item.id===action.payload)
            if(existItem){
                if(existItem.quantity>1){
                    existItem.quantity-=1
                }
                    
                else{
                   return state.filter((items)=>items.id!==action.payload)
                }

    }
    }

    }
})

export const  {addToCart,removeFromCart}=slice.actions
export default slice.reducer
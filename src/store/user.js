import { createSlice } from "@reduxjs/toolkit";

const user=null

const userSlice=createSlice({
    name:'user',
    initialState:[],
    setUser(state, action) {
        state.user = action.payload;
      },
      clearUser(state) {
        state.user = null;
      },

})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
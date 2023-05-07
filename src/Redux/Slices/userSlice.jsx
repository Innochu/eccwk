import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: { 
        login: false, 
        userInfo: {}
    },
    reducers:{
        checkLogin: (state) =>{
            state.login = !state.login
        },
        getUser: (state, actions) =>{
            state.userInfo = actions.payload 
        }
    }
})

export const {checkLogin, getUser} = userSlice.actions

export default userSlice.reducer

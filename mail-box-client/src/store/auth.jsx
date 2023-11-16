import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')

const initialState = {
    token: token,
    isLoggedIn: !!token
}

const authSlice = createSlice({
    name:'auth',
    initialState: initialState,
    reducers:{
        login(state,action){
            state.token = action.payload
            state.isLoggedIn = true
        },
        logout(state){
            state.token = '',
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const mailSlice = createSlice({
    name:'mail',
    initialState:initialState,
    reducers:{
        addInitial(state,action){
            state.items = action.payload
        }
    }
})

export const mailActions = mailSlice.actions
export default mailSlice.reducer
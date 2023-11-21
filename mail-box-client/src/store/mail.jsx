import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    currentItem: {}
}

const mailSlice = createSlice({
    name:'mail',
    initialState:initialState,
    reducers:{
        addInitial(state,action){
            state.items = action.payload
        },
        updateItems(state,action){
            const ItemIndex = state.items.findIndex(action.payload)
            const updatedItem = {...state.items[ItemIndex],isRead:true}
            state.items[ItemIndex] = updatedItem
        },
        addCurrent(state,action){
            state.currentItem = action.payload
        },
        deleteItems(state,action){
            state.items = state.items.filter(item=>item._id!=action.payload)
        }
    }
})

export const mailActions = mailSlice.actions
export default mailSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"searchTerm",
    initialState: {value: ""},
    reducers:{
        setSearchTerm:(state,action)=>{
            state.value = action.payload;
        }
    }
})


export const { setSearchTerm } = searchSlice.actions

export default searchSlice.reducer
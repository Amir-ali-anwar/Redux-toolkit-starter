import { createSlice } from '@reduxjs/toolkit';

const initialState={
    cart:[],
    loading:false,
    amount:0,
    total:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearcart:(state)=>{
            state.cart=[]
        }
    }
})
export const {clearcart} = cartSlice.actions
export default cartSlice.reducer;
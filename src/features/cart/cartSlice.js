import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartdata from '../../cartItems';
const url = 'https://course-api.com/react-useReducer-cart-project';
const initialState={
    cart:cartdata,
    loading:false,
    amount:4,
    total:0
}
export const getCartItems=createAsyncThunk(

)
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearcart:(state)=>{
            state.cart=[]
        },
        removeItem:(state,action)=>{
           const Itemid= action.payload;
           state.cart= state.cart.filter((item)=>item.id !== Itemid) 
        },
        increasecart:(state,action)=>{
        const Itemamount= state.cart.find((item)=>item.id ===action.payload)
        Itemamount.amount = Itemamount.amount + 1;
        },
        decreasecart:(state,action)=>{
            const id=action.payload;
            const Itemamount= state.cart.find((item)=>item.id ===id)
            Itemamount.amount = Itemamount.amount - 1; 
        },
        calculateTotals:(state)=>    {
        state.cart.reduce((acc,curr)=>{
                acc.amount+=curr.amount;
                acc.total+=curr.amount*curr.price
                {
                  state.amount=acc.amount
                  state.total=acc.total  
                }           
               return acc; 
            },{amount:0,total:0})
        },
        
    }
})
export const {clearcart,removeItem,increasecart,decreasecart,calculateTotals} = cartSlice.actions
export default cartSlice.reducer;
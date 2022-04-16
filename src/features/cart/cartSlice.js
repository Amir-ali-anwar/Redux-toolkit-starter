import { createSlice } from '@reduxjs/toolkit';
import cartdata from '../../cartItems';
const initialState={
    cart:cartdata,
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
        }
    }
})
export const {clearcart,removeItem,increasecart,decreasecart} = cartSlice.actions
export default cartSlice.reducer;
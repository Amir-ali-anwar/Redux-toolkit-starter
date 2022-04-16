import { createSlice } from '@reduxjs/toolkit';
import cartdata from '../../cartItems';
const initialState={
    cart:cartdata,
    loading:false,
    amount:0,
    total:0
}
console.log(initialState)
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
        // console.log(Itemamount)   
        },
        decreasecart:(state,action)=>{
            const id=action.payload;
            const Itemamount= state.cart.find((item)=>item.id ===id)
            Itemamount.amount = Itemamount.amount - 1; 
            // console.log(Itemamount)
        },
        calculateTotals:(state)=>    {
            let { amount, total }= state.cart.reduce((acc,curr)=>{
                acc.amount+=curr.amount;
                acc.total=curr.amount*curr.price
                console.log({
                    amount:acc.amount,
                    total:acc.total
                })
               return acc; 
            },{amount:state.amount,total:state.total})
        }
    }
})
export const {clearcart,removeItem,increasecart,decreasecart,calculateTotals} = cartSlice.actions
export default cartSlice.reducer;
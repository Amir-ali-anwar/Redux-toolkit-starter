import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import cartdata from '../../cartItems';
const url = 'https://course-api.com/react-useReducer-cart-project';
const initialState = {
    cart: [],
    loading: false,
    amount: 4,
    total: 0
}
export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const resp = await axios(url);
        // console.log(resp)
        return resp.data
    } catch (error) {
        console.log(error)
    }
})
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearcart: (state) => {
            state.cart = []
        },
        removeItem: (state, action) => {
            const Itemid = action.payload;
            state.cart = state.cart.filter((item) => item.id !== Itemid)
        },
        increasecart: (state, action) => {
            const Itemamount = state.cart.find((item) => item.id === action.payload)
            Itemamount.amount = Itemamount.amount + 1;
        },
        decreasecart: (state, action) => {
            const { id } = action.payload;

            state.cart.forEach((item) => {
                if (item.id == id) {
                    console.log(item)
                    item.amount = item.amount - 1;
                }
            })
        },
        calculateTotals: (state) => {
            //     let amount = 0;
            //     let total = 0;
            //     state.cart.forEach((item) => {
            //         amount += item.amount;
            //         total += item.amount * item.price;
            //     });
            //     state.amount = amount;
            //     state.total = total;
            // }
            if (state.cart.length == 0) {
                state.amount = 0
                state.total = 0
            }
            state.cart.reduce((acc, curr) => {
                acc.amount += curr.amount;
                acc.total += curr.amount * curr.price

                {
                    state.amount = acc.amount
                    state.total = acc.total
                }
                return acc;
            }, { amount: 0, total: 0 })
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.loading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            // console.log(action);
            state.loading = false;
            state.cart = action.payload;
        },
        [getCartItems.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
        },
    },
})
export const { clearcart, removeItem, increasecart, decreasecart, calculateTotals } = cartSlice.actions
export default cartSlice.reducer;
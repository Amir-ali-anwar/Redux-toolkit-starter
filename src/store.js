import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalSlice from './features/modal/Modalslice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});

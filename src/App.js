import React from "react";
import Navbar from "./components/navbar";
import CartContainer from "./components/CartContainer";
import {useSelector,useDispatch} from 'react-redux'
import {calculateTotals} from './features/cart/cartSlice'
function App() {
  const  {cart}=useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  React.useEffect(() => {
    dispatch(calculateTotals())
  }, [cart])
  return (
    <>
    <Navbar />
    <CartContainer/>
    </>
  )
}
export default App;

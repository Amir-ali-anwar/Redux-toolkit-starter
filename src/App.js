import React from "react";
import Navbar from "./components/navbar";
import CartContainer from "./components/CartContainer";
import {useSelector,useDispatch} from 'react-redux'
import {calculateTotals,getCartItems} from './features/cart/cartSlice'
import Modal from './components/Modal'
function App() {
  const  {cart,loading}=useSelector((state)=>state.cart)
  const {isOPen}= useSelector((state)=>state.modal)
  const dispatch=useDispatch();
  React.useEffect(() => {
    dispatch(calculateTotals())
  }, [cart])
  React.useEffect(()=>{
    
    dispatch(getCartItems())
  },[])
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
    {isOPen && <Modal/>}
    <Navbar />
    <CartContainer/>
    </>
  )
}
export default App;

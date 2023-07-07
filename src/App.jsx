import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import NavBar from "./components/navbar/NavBar";
import CartContainer from "./components/cart/CartContainer";
import CartFooter from "./components/cart/CartFooter";
import Modal from './components/Modal';

import './styles/style.scss';

import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {

  // Obtiene acceso a los items del cart
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  // Obtiene los items del backend
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    // Recalcula los totales al cambiar cartItems
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if(isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {isOpen && <Modal/>}
      <NavBar/>
      <CartContainer/>
      <CartFooter/>
    </>

  )
}

export default App;
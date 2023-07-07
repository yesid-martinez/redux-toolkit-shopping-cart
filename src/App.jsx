import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import NavBar from "./components/navbar/NavBar";
import CartContainer from "./components/cart/CartContainer";
import CartFooter from "./components/cart/CartFooter";
import Modal from './components/Modal';

import './styles/style.scss';
import { calculateTotals } from "./features/cart/cartSlice";

function App() {

  // Obtiene acceso a los items del cart
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Recalcula los totales al cambiar cartItems
    dispatch(calculateTotals());
  }, [cartItems, dispatch])

  return (
    <>
      <Modal/>
      <NavBar/>
      <CartContainer/>
      <CartFooter/>
    </>

  )
}

export default App;
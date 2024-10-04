import { useState, useContext } from 'react';


import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';
import CartContext, { CartDataContextProvider } from '../../data/cart_context';

function MainHeader() {
  const cartContext = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartContext.cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={closeCartModalHandler} />}
    </>
  );
}

export default MainHeader;

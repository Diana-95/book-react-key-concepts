import { createContext, useState } from 'react';

const CartContext = createContext( {
    cartItems: [],
    addItem: () => {},
    removeItem: () => {}                
} );
export default CartContext;

export function CartDataContextProvider ( {children} ) {
    const [cartItems, setCartItems] = useState([]);
    
    function addItem (item) {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    }

    function removeItem (itemId) {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    }

    const cartCtxValue = {
        cartItems: cartItems,
        addItem: addItem,
        removeItem: removeItem
    }

    return (
        <CartContext.Provider value={cartCtxValue}>
            {children}
        </CartContext.Provider>
    )
}
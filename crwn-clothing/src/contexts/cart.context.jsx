import { createContext, useState } from "react";
import CartItem from "../components/cart-item/cart-item.component";

const addCartItem = (cartItems, productToAdd) => {
    if (cartItems.includes(productToAdd)) {
       const found = productToAdd.find(cartItems);
       if (found === true) {

       }
       return cartItems.map(found);
    }
    
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const value = {isCartOpen,setIsCartOpen}

    
    
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}
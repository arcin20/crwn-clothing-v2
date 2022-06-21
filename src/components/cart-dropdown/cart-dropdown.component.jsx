import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';
import Button from '../button/button-component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map(( item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>your cart is empty</EmptyMessage>
                    )
                }

               
            </CartItemsContainer>
            
            <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;
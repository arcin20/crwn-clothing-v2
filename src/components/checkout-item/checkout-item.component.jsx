import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';


import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);
  const  clearItemHandler  = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan >{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={() => removeItemToCart(cartItem)}>
            &#10094;
        </Arrow>
           <Value> {quantity}</Value>
        <Arrow onClick={() => addItemToCart(cartItem)}>
        &#10095;
        </Arrow>
      </Quantity>
    
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
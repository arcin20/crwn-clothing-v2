import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CartItem from '../../components/cart-item/cart-item.component';


const Checkout = (product) => {
    const { cartItems} = useContext(CartContext);
    const initialVal = 0;
    
    const sum = cartItems.reduce((prev, item) => prev + item.price && item.price * item.quantity, initialVal )
    
    return (
        <div className='cart-items'>
        <h1>
            Hier kommen Sie zum Warenkorb
        </h1>
        {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />      
            ,<span>
            <img src={item.imageUrl} alt={`${item.name}`} />
            {item.name} 
            {item.price}
            {item.quantity}
           {console.log(   ` "beträgt"${item.price}`)}  
           
            </span> 
        )
        
        )} 
        <span>Die Summe :{sum}</span>
        
        {console.log({sum})}
        </div>
    )
}

export default Checkout;
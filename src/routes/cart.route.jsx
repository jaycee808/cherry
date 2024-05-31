import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((product, index) => (
                    <div key={index} className="cart-product">
                        <h2>{product.product_name}</h2>
                        <p className="product-tagline">{product.tagline}</p>
                        <p className="product-tagline">{product.description}</p>
                        <button
                            className="remove-button"
                            onClick={() => removeFromCart(product.id)}>
                            Remove from Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
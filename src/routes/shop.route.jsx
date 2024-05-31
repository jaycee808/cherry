import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Products from '../data/products.json';

const Shop = () => {
    const { addToCart } = useContext(CartContext);

    const renderProduct = (product, index) => (
        <div key={index} className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-title">{product.name}</h2>
            <p className="product-tagline">{product.tagline}</p>
            <p className="product-description">{product.description}</p>
            {product.colour && (
                <p className="product-colour">
                    <strong>Colour:</strong> {product.colour}
                </p>
            )}
            {product.colours && (
                <ul className="product-colours">
                    {product.colours.map((colour, i) => (
                        <li key={i} className="product-colour">
                            {colour}
                        </li>
                    ))}
                </ul>
            )}
            <p className="product-price">
                <strong>Price:</strong> {product.price}
            </p>
            <button
                className="addToCartBtn"
                onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );

    const renderCollection = (type) => (
        <div className="collection">
            <h2 className="collection-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {Products.products.filter(product => product.type === type).map(renderProduct)}
        </div>
    );

    return (
        <div className="shop-page">
            <h1 className="shop-title">Shop</h1>
            {renderCollection('lipstick')}
            {renderCollection('eyeshadow')}
            {renderCollection('mascara')}
        </div>
    );
}

export default Shop;
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Products from '../data/products.json';

function Shop() {
    const { addToCart } = useContext(CartContext);

    const renderProduct = (product, index) => (
        <div key={index} className="product-container">
            <h2 className="product-title">{product.product_name}</h2>
            <p className="product-tagline">{product.tagline}</p>
            <p className="product-description">{product.description}</p>
            {product.colour_options && (
                <ul className="product-options">
                    {product.colour_options.map((colour, i) => (
                        <li key={i} className="product-option">
                            <strong>{colour.name}:</strong> {colour.description}
                        </li>
                    ))}
                </ul>
            )}
            {product.shades && (
                <ul className="product-options">
                    {product.shades.map((shade, i) => (
                        <li key={i} className="product-option">
                            <strong>{shade.name}:</strong> {shade.description}
                        </li>
                    ))}
                </ul>
            )}
            {product.features && (
                <ul className="product-features">
                    {product.features.map((feature, i) => (
                        <li key={i} className="product-feature">{feature}</li>
                    ))}
                </ul>
            )}
            {product.options && (
                <ul className="product-options">
                    {product.options.map((option, i) => (
                        <li key={i} className="product-option">{option}</li>
                    ))}
                </ul>
            )}
            <button
                className="addToCartBtn"
                onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );

    const renderLipCollection = () => (
        <div className="collection">
            <h2 className="collection-title">Lips</h2>
            {Products.lip_collection.map(renderProduct)}
        </div>
    );

    const renderEyeCollection = () => (
        <div className="collection">
            <h2 className="collection-title">Eyes</h2>
            {Products.eye_collection.map(renderProduct)}
        </div>
    );

    return (
        <div className="shop-page">
            <h1 className="shop-title">Shop</h1>
            {renderLipCollection()}
            {renderEyeCollection()}
        </div>
    );
}

export default Shop;
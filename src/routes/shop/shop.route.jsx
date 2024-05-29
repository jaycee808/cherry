import React from 'react';
import Products from '../../products.json';

function Shop() {
    const renderLipCollection = () => {
        return Products.lip_collection.map((product, index) => (
            <div key={index} className="product">
                <h2>{product.product_name}</h2>
                <p><em>{product.tagline}</em></p>
                <p>{product.description}</p>
                <ul>
                    {product.colour_options.map((colour, i) => (
                        <li key={i}>
                            <strong>{colour.name}:</strong> {colour.description}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    const renderEyeCollection = () => {
        return Products.eye_collection.map((product, index) => (
            <div key={index} className="product">
                <h2>{product.product_name}</h2>
                <p><em>{product.tagline}</em></p>
                <p>{product.description}</p>
                {product.shades && (
                    <ul>
                        {product.shades.map((shade, i) => (
                            <li key={i}>
                                <strong>{shade.name}:</strong> {shade.description}
                            </li>
                        ))}
                    </ul>
                )}
                {product.features && (
                    <ul>
                        {product.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                )}
                {product.options && (
                    <ul>
                        {product.options.map((option, i) => (
                            <li key={i}>{option}</li>
                        ))}
                    </ul>
                )}
            </div>
        ));
    };

    return (
        <div>
            <h1>Shop</h1>
            <div>
                <h2>Lips</h2>
                {renderLipCollection()}
            </div>
            <div>
                <h2>Eyes</h2>
                {renderEyeCollection()}
            </div>
        </div>
    );
}

export default Shop;
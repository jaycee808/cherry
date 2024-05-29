import React from 'react';
import Products from '../../products.json';

function Shop() {
    const renderLipCollection = () => {
        return Products.lip_collection.map((product, index) => (
            <div key={index} className="product bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">{product.product_name}</h2>
                <p className="italic mb-2">{product.tagline}</p>
                <p className="mb-4">{product.description}</p>
                <ul className="list-disc pl-6">
                    {product.colour_options.map((colour, i) => (
                        <li key={i} className="mb-1">
                            <strong>{colour.name}:</strong> {colour.description}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    const renderEyeCollection = () => {
        return Products.eye_collection.map((product, index) => (
            <div key={index} className="product bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">{product.product_name}</h2>
                <p className="italic mb-2">{product.tagline}</p>
                <p className="mb-4">{product.description}</p>
                {product.shades && (
                    <ul className="list-disc pl-6 mb-4">
                        {product.shades.map((shade, i) => (
                            <li key={i} className="mb-1">
                                <strong>{shade.name}:</strong> {shade.description}
                            </li>
                        ))}
                    </ul>
                )}
                {product.features && (
                    <ul className="list-disc pl-6 mb-4">
                        {product.features.map((feature, i) => (
                            <li key={i} className="mb-1">{feature}</li>
                        ))}
                    </ul>
                )}
                {product.options && (
                    <ul className="list-disc pl-6 mb-4">
                        {product.options.map((option, i) => (
                            <li key={i} className="mb-1">{option}</li>
                        ))}
                    </ul>
                )}
            </div>
        ));
    };

    return (
        <div className="bg-pink-100 min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">Shop</h1>
            <div>
                <h2 className="text-3xl font-semibold text-pink-600 mb-6">Lips</h2>
                {renderLipCollection()}
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-pink-600 mb-6">Eyes</h2>
                {renderEyeCollection()}
            </div>
        </div>
    );
}

export default Shop;
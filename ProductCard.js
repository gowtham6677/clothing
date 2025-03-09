function ProductCard({ product, onAddToCart }) {
    try {
        const [selectedSize, setSelectedSize] = React.useState('');
        const [error, setError] = React.useState('');

        const handleAddToCart = () => {
            if (!selectedSize) {
                setError('Please select a size');
                return;
            }
            onAddToCart(product, selectedSize);
            setError('');
        };

        return (
            <div data-name="product-card" className="product-card bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-w-3 aspect-h-4 relative">
                    <img 
                        data-name="product-image"
                        src={product.image} 
                        alt={product.name}
                        className="product-image w-full h-full object-cover"
                    />
                </div>
                <div data-name="product-info" className="p-6">
                    <h3 data-name="product-name" className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p data-name="product-price" className="text-xl text-blue-600 font-bold mb-4">
                        ₹{product.price.toLocaleString('en-IN')}
                    </p>
                    
                    <div data-name="size-selector" className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Select Size:</p>
                        <div className="flex flex-wrap gap-2 size-selector">
                            {product.sizes.map(size => (
                                <div key={size} className="flex items-center">
                                    <input
                                        type="radio"
                                        id={`size-${product.id}-${size}`}
                                        name={`size-${product.id}`}
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor={`size-${product.id}-${size}`}
                                        className="cursor-pointer px-4 py-2 border rounded-md text-sm hover:border-blue-500 transition-colors"
                                    >
                                        {size}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <p data-name="error-message" className="text-red-500 text-sm mb-4">{error}</p>
                    )}

                    <button
                        data-name="add-to-cart-button"
                        onClick={handleAddToCart}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                        <i className="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}

function ProductGrid({ products, onAddToCart }) {
    try {
        return (
            <div 
                data-name="product-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
            >
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        );
    } catch (error) {
        console.error('ProductGrid component error:', error);
        reportError(error);
        return null;
    }
}

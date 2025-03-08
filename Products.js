function Products({ products, onAddToCart }) {
    try {
        return (
            <div data-name="products-page" className="page-transition" id="products">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
                    <ProductGrid products={products} onAddToCart={onAddToCart} />
                </div>
            </div>
        );
    } catch (error) {
        console.error('Products page error:', error);
        reportError(error);
        return null;
    }
}

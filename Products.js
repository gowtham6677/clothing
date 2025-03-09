function Products({ products, onAddToCart }) {
    try {
        return (
            <div data-name="products-page" className="page-transition py-16 bg-gray-50" id="products">
                <div className="container mx-auto px-6">
                    <h2 className="section-title mb-12">Our Products</h2>
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

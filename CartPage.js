function CartPage({ cart, onUpdateQuantity, onRemove, onCheckout, total }) {
    try {
        return (
            <div data-name="cart-page" className="page-transition py-16">
                <div className="container mx-auto px-6">
                    <h2 className="section-title mb-12">Shopping Cart</h2>
                    <div className="max-w-4xl mx-auto">
                        <Cart
                            items={cart}
                            onUpdateQuantity={onUpdateQuantity}
                            onRemove={onRemove}
                            onCheckout={onCheckout}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CartPage error:', error);
        reportError(error);
        return null;
    }
}

function CheckoutPage({ total, onPlaceOrder }) {
    try {
        return (
            <div data-name="checkout-page" className="page-transition py-16">
                <div className="container mx-auto px-6">
                    <h2 className="section-title mb-12">Checkout</h2>
                    <div className="max-w-4xl mx-auto">
                        <Checkout total={total} onPlaceOrder={onPlaceOrder} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CheckoutPage error:', error);
        reportError(error);
        return null;
    }
}

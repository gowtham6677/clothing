function Cart({ items, onUpdateQuantity, onRemove, onCheckout, total }) {
    try {
        return (
            <div data-name="cart" className="bg-white rounded-lg shadow-lg p-6">
                <h2 data-name="cart-title" className="text-2xl font-bold mb-4">Shopping Cart</h2>
                
                {items.length === 0 ? (
                    <p data-name="empty-cart-message" className="text-gray-500">Your cart is empty</p>
                ) : (
                    <div data-name="cart-content">
                        <div data-name="cart-items" className="space-y-4">
                            {items.map(item => (
                                <CartItem
                                    key={`${item.id}-${item.size}`}
                                    item={item}
                                    onUpdateQuantity={onUpdateQuantity}
                                    onRemove={onRemove}
                                />
                            ))}
                        </div>
                        
                        <div data-name="cart-summary" className="mt-6 border-t pt-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-semibold">Total:</span>
                                <span className="text-xl font-bold">${total.toFixed(2)}</span>
                            </div>
                            
                            <button
                                data-name="checkout-button"
                                onClick={onCheckout}
                                className="btn-primary w-full"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
        return null;
    }
}

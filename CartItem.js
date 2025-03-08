function CartItem({ item, onUpdateQuantity, onRemove }) {
    try {
        const handleQuantityChange = (e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                onUpdateQuantity(item.id, item.size, newQuantity);
            }
        };

        return (
            <div data-name="cart-item" className="cart-item flex items-center p-4 border-b">
                <img 
                    data-name="item-image"
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                />
                <div data-name="item-details" className="ml-4 flex-grow">
                    <h3 data-name="item-name" className="font-semibold">{item.name}</h3>
                    <p data-name="item-size" className="text-gray-600">Size: {item.size}</p>
                    <p data-name="item-price" className="text-gray-800">${item.price.toFixed(2)}</p>
                </div>
                <div data-name="item-quantity" className="flex items-center space-x-2">
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        className="quantity-input border rounded p-1"
                    />
                    <button
                        data-name="remove-button"
                        onClick={() => onRemove(item.id, item.size)}
                        className="text-red-500 hover:text-red-700"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CartItem component error:', error);
        reportError(error);
        return null;
    }
}

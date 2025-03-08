const initialProducts = [
    {
        id: 1,
        name: "Floral Summer Dress",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=800",
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "dress"
    },
    {
        id: 2,
        name: "Evening Gown",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1571733148001-58c058f0ca1d?w=800",
        sizes: ["S", "M", "L"],
        category: "dress"
    },
    {
        id: 3,
        name: "Casual Maxi Dress",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800",
        sizes: ["XS", "S", "M", "L"],
        category: "dress"
    },
    {
        id: 4,
        name: "Cocktail Dress",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
        sizes: ["S", "M", "L", "XL"],
        category: "dress"
    }
];

function useStore() {
    const [cart, setCart] = React.useState([]);
    const [products] = React.useState(initialProducts);

    const addToCart = (product, size, quantity = 1) => {
        try {
            setCart(prevCart => {
                const existingItem = prevCart.find(item => 
                    item.id === product.id && item.size === size
                );

                if (existingItem) {
                    return prevCart.map(item =>
                        item.id === product.id && item.size === size
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    );
                }

                return [...prevCart, { ...product, size, quantity }];
            });
        } catch (error) {
            console.error('Error adding to cart:', error);
            reportError(error);
        }
    };

    const updateCartItem = (productId, size, quantity) => {
        try {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId && item.size === size
                        ? { ...item, quantity }
                        : item
                )
            );
        } catch (error) {
            console.error('Error updating cart item:', error);
            reportError(error);
        }
    };

    const removeFromCart = (productId, size) => {
        try {
            setCart(prevCart => 
                prevCart.filter(item => 
                    !(item.id === productId && item.size === size)
                )
            );
        } catch (error) {
            console.error('Error removing from cart:', error);
            reportError(error);
        }
    };

    const clearCart = () => {
        try {
            setCart([]);
        } catch (error) {
            console.error('Error clearing cart:', error);
            reportError(error);
        }
    };

    const getTotalPrice = () => {
        try {
            return cart.reduce((total, item) => total + item.price * item.quantity, 0);
        } catch (error) {
            console.error('Error calculating total price:', error);
            reportError(error);
            return 0;
        }
    };

    return {
        cart,
        products,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getTotalPrice
    };
}

function App() {
    try {
        const {
            cart,
            products,
            addToCart,
            updateCartItem,
            removeFromCart,
            clearCart,
            getTotalPrice
        } = useStore();

        const [currentPage, setCurrentPage] = React.useState('home');
        const [orderPlaced, setOrderPlaced] = React.useState(false);
        const [notification, setNotification] = React.useState(null);

        const handleAddToCart = (product, size) => {
            try {
                addToCart(product, size);
                setNotification({
                    type: 'success',
                    message: 'Item added to cart successfully!'
                });
                setTimeout(() => setNotification(null), 3000);
            } catch (error) {
                console.error('Error adding to cart:', error);
                reportError(error);
                setNotification({
                    type: 'error',
                    message: 'Failed to add item to cart'
                });
                setTimeout(() => setNotification(null), 3000);
            }
        };

        const handleCartClick = () => {
            try {
                setCurrentPage('cart');
            } catch (error) {
                console.error('Error navigating to cart:', error);
                reportError(error);
            }
        };

        const handleCheckout = () => {
            try {
                setCurrentPage('checkout');
            } catch (error) {
                console.error('Error navigating to checkout:', error);
                reportError(error);
            }
        };

        const sendOrderEmail = async (orderData, cartItems, total) => {
            const orderDetails = cartItems.map(item => 
                `${item.name} (Size: ${item.size}, Quantity: ${item.quantity})`
            ).join('\n');

            const emailBody = `
New Order Details:

Customer Information:
Name: ${orderData.name}
Email: ${orderData.email}
Phone: ${orderData.phone}
Address: ${orderData.address}
City: ${orderData.city}
ZIP: ${orderData.zipCode}

Order Items:
${orderDetails}

Total Amount: $${total.toFixed(2)}
            `;

            const templateParams = {
                to_email: 'gujalmama07@gmail.com',
                from_name: orderData.name,
                message: emailBody,
                reply_to: orderData.email,
                customer_email: orderData.email,
                customer_phone: orderData.phone,
                order_details: orderDetails,
                total_amount: total.toFixed(2)
            };

            try {
                await emailjs.send(
                    'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                    templateParams
                );
                return true;
            } catch (error) {
                console.error('Error sending email:', error);
                return false;
            }
        };

        const handlePlaceOrder = async (orderData) => {
            try {
                const emailSent = await sendOrderEmail(orderData, cart, getTotalPrice());
                
                if (emailSent) {
                    clearCart();
                    setOrderPlaced(true);
                    setNotification({
                        type: 'success',
                        message: 'Order placed successfully! We will contact you soon.'
                    });
                } else {
                    setNotification({
                        type: 'error',
                        message: 'Order placed but failed to send confirmation. We will contact you soon.'
                    });
                }
                
                setTimeout(() => {
                    setOrderPlaced(false);
                    setCurrentPage('home');
                    setNotification(null);
                }, 3000);
            } catch (error) {
                console.error('Error placing order:', error);
                reportError(error);
                setNotification({
                    type: 'error',
                    message: 'Failed to place order. Please try again.'
                });
                setTimeout(() => setNotification(null), 3000);
            }
        };

        const renderNotification = () => {
            if (!notification) return null;

            const bgColor = notification.type === 'success' ? 'bg-green-500' : 'bg-red-500';
            return (
                <div 
                    data-name="notification"
                    className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`}
                >
                    {notification.message}
                </div>
            );
        };

        const renderPage = () => {
            switch (currentPage) {
                case 'cart':
                    return (
                        <CartPage
                            cart={cart}
                            onUpdateQuantity={updateCartItem}
                            onRemove={removeFromCart}
                            onCheckout={handleCheckout}
                            total={getTotalPrice()}
                        />
                    );
                case 'checkout':
                    return (
                        <CheckoutPage
                            total={getTotalPrice()}
                            onPlaceOrder={handlePlaceOrder}
                        />
                    );
                default:
                    return (
                        <div data-name="main-content">
                            <Home />
                            <Products
                                products={products}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    );
            }
        };

        return (
            <div data-name="app" className="min-h-screen bg-gray-50">
                {renderNotification()}
                <Header
                    cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
                    onCartClick={handleCartClick}
                />
                {renderPage()}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return (
            <div data-name="error-boundary" className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
                    <p className="text-gray-600">Please refresh the page or try again later.</p>
                </div>
            </div>
        );
    }
}

// Render the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

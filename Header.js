function Header({ cartItemCount, onCartClick }) {
    try {
        return (
            <header data-name="header" className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div data-name="logo" className="text-2xl font-bold tracking-tight">
                            Fashion Store
                        </div>
                        <nav data-name="navigation" className="flex items-center space-x-8">
                            <a 
                                href="#" 
                                data-name="home-link" 
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                Home
                            </a>
                            <a 
                                href="#products" 
                                data-name="products-link" 
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                Products
                            </a>
                            <button 
                                data-name="cart-button"
                                onClick={onCartClick}
                                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <i className="fas fa-shopping-cart text-xl"></i>
                                {cartItemCount > 0 && (
                                    <span 
                                        data-name="cart-count"
                                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-medium"
                                    >
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}

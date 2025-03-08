function Home() {
    try {
        return (
            <div data-name="home-page" className="page-transition">
                <div data-name="hero-section" className="bg-gradient-to-b from-gray-50 to-white">
                    <div className="hero-content text-center">
                        <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">
                            Welcome to Fashion Store
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Discover the latest trends in fashion and express your unique style
                        </p>
                        <a 
                            href="#products" 
                            className="btn-primary text-lg"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>

                <div data-name="features-section" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="feature-icon">
                                    <i className="fas fa-shipping-fast text-3xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Get your order delivered quickly and securely to your doorstep
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="feature-icon">
                                    <i className="fas fa-undo text-3xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    30-day hassle-free return policy for your peace of mind
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="feature-icon">
                                    <i className="fas fa-headset text-3xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our dedicated team is always here to help you with any questions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}

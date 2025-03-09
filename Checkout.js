function Checkout({ total, onPlaceOrder }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipCode: ''
        });

        const [errors, setErrors] = React.useState({});

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
            if (errors[name]) {
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }));
            }
        };

        const validateForm = () => {
            const newErrors = {};
            
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (!formData.email.trim()) newErrors.email = 'Email is required';
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
            if (!formData.address.trim()) newErrors.address = 'Address is required';
            if (!formData.city.trim()) newErrors.city = 'City is required';
            if (!formData.zipCode.trim()) newErrors.zipCode = 'PIN code is required';

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formData.email && !emailRegex.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }

            // Validate phone number format
            const phoneRegex = /^\d{10}$/;
            if (formData.phone && !phoneRegex.test(formData.phone)) {
                newErrors.phone = 'Invalid phone number (10 digits required)';
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validateForm()) {
                onPlaceOrder(formData);
            }
        };

        return (
            <div data-name="checkout" className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 data-name="checkout-title" className="text-2xl font-bold mb-6">Checkout</h2>
                
                <form onSubmit={handleSubmit}>
                    <div data-name="contact-section" className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit number"
                                    className="w-full border rounded-md p-2"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                        </div>
                    </div>

                    <div data-name="shipping-section" className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">PIN Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                            </div>
                        </div>
                    </div>

                    <div data-name="order-summary" className="mb-6">
                        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Total Amount (Cash on Delivery):</span>
                                <span className="text-xl font-bold">₹{total.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('Checkout component error:', error);
        reportError(error);
        return null;
    }
}

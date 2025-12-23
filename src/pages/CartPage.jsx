// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';

const CartPage = () => {
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
        generateWhatsAppCheckout
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] to-white pt-20">
                <div className="max-w-2xl mx-auto px-4 py-20 text-center">
                    <ShoppingBag className="w-24 h-24 text-gray-200 mx-auto mb-6" />
                    <h1 className="text-3xl font-serif text-[#1A1A1A] mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-500 mb-8">
                        Looks like you haven't added anything to your cart yet.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#5C0A0A] text-white uppercase tracking-[0.15em] hover:from-[#5C0A0A] hover:to-[#8B0000] transition-all"
                    >
                        <ShoppingBag size={18} />
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] to-white">
            {/* Hero */}
            <div className="bg-[#1A1A1A] py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-serif text-white">Your Shopping Cart</h1>
                    <p className="text-gray-400 mt-2">{cartItems.length} items</p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <Link to="/" className="text-gray-400 hover:text-[#8B0000] text-sm flex items-center gap-2">
                    <ArrowLeft size={14} />
                    Continue Shopping
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">

                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        {/* Table Header */}
                        <div className="hidden md:grid md:grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {/* Items */}
                        <div className="divide-y divide-gray-100">
                            {cartItems.map((item) => {
                                const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
                                const itemTotal = price * item.quantity;

                                return (
                                    <div key={item.itemKey} className="py-6 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                                        {/* Product */}
                                        <div className="md:col-span-6 flex gap-4 mb-4 md:mb-0">
                                            <Link to={`/product/${item.id}`} className="w-24 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                                            </Link>
                                            <div>
                                                <Link to={`/product/${item.id}`} className="font-serif text-[#1A1A1A] hover:text-[#8B0000] transition-colors">
                                                    {item.name}
                                                </Link>
                                                {Object.entries(item.options).length > 0 && (
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {Object.entries(item.options).map(([key, value]) => (
                                                            <p key={key}>{key}: {value}</p>
                                                        ))}
                                                    </div>
                                                )}
                                                <button
                                                    onClick={() => removeFromCart(item.itemKey)}
                                                    className="mt-2 text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                                                >
                                                    <Trash2 size={12} /> Remove
                                                </button>
                                            </div>
                                        </div>

                                        {/* Quantity */}
                                        <div className="md:col-span-2 flex items-center justify-center mb-4 md:mb-0">
                                            <div className="flex items-center border border-gray-200">
                                                <button
                                                    onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="px-4 py-1 text-sm min-w-[40px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="md:col-span-2 text-center text-gray-600 mb-2 md:mb-0">
                                            {item.price}
                                        </div>

                                        {/* Total */}
                                        <div className="md:col-span-2 text-right font-serif text-[#8B0000]">
                                            ₹{itemTotal.toLocaleString()}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Clear Cart */}
                        <div className="pt-6 border-t border-gray-200 mt-6">
                            <button
                                onClick={clearCart}
                                className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1 mt-10 lg:mt-0">
                        <div className="bg-white border border-gray-100 p-6 sticky top-28">
                            <h2 className="font-serif text-xl text-[#1A1A1A] mb-6">Order Summary</h2>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-[#1A1A1A]">₹{getCartTotal().toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-[#1A1A1A]">Calculated at checkout</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-6" />

                            <div className="flex justify-between items-center mb-6">
                                <span className="font-serif text-lg">Total</span>
                                <span className="font-serif text-2xl text-[#8B0000]">₹{getCartTotal().toLocaleString()}</span>
                            </div>

                            <a
                                href={generateWhatsAppCheckout()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#8B0000] to-[#5C0A0A] text-white uppercase tracking-[0.15em] font-medium hover:from-[#5C0A0A] hover:to-[#8B0000] transition-all duration-300"
                            >
                                Checkout
                                <ArrowRight size={16} />
                            </a>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Secure checkout via WhatsApp
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPage;

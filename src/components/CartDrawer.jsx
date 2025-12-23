// src/components/CartDrawer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        generateWhatsAppCheckout
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="w-6 h-6 text-[#8B0000]" />
                        <h2 className="text-xl font-serif text-[#1A1A1A]">Your Cart</h2>
                        <span className="text-sm text-gray-400">({cartItems.length} items)</span>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={24} className="text-gray-500" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                            <p className="text-gray-500 font-serif text-lg mb-2">Your cart is empty</p>
                            <p className="text-gray-400 text-sm mb-6">Add some beautiful pieces to get started</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="px-6 py-2 bg-[#8B0000] text-white uppercase tracking-wide text-sm hover:bg-[#5C0A0A] transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.itemKey} className="flex gap-4 pb-6 border-b border-gray-100">
                                    {/* Image */}
                                    <Link
                                        to={`/product/${item.id}`}
                                        onClick={() => setIsCartOpen(false)}
                                        className="w-24 h-32 bg-gray-100 flex-shrink-0 overflow-hidden"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </Link>

                                    {/* Details */}
                                    <div className="flex-1">
                                        <Link
                                            to={`/product/${item.id}`}
                                            onClick={() => setIsCartOpen(false)}
                                            className="font-serif text-[#1A1A1A] hover:text-[#8B0000] transition-colors block mb-1"
                                        >
                                            {item.name}
                                        </Link>

                                        {/* Options */}
                                        {Object.entries(item.options).length > 0 && (
                                            <div className="text-xs text-gray-500 mb-2">
                                                {Object.entries(item.options).map(([key, value]) => (
                                                    <span key={key} className="mr-2">{key}: {value}</span>
                                                ))}
                                            </div>
                                        )}

                                        <p className="text-[#8B0000] font-serif">{item.price}</p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex items-center border border-gray-200">
                                                <button
                                                    onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="px-4 py-1 text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.itemKey)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-100 p-6 bg-[#FDFBF7]">
                        {/* Subtotal */}
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-xl font-serif text-[#1A1A1A]">
                                ₹{getCartTotal().toLocaleString()}
                            </span>
                        </div>

                        <p className="text-xs text-gray-400 mb-4">
                            Shipping and taxes calculated at checkout
                        </p>

                        {/* Checkout Button */}
                        <a
                            href={generateWhatsAppCheckout()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-gradient-to-r from-[#8B0000] to-[#5C0A0A] text-white text-center uppercase tracking-[0.15em] font-medium hover:from-[#5C0A0A] hover:to-[#8B0000] transition-all duration-300"
                        >
                            Checkout
                        </a>

                        {/* View Cart Link */}
                        <Link
                            to="/cart"
                            onClick={() => setIsCartOpen(false)}
                            className="block w-full py-3 mt-2 border border-gray-200 text-center text-sm text-gray-600 hover:border-[#8B0000] hover:text-[#8B0000] transition-colors"
                        >
                            View Full Cart
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;

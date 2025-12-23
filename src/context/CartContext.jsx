// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load from localStorage on init
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('milis-cart');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('milis-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, selectedOptions = {}, quantity = 1) => {
        setCartItems(prev => {
            // Create unique key based on product id and options
            const optionKey = Object.entries(selectedOptions).sort().map(([k, v]) => `${k}:${v}`).join('|');
            const itemKey = `${product.id}-${optionKey}`;

            const existingIndex = prev.findIndex(item => item.itemKey === itemKey);

            if (existingIndex > -1) {
                // Update quantity
                const updated = [...prev];
                updated[existingIndex].quantity += quantity;
                return updated;
            }

            // Add new item
            return [...prev, {
                itemKey,
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                options: selectedOptions,
                quantity
            }];
        });

        // Open cart drawer
        setIsCartOpen(true);
    };

    const removeFromCart = (itemKey) => {
        setCartItems(prev => prev.filter(item => item.itemKey !== itemKey));
    };

    const updateQuantity = (itemKey, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemKey);
            return;
        }
        setCartItems(prev => prev.map(item =>
            item.itemKey === itemKey ? { ...item, quantity: newQuantity } : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
            return total + (price * item.quantity);
        }, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const generateWhatsAppCheckout = () => {
        if (cartItems.length === 0) return '';

        const phoneNumber = '919876543210';
        let message = "Hi! I'd like to order the following items:\n\n";

        cartItems.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
            if (Object.keys(item.options).length > 0) {
                Object.entries(item.options).forEach(([key, value]) => {
                    message += `   ${key}: ${value}\n`;
                });
            }
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: ${item.price}\n\n`;
        });

        message += `Total: ₹${getCartTotal().toLocaleString()}\n\n`;
        message += "Please confirm availability and share payment details.";

        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            isCartOpen,
            setIsCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount,
            generateWhatsAppCheckout
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;

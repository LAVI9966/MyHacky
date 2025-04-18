'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
    accessId: string;
    imageUrl: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: string, accessId: string) => void;
    clearCart: () => void;
    updateQuantity: (itemId: string, accessId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) setCart(JSON.parse(storedCart));
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            // Look for an item with both the same product ID AND access period ID
            const existing = prev.find(i => i.id === item.id && i.accessId === item.accessId);

            if (existing) {
                // If it exists, update its quantity
                return prev.map(i =>
                    (i.id === item.id && i.accessId === item.accessId)
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            // Otherwise add as a new item
            return [...prev, item];
        });
    };

    const removeFromCart = (itemId: string, accessId: string) => {
        setCart(prev => prev.filter(item => !(item.id === itemId && item.accessId === accessId)));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (itemId: string, accessId: string, quantity: number) => {
        setCart(prev =>
            prev.map(item =>
                (item.id === itemId && item.accessId === accessId)
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};
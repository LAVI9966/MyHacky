'use client'

import { useState } from 'react'
import CartDrawer from './CartDrawer'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/Context/CartContext' // Import the useCart hook

export default function CartButton() {
    const [isOpen, setIsOpen] = useState(false)
    const { cart } = useCart() // Get the cart from context

    // Calculate total items in cart
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

    // Toggle the drawer state instead of just opening it
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Button that slides with the drawer - keeping original styling */}
            <button
                onClick={toggleDrawer}
                className={`fixed bottom-4 right-4 z-50 bg-white text-black p-4 rounded-full shadow-lg transform transition-transform duration-300 ${isOpen ? '-translate-x-94' : 'translate-x-0'
                    }`}
            >
                <ShoppingCart />

                {/* Item count badge */}
                {itemCount > 0 && (
                    <span className="absolute -top-2 -left-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {itemCount > 99 ? '99+' : itemCount}
                    </span>
                )}
            </button>

            <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
'use client'

import { useState } from 'react'
import CartDrawer from './CartDrawer'
import { ShoppingCart } from 'lucide-react'

export default function CartButton() {
    const [isOpen, setIsOpen] = useState(false)

    // Toggle the drawer state instead of just opening it
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Button that slides with the drawer */}
            <button
                onClick={toggleDrawer}
                className={`fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 ${isOpen ? '-translate-x-94' : 'translate-x-0'
                    }`}
            >
                <ShoppingCart />
            </button>

            <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
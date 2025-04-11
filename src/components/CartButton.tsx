// components/CartButton.tsx
'use client'

import { useState } from 'react'
import CartDrawer from './CartDrawer'
import { ShoppingCart } from 'lucide-react'

export default function CartButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-full shadow-lg"
            >
                <ShoppingCart />
            </button>

            <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
